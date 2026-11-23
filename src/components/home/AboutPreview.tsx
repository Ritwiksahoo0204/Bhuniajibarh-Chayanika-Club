import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import type { Locale } from "@/types";

export async function AboutPreview({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home.about" });
  const values = ["togetherness", "culture", "service"] as const;

  return (
    <Section tone="sage">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl bg-peach-200" />
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream shadow-soft p-6">
            <div className="relative h-full w-full">
              <Image
                src="/photos/ab.png"
                alt="Chayanika Club Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("body")} />
          <ul className="mt-6 flex flex-wrap gap-2">
            {values.map((v) => (
              <li key={v}>
                <Badge tone="white">{t(v)}</Badge>
              </li>
            ))}
          </ul>
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            {t("learnMore")}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}