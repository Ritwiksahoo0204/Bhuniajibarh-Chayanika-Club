import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { events } from "@/data/events";
import { getEventBySlug, t as pick } from "@/lib/content";
import { formatDateTime } from "@/lib/format";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Countdown } from "@/components/events/Countdown";
import { ShareButton } from "@/components/events/ShareButton";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const revalidate = 3600; // rebuild at most once an hour

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    events.filter((e) => e.status === "published").map((e) => ({ locale, slug: e.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: pick(event.title, locale as Locale),
    description: pick(event.shortDescription, locale as Locale),
  };
}

export default async function EventPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  setRequestLocale(raw);
  const locale = raw as Locale;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const t = await getTranslations({ locale, namespace: "pages.events" });
  const tc = await getTranslations({ locale, namespace: "events.categories" });
  const home = await getTranslations({ locale, namespace: "home.events" });
  const ended = new Date(event.endsAt ?? event.startsAt) < new Date();
  const reg = event.registration;

  return (
    <main>
      <Section className="!pt-8 md:!pt-12">
        <Container className="space-y-8">
          <Link href="/events" className="inline-flex min-h-11 items-center gap-2 font-semibold text-sage-700 hover:underline">
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {t("back")}
          </Link>

          <div className="relative aspect-[16/9] max-h-96 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-peach-100 to-sage-100">
            {event.image && (
              <Image
                src={event.image.src}
                alt={pick(event.image.alt, locale)}
                fill
                priority
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover"
              />
            )}
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                <Badge>{tc(event.category)}</Badge>
                {ended && <Badge tone="peach">{t("ended")}</Badge>}
              </div>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{pick(event.title, locale)}</h1>
              <h2 className="mt-8 text-2xl font-semibold">{t("about")}</h2>
              <p className="mt-3 text-lg whitespace-pre-line">{pick(event.description, locale)}</p>
            </div>

            <aside className="space-y-5">
              <div className="card space-y-4">
                <div className="flex gap-3">
                  <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden />
                  <div>
                    <p className="font-semibold text-forest-900">{t("when")}</p>
                    <p>{formatDateTime(event.startsAt, locale)}</p>
                    {event.endsAt && <p className="text-sm">→ {formatDateTime(event.endsAt, locale)}</p>}
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden />
                  <div>
                    <p className="font-semibold text-forest-900">{t("where")}</p>
                    <p>{pick(event.venue.name, locale)}</p>
                    {event.venue.address && <p className="text-sm">{pick(event.venue.address, locale)}</p>}
                  </div>
                </div>
              </div>

              {!ended && (
                <Countdown
                  target={event.startsAt}
                  locale={locale}
                  labels={{
                    days: home("days"),
                    hours: home("hours"),
                    minutes: home("minutes"),
                    started: home("started"),
                  }}
                />
              )}

              {!ended && reg.type !== "none" && (
                <div className="card bg-peach-100 space-y-3">
                  <h2 className="text-xl font-semibold">{t("registration")}</h2>
                  {reg.note && <p>{pick(reg.note, locale)}</p>}
                  {reg.deadline && (
                    <p className="text-sm">
                      {t("deadline")}: {formatDateTime(reg.deadline, locale)}
                    </p>
                  )}
                  {reg.type === "rsvp" && <ButtonLink href="/contact">{t("rsvp")}</ButtonLink>}
                  {reg.type === "external" && reg.url && (
                    <ButtonLink href={reg.url} external>
                      {t("register")}
                    </ButtonLink>
                  )}
                </div>
              )}

              <ShareButton
                title={pick(event.title, locale)}
                label={t("share")}
                copiedLabel={t("copied")}
              />
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}