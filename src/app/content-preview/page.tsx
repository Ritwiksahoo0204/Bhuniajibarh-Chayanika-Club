import Link from "next/link";
import type { Locale } from "@/types";
import { club, milestones } from "@/data/club";
import { activities } from "@/data/activities";
import {
  t,
  getUpcomingEvents,
  getPastEvents,
  getFeaturedEvent,
  getLatestAnnouncements,
} from "@/lib/content";

export default async function ContentPreview({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale: Locale = lang === "bn" ? "bn" : "en";

  const fmt = (iso: string) =>
    new Date(iso).toLocaleString(locale === "bn" ? "bn-IN" : "en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

  const featured = getFeaturedEvent();
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  const news = getLatestAnnouncements();

  return (
    <main className="container-page section space-y-10">
      <div className="flex flex-wrap items-center gap-3">
        <span className="chip">Content preview (temporary)</span>
        <Link className="btn btn-secondary" href="/content-preview?lang=en">English</Link>
        <Link className="btn btn-secondary" href="/content-preview?lang=bn">বাংলা</Link>
      </div>

      <section>
        <h1 className="text-4xl">{t(club.name, locale)}</h1>
        <p className="mt-2">{t(club.tagline, locale)}</p>
        <p className="mt-2">{t(club.description, locale)}</p>
        <p className="mt-2 text-sm">
          {club.address.village}, {club.address.block}, {club.address.district},{" "}
          {club.address.state} {club.address.postalCode}
        </p>
      </section>

      <section>
        <h2 className="text-2xl">Featured event</h2>
        <div className="card mt-3">
          {featured ? (
            <>
              <h3 className="text-xl">{t(featured.title, locale)}</h3>
              <p>{fmt(featured.startsAt)}</p>
              <p>{t(featured.venue.name, locale)}</p>
            </>
          ) : (
            <p>No upcoming event.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl">Upcoming events ({upcoming.length})</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {upcoming.map((e) => (
            <div key={e.id} className="card card-hover">
              <span className="chip">{e.category}</span>
              <h3 className="mt-2 text-lg">{t(e.title, locale)}</h3>
              <p className="text-sm">{fmt(e.startsAt)}</p>
              <p className="mt-1">{t(e.shortDescription, locale)}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl">Past events ({past.length})</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {past.map((e) => (
            <div key={e.id} className="card bg-peach-100">
              <h3 className="text-lg">{t(e.title, locale)}</h3>
              <p className="text-sm">{fmt(e.startsAt)}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl">Activities ({activities.length})</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {activities.map((a) => (
            <div key={a.id} className="card bg-sage-100">
              <h3 className="text-lg">{t(a.title, locale)}</h3>
              <p>{t(a.description, locale)}</p>
              <p className="mt-1 text-xs">icon: {a.icon}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl">Announcements</h2>
        <ul className="mt-3 space-y-2">
          {news.map((a) => (
            <li key={a.id} className="card">
              <span className="chip">{a.tag}</span>{" "}
              {a.pinned && <span className="chip">pinned</span>}
              <p className="mt-2">{t(a.title, locale)}</p>
              <p className="text-sm">{a.date}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl">Milestones</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.id} className="card text-center">
              <p className="text-3xl font-semibold">
                {m.value === null ? "—" : `${m.value}${m.suffix ?? ""}`}
              </p>
              <p>{t(m.label, locale)}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm">A dash means no real figure yet. The real UI will hide these.</p>
      </section>
    </main>
  );
}