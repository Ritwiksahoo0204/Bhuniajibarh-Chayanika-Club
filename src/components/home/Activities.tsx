import { getTranslations } from "next-intl/server";
import { BookOpen, HeartHandshake, Music, PartyPopper, Sparkles, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { activities } from "@/data/activities";
import { t as pick } from "@/lib/content";
import type { Locale } from "@/types";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Music,
  PartyPopper,
  Sparkles,
  HeartHandshake,
  Trophy,
  BookOpen,
};

export async function Activities({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home.activities" });

  return (
    <Section tone="peach">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => {
            const Icon = icons[a.icon] ?? Sparkles;
            return (
              <div key={a.id} className="card card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100">
                  <Icon className="h-6 w-6 text-sage-700" aria-hidden />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{pick(a.title, locale)}</h3>
                <p className="mt-1">{pick(a.description, locale)}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
