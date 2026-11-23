import Image from "next/image";
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
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
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
                  <dd className="font-display text-forest-900 text-3xl font-semibold">
                    {m.value}
                    {m.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
          <div className="shadow-soft relative col-span-2 aspect-[16/10] -rotate-2 overflow-hidden rounded-3xl">
            <Image
              src="/photos/H1.png"
              alt="Club event"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-sage-100 shadow-soft relative aspect-square min-w-0 rotate-2 overflow-hidden rounded-3xl">
            <Image
              src="/photos/H2.png"
              alt="Cultural program"
              fill
              sizes="(min-width: 1024px) 224px, 50vw"
              className="object-mid object-cover"
            />
          </div>
          <div className="bg-sage-100 shadow-soft relative aspect-square min-w-0 -rotate-1 overflow-hidden rounded-3xl">
            <Image
              src="/photos/H3.png"
              alt="Community gathering"
              fill
              sizes="(min-width: 1024px) 224px, 50vw"
              className="object-m object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
