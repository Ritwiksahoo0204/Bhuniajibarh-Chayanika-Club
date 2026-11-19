import { getTranslations } from "next-intl/server";
import { HeartHandshake, Users, Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { club } from "@/data/club";
import type { Locale } from "@/types";

export async function JoinCta({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home.join" });
  const choices = [
    { key: "member", Icon: Users },
    { key: "volunteer", Icon: HeartHandshake },
    { key: "collaborate", Icon: Handshake },
  ] as const;

  return (
    <Section>
      <Container>
        <div className="rounded-[2rem] bg-peach-200 px-6 py-12 text-center shadow-soft md:px-16 md:py-16">
          <h2 className="text-3xl font-semibold md:text-5xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-900">{t("body")}</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {choices.map(({ key, Icon }) => (
              <li
                key={key}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-forest-900 shadow-soft"
              >
                <Icon className="h-5 w-5 text-terracotta-600" aria-hidden />
                {t(key)}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/get-involved">{t("primary")}</ButtonLink>
            {club.social.whatsapp && (
              <ButtonLink href={club.social.whatsapp} external variant="secondary">
                {t("whatsapp")}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}