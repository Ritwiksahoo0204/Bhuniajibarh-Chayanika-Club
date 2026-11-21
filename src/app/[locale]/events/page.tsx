import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { EventCard } from "@/components/events/EventCard";
import { eventCategories } from "@/lib/categories";
import { getPastEvents, getUpcomingEvents } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { EventCategory, Locale } from "@/types";

export const revalidate = 3600;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "pages.events" });
    return { title: t("title"), description: t("description") };
}

export default async function EventsPage({
    params,
    searchParams,
}: {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ category?: string }>;
}) {
    const { locale: raw } = await params;
    setRequestLocale(raw);
    const locale = raw as Locale;
    const { category } = await searchParams;
    const t = await getTranslations({ locale, namespace: "pages.events" });
    const tc = await getTranslations({ locale, namespace: "events.categories" });

    const active = eventCategories.find((c) => c === category) as EventCategory | undefined;
    const matches = (c: EventCategory) => !active || c === active;
    const upcoming = getUpcomingEvents().filter((e) => matches(e.category));
    const past = getPastEvents().filter((e) => matches(e.category));

    const chip = (isActive: boolean) =>
        cn(
            "inline-flex min-h-11 items-center rounded-full border-2 px-4 font-semibold transition duration-200",
            isActive
                ? "border-sage-700 bg-sage-700 text-white"
                : "border-sage-300 text-sage-700 hover:bg-sage-100",
        );

    return (
        <main>
            <PageHeader title={t("title")} description={t("description")} />

            <Section>
                <Container className="space-y-12">
                    <nav aria-label={t("filterLabel")}>
                        <ul className="flex flex-wrap gap-2">
                            <li>
                                <Link href="/events" aria-current={!active ? "true" : undefined} className={chip(!active)}>
                                    {t("all")}
                                </Link>
                            </li>
                            {eventCategories.map((c) => (
                                <li key={c}>
                                    <Link
                                        href={`/events?category=${c}`}
                                        aria-current={active === c ? "true" : undefined}
                                        className={chip(active === c)}
                                    >
                                        {tc(c)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="text-3xl font-semibold">{t("upcoming")}</h2>
                        {upcoming.length === 0 ? (
                            <p className="card mt-6 bg-sage-100 text-center">{t("noUpcoming")}</p>
                        ) : (
                            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {upcoming.map((e) => (
                                    <EventCard key={e.id} event={e} locale={locale} />
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold">{t("past")}</h2>
                        {past.length === 0 ? (
                            <p className="card mt-6 bg-sage-100 text-center">{t("noPast")}</p>
                        ) : (
                            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {past.map((e) => (
                                    <EventCard key={e.id} event={e} locale={locale} />
                                ))}
                            </div>
                        )}
                    </div>
                </Container>
            </Section>
        </main>
    );
}