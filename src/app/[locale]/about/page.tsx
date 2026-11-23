import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/PageHeader";
import { team } from "@/data/team";
import { t as pick } from "@/lib/content";
import type { Locale } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = raw as Locale;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  const values = ["togetherness", "culture", "service"] as const;
  const groups = ["committee", "advisor", "volunteer"] as const;

  return (
    <main>
      <PageHeader title={t("title")} description={t("description")} />

      <Section>
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold">{t("storyTitle")}</h2>
            <p className="mt-4 text-lg">{t("storyBody")}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">{t("whyTitle")}</h2>
            <p className="mt-4 text-lg">{t("whyBody")}</p>
          </div>
        </Container>
      </Section>

      <Section tone="peach">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="text-2xl font-semibold">{t("visionTitle")}</h2>
            <p className="mt-3">{t("visionBody")}</p>
          </div>
          <div className="card">
            <h2 className="text-2xl font-semibold">{t("missionTitle")}</h2>
            <p className="mt-3">{t("missionBody")}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeading title={t("valuesTitle")} align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v} className="card bg-sage-100">
                <h3 className="text-xl font-semibold">{t(`values.${v}.title`)}</h3>
                <p className="mt-2">{t(`values.${v}.body`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sage">
        <Container className="space-y-10">
          <SectionHeading title={t("teamTitle")} />
          {team.length === 0 ? (
            <div className="card text-center">
              <p>{t("teamEmpty")}</p>
            </div>
          ) : (
            groups.map((g) => {
              const members = team.filter((m) => m.group === g).sort((a, b) => a.order - b.order);
              if (members.length === 0) return null;
              return (
                <div key={g}>
                  <h3 className="text-xl font-semibold">{t(`groups.${g}`)}</h3>
                  <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((m) => (
                      <li key={m.id} className="card flex items-center gap-4">
                        {m.photo ? (
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-soft">
                            <Image
                              src={m.photo.src}
                              alt={pick(m.photo.alt, locale)}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                        ) : (
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-peach-200">
                            <User className="h-7 w-7 text-terracotta-700" aria-hidden />
                          </span>
                        )}
                        <div>
                          <p className="font-semibold text-forest-900">{pick(m.name, locale)}</p>
                          <p className="text-sm">{pick(m.role, locale)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </Container>
      </Section>
    </main>
  );
}