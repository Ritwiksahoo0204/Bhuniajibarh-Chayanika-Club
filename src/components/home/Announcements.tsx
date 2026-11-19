import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { milestones } from "@/data/club";
import { getLatestAnnouncements, t as pick } from "@/lib/content";
import { formatDate } from "@/lib/format";
import type { Locale } from "@/types";

export async function Announcements({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home.news" });
  const items = getLatestAnnouncements(3);
  const stats = milestones.filter((m) => m.value !== null);

  // Hide the whole section if there is nothing real to show
  if (items.length === 0 && stats.length === 0) return null;

  return (
    <Section tone="sageDeep">
      <Container className="grid gap-10 lg:grid-cols-2">
        {items.length > 0 && (
          <div>
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
            <ul className="mt-6 space-y-3">
              {items.map((a) => (
                <li key={a.id} className="card !p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={a.tag === "registration" ? "peach" : "sage"}>
                      {t(`tags.${a.tag}`)}
                    </Badge>
                    <time className="text-sm" dateTime={a.date}>
                      {formatDate(a.date, locale)}
                    </time>
                  </div>
                  <p className="mt-2 font-semibold text-forest-900">{pick(a.title, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {stats.length > 0 && (
          <div>
            <SectionHeading title={t("journey")} />
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((m) => (
                <div key={m.id} className="card text-center">
                  <dd className="font-display text-4xl font-semibold text-forest-900">
                    {m.value}
                    {m.suffix}
                  </dd>
                  <dt className="mt-1">{pick(m.label, locale)}</dt>
                </div>
              ))}
            </dl>
          </div>
        )}
      </Container>
    </Section>
  );
}