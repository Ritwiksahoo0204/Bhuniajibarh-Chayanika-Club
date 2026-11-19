import { getTranslations } from "next-intl/server";
import { Camera, Music, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { milestones } from "@/data/club";
import { t as pick } from "@/lib/content";
import type { Locale } from "@/types";

export async function Hero({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home.hero" });
  // Only real figures are shown
  const stats = milestones.filter((m) => m.value !== null);

  return (
    <section className="bg-cream pt-10 pb-16 md:pt-16 md:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Badge tone="peach">{t("eyebrow")}</Badge>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">{t("title")}</h1>
          <p className="mt-5 max-w-xl text-lg">{t("body")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/about">{t("primary")}</ButtonLink>
            <ButtonLink href="/events" variant="secondary">
              {t("secondary")}
            </ButtonLink>
          </div>
          {stats.length > 0 && (
            <dl className="mt-10 flex flex-wrap gap-8">
              {stats.map((m) => (
                <div key={m.id}>
                  <dt className="text-sm">{pick(m.label, locale)}</dt>
                  <dd className="font-display text-3xl font-semibold text-forest-900">
                    {m.value}
                    {m.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* Placeholder collage, replaced by real photos later */}
        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4" aria-hidden>
          <div className="col-span-2 flex aspect-[16/10] -rotate-2 items-center justify-center rounded-3xl bg-gradient-to-br from-peach-200 to-peach-100 shadow-soft">
            <Users className="h-16 w-16 text-terracotta-600" />
          </div>
          <div className="flex aspect-square rotate-2 items-center justify-center rounded-3xl bg-sage-300 shadow-soft">
            <Music className="h-12 w-12 text-sage-700" />
          </div>
          <div className="flex aspect-square -rotate-1 items-center justify-center rounded-3xl bg-sage-100 shadow-soft">
            <Camera className="h-12 w-12 text-sage-700" />
          </div>
        </div>
      </Container>
    </section>
  );
}