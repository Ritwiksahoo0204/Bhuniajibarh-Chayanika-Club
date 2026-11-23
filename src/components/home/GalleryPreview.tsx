import { getTranslations } from "next-intl/server";
import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoGrid, type GridPhoto } from "@/components/gallery/PhotoGrid";
import { getAlbums } from "@/lib/gallery";
import { t as pick } from "@/lib/content";
import type { Locale } from "@/types";

export async function GalleryPreview({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home.gallery" });

  const photos: GridPhoto[] = getAlbums()
    .flatMap((a) => a.photos)
    .slice(0, 6)
    .map((p) => ({
      id: p.id,
      src: p.src,
      alt: pick(p.alt, locale),
      width: p.width,
      height: p.height,
    }));

  return (
    <Section>
      <Container className="space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
          <ButtonLink href="/gallery" variant="secondary">
            {t("viewAll")}
          </ButtonLink>
        </div>
        {photos.length > 0 ? (
          <PhotoGrid photos={photos} />
        ) : (
          <div className="card bg-sage-100 text-center">
            <Camera className="mx-auto h-10 w-10 text-sage-700" aria-hidden />
            <h3 className="mt-3 text-xl font-semibold">{t("emptyTitle")}</h3>
            <p className="mt-1">{t("emptyBody")}</p>
          </div>
        )}
      </Container>
    </Section>
  );
}