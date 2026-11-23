import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Camera } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAlbums } from "@/lib/gallery";
import { t as pick } from "@/lib/content";
import { formatDate } from "@/lib/format";
import type { Locale } from "@/types";

export const revalidate = 60; // Revalidate dynamic gallery additions every minute

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.gallery" });
  return { title: t("title"), description: t("description") };
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = raw as Locale;
  const t = await getTranslations({ locale, namespace: "pages.gallery" });
  const sorted = getAlbums();

  return (
    <main>
      <PageHeader title={t("title")} description={t("description")} />
      <Section>
        <Container>
          {sorted.length === 0 ? (
            <div className="card bg-sage-100 text-center">
              <Camera className="mx-auto h-10 w-10 text-sage-700" aria-hidden />
              <h2 className="mt-3 text-xl font-semibold">{t("emptyTitle")}</h2>
              <p className="mt-1">{t("emptyBody")}</p>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((a) => (
                <li key={a.id}>
                  <Link href={`/gallery/${a.slug}`} className="card card-hover block h-full overflow-hidden !p-0">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-peach-100 to-sage-100 overflow-hidden">
                      {a.cover && (
                        <Image
                          src={a.cover.src}
                          alt={pick(a.cover.alt, locale)}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-contain p-2"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold">{pick(a.title, locale)}</h2>
                      <p className="mt-1 text-sm">
                        {formatDate(a.date, locale)} · {a.photos.length} {t("photos")}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </main>
  );
}