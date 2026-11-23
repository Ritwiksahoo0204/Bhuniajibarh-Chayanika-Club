import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import { getAlbums, getAlbumBySlug } from "@/lib/gallery";
import { t as pick } from "@/lib/content";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string; album: string }> };

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => getAlbums().map((a) => ({ locale, album: a.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, album } = await params;
  const found = getAlbumBySlug(album);
  if (!found) return {};
  return {
    title: pick(found.title, locale as Locale),
    description: found.description ? pick(found.description, locale as Locale) : undefined,
  };
}

export default async function AlbumPage({ params }: Props) {
  const { locale: raw, album } = await params;
  setRequestLocale(raw);
  const locale = raw as Locale;
  const found = getAlbumBySlug(album);
  if (!found) notFound();
  const t = await getTranslations({ locale, namespace: "pages.gallery" });

  return (
    <main>
      <PageHeader
        title={pick(found.title, locale)}
        description={found.description ? pick(found.description, locale) : undefined}
      />
      <Section>
        <Container className="space-y-8">
          <Link href="/gallery" className="inline-flex min-h-11 items-center gap-2 font-semibold text-sage-700 hover:underline">
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {t("back")}
          </Link>
          {found.photos.length === 0 ? (
            <p className="card bg-sage-100 text-center">{t("albumEmpty")}</p>
          ) : (
            <PhotoGrid
              photos={found.photos.map((p) => ({
                id: p.id,
                src: p.src,
                alt: pick(p.alt, locale),
                width: p.width,
                height: p.height,
              }))}
            />
          )}
        </Container>
      </Section>
    </main>
  );
}