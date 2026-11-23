import fs from "fs";
import path from "path";
import type { Album, Photo } from "@/types";
import { albums as staticAlbums } from "@/data/albums";

const GALLERY_DIR = path.join(process.cwd(), "public", "photos", "gallery");
const VALID_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function slugToTitle(slug: string): { en: string; bn: string } {
  // Convert "saraswati-puja-2027" to "Saraswati Puja 2027"
  const formatted = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Common Bengali mappings for major festivals
  const lower = slug.toLowerCase();
  let bn = formatted;
  if (lower.includes("saraswati")) {
    bn = "শ্রী শ্রী সরস্বতী পূজা ও বাণী বন্দনা";
  } else if (lower.includes("durga")) {
    bn = "শারদোৎসব ও দুর্গাপূজা";
  } else if (lower.includes("sports")) {
    bn = "বার্ষিক ক্রীড়া প্রতিযোগিতা";
  } else if (lower.includes("blood") || lower.includes("camp")) {
    bn = "রক্তদান ও সমাজসেবা শিবির";
  } else if (lower.includes("kali")) {
    bn = "শ্রী শ্রী শ্যামাপূজা ও দীপাবলি";
  }

  return { en: formatted, bn };
}

export function getAlbums(): Album[] {
  const albumsMap = new Map<string, Album>();

  // 1. Load any static albums defined in code as baseline
  for (const a of staticAlbums) {
    albumsMap.set(a.slug, a);
  }

  // 2. Scan public/photos/gallery directory dynamically
  if (fs.existsSync(GALLERY_DIR)) {
    const entries = fs.readdirSync(GALLERY_DIR, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const folderName = entry.name;
      const albumSlug = folderName;
      const folderPath = path.join(GALLERY_DIR, folderName);

      // Check for meta.json if provided
      let meta: Partial<Album> = {};
      const metaPath = path.join(folderPath, "meta.json");
      if (fs.existsSync(metaPath)) {
        try {
          meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
        } catch {
          // ignore invalid json
        }
      }

      // Read all images inside this folder
      const files = fs.readdirSync(folderPath, { withFileTypes: true });
      const imageFiles = files
        .filter(
          (f) =>
            f.isFile() &&
            VALID_EXTENSIONS.has(path.extname(f.name).toLowerCase()),
        )
        .map((f) => f.name);

      if (imageFiles.length === 0) continue;

      // Find cover image (file named cover.* or the first image)
      const coverFileName =
        imageFiles.find((f) => path.parse(f).name.toLowerCase() === "cover") ??
        imageFiles[0];

      const photos: Photo[] = imageFiles.map((filename, idx) => {
        const cleanName = path.parse(filename).name.replace(/[-_]/g, " ");
        return {
          id: `${albumSlug}-photo-${idx + 1}`,
          src: `/photos/gallery/${folderName}/${filename}`,
          alt: {
            en: cleanName,
            bn: cleanName,
          },
          width: 1200,
          height: 900,
        };
      });

      const titles = meta.title ?? slugToTitle(albumSlug);
      const existing = albumsMap.get(albumSlug);

      const album: Album = {
        id: meta.id ?? existing?.id ?? albumSlug,
        slug: albumSlug,
        title: titles,
        description: meta.description ?? existing?.description ?? {
          en: `Photos and memories from ${titles.en}.`,
          bn: `${titles.bn}-এর স্মরণীয় মুহূর্ত ও ছবি।`,
        },
        date: meta.date ?? existing?.date ?? new Date().toISOString().split("T")[0],
        cover: {
          src: `/photos/gallery/${folderName}/${coverFileName}`,
          alt: titles,
          width: 1200,
          height: 900,
        },
        photos: existing?.photos && existing.photos.length > 0 ? existing.photos : photos,
      };

      albumsMap.set(albumSlug, album);
    }
  }

  // Sort by date descending
  return Array.from(albumsMap.values()).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );
}

export function getAlbumBySlug(slug: string): Album | undefined {
  const all = getAlbums();
  return all.find((a) => a.slug === slug);
}
