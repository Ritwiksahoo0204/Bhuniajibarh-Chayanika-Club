import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/types";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { Activities } from "@/components/home/Activities";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Announcements } from "@/components/home/Announcements";
import { JoinCta } from "@/components/home/JoinCta";

export const revalidate = 3600; // rebuild at most once an hour

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = raw as Locale;

  return (
    <main>
      <Hero locale={locale} />
      <AboutPreview locale={locale} />
      <UpcomingEvents locale={locale} />
      <Activities locale={locale} />
      <GalleryPreview locale={locale} />
      <Announcements locale={locale} />
      <JoinCta locale={locale} />
    </main>
  );
}