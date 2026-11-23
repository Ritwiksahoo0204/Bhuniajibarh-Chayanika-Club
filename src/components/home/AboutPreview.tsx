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
        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
          <div className="relative aspect-square w-full max-w-[320px]">
            <Image
              src="/photos/ab.png"
              alt="Chayanika Club"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 640px) 260px, 320px"
              priority
            />
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