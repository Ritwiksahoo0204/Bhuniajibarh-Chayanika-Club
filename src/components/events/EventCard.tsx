import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  BookOpen,
  HeartHandshake,
  MapPin,
  Music,
  PartyPopper,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { t as pick } from "@/lib/content";
import { formatDay, formatDateTime, formatMonth } from "@/lib/format";
import type { EventCategory, EventItem, Locale } from "@/types";
import { Badge } from "@/components/ui/Badge";

const categoryIcons: Record<EventCategory, React.ComponentType<{ className?: string }>> = {
  cultural: Music,
  festival: PartyPopper,
  youth: Sparkles,
  service: HeartHandshake,
  sports: Trophy,
  learning: BookOpen,
};

export async function EventCard({ event, locale }: { event: EventItem; locale: Locale }) {
  const t = await getTranslations({ locale });
  const Icon = categoryIcons[event.category];

  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden !p-0">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-peach-100 to-sage-100">
        {event.image ? (
          <Image
            src={event.image.src}
            alt={pick(event.image.alt, locale)}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center" aria-hidden>
            <Icon className="h-14 w-14 text-sage-500" />
          </div>
        )}
        <div className="absolute top-3 left-3 rounded-2xl bg-white px-3 py-2 text-center shadow-soft">
          <p className="font-display text-2xl leading-none font-semibold text-forest-900">
            {formatDay(event.startsAt, locale)}
          </p>
          <p className="text-xs font-bold text-terracotta-600 uppercase">
            {formatMonth(event.startsAt, locale)}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge className="self-start">{t(`events.categories.${event.category}`)}</Badge>
        <h3 className="mt-3 text-xl font-semibold">{pick(event.title, locale)}</h3>
        <p className="mt-1 text-sm">{formatDateTime(event.startsAt, locale)}</p>
        <p className="mt-2 flex items-start gap-2 text-sm">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-600" aria-hidden />
          {pick(event.venue.name, locale)}
        </p>
        <p className="mt-3 line-clamp-2">{pick(event.shortDescription, locale)}</p>
        <Link
          href={`/events/${event.slug}`}
          className="btn btn-soft mt-auto self-start"
          style={{ marginTop: "1.25rem" }}
        >
          {t("common.viewDetails")}
        </Link>
      </div>
    </article>
  );
}