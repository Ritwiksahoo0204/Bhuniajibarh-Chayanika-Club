import { getTranslations } from "next-intl/server";
import { Flower2 } from "lucide-react";
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
        <div className="relative mx-auto w-full max-w-md" aria-hidden>
          <div className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl bg-peach-200" />
          <div className="relative flex aspect-[4/3] items-center justify-center rounded-3xl bg-sage-300 shadow-soft">
            <Flower2 className="h-20 w-20 text-sage-700" />
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