import { getTranslations } from "next-intl/server";
import { CalendarDays, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EventCard } from "@/components/events/EventCard";
import { Countdown } from "@/components/events/Countdown";
import { getFeaturedEvent, getUpcomingEvents, t as pick } from "@/lib/content";
import { formatDateTime } from "@/lib/format";
import type { Locale } from "@/types";

export async function UpcomingEvents({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home.events" });
  const common = await getTranslations({ locale, namespace: "common" });
  const featured = getFeaturedEvent();
  const others = getUpcomingEvents()
    .filter((e) => e.id !== featured?.id)
    .slice(0, 3);

  return (
    <Section>
      <Container className="space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <ButtonLink href="/events" variant="secondary">
            {t("seeAll")}
          </ButtonLink>
        </div>

        {!featured ? (
          <div className="card bg-sage-100 text-center">
            <h3 className="text-xl font-semibold">{t("emptyTitle")}</h3>
            <p className="mt-2">{t("emptyBody")}</p>
          </div>
        ) : (
          <>
            <article className="card grid gap-8 bg-peach-100 md:grid-cols-2 md:items-center md:p-10">
              <div>
                <Badge tone="white">{t("featured")}</Badge>
                <h3 className="mt-4 text-3xl font-semibold">{pick(featured.title, locale)}</h3>
                <p className="mt-3 flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 shrink-0 text-terracotta-600" aria-hidden />
                  {formatDateTime(featured.startsAt, locale)}
                </p>
                <p className="mt-1 flex items-center gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-terracotta-600" aria-hidden />
                  {pick(featured.venue.name, locale)}
                </p>
                <p className="mt-3">{pick(featured.shortDescription, locale)}</p>
                <ButtonLink href={`/events/${featured.slug}`} className="mt-6">
                  {common("viewDetails")}
                </ButtonLink>
              </div>
              <Countdown
                target={featured.startsAt}
                locale={locale}
                labels={{
                  days: t("days"),
                  hours: t("hours"),
                  minutes: t("minutes"),
                  started: t("started"),
                }}
              />
            </article>

            {others.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {others.map((e) => (
                  <EventCard key={e.id} event={e} locale={locale} />
                ))}
              </div>
            )}
          </>
        )}
      </Container>
    </Section>
  );
}