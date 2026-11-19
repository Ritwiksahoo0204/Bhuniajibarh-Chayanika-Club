import type { Localized, Locale, EventItem, Announcement } from "@/types";
import { events } from "@/data/events";
import { announcements } from "@/data/announcements";

/** Pick the right language, falling back to English if Bengali is missing */
export function t(text: Localized, locale: Locale): string {
  return text[locale] || text.en;
}

const published = (e: EventItem) => e.status === "published";
const byDate = (a: EventItem, b: EventItem) =>
  new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime();

export function getUpcomingEvents(now = new Date()): EventItem[] {
  return events
    .filter(published)
    .filter((e) => new Date(e.endsAt ?? e.startsAt) >= now)
    .sort(byDate);
}

export function getPastEvents(now = new Date()): EventItem[] {
  return events
    .filter(published)
    .filter((e) => new Date(e.endsAt ?? e.startsAt) < now)
    .sort((a, b) => byDate(b, a));
}

export function getFeaturedEvent(): EventItem | undefined {
  const upcoming = getUpcomingEvents();
  return upcoming.find((e) => e.featured) ?? upcoming[0];
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug && published(e));
}

export function getLatestAnnouncements(limit = 3, now = new Date()): Announcement[] {
  return announcements
    .filter((a) => !a.expiresAt || new Date(a.expiresAt) >= now)
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || +new Date(b.date) - +new Date(a.date))
    .slice(0, limit);
}
