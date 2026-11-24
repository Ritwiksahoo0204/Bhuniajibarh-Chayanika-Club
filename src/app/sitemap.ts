import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { events } from "@/data/events";
import { getAlbums } from "@/lib/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chayanikaclub.org";

  const staticPages = [
    "",
    "/about",
    "/events",
    "/gallery",
    "/get-involved",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // 1. Static Pages for both English and Bengali
  for (const page of staticPages) {
    for (const locale of routing.locales) {
      const path = locale === routing.defaultLocale ? page : `/${locale}${page}`;
      entries.push({
        url: `${siteUrl}${path || "/"}`,
        lastModified: new Date(),
        changeFrequency: page === "" || page === "/events" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }
  }

  // 2. Dynamic Event Pages
  for (const event of events) {
    if (event.status !== "published") continue;
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${siteUrl}${prefix}/events/${event.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
  }

  // 3. Dynamic Gallery Albums
  const albums = getAlbums();
  for (const album of albums) {
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${siteUrl}${prefix}/gallery/${album.slug}`,
        lastModified: new Date(album.date || new Date()),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
