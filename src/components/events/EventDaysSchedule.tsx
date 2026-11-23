"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, ZoomIn } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { DaySchedule, Locale } from "@/types";
import { t as pick } from "@/lib/content";
import { cn } from "@/lib/utils";

export function EventDaysSchedule({
  schedule,
  locale,
}: {
  schedule: DaySchedule[];
  locale: Locale;
}) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!schedule || schedule.length === 0) return null;

  const activeDay = schedule[activeDayIndex] ?? schedule[0];

  // Collect all images in current day for lightbox
  const dayImages = activeDay.subEvents
    .filter((s) => s.image)
    .map((s) => ({
      src: s.image!.src,
      alt: pick(s.image!.alt, locale),
    }));

  const openLightbox = (imageSrc: string) => {
    const idx = dayImages.findIndex((img) => img.src === imageSrc);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Day Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-sage-200 pb-4">
        {schedule.map((day, idx) => {
          const isActive = idx === activeDayIndex;
          return (
            <button
              key={day.dayNumber}
              type="button"
              onClick={() => setActiveDayIndex(idx)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold transition duration-200",
                isActive
                  ? "bg-terracotta-600 text-white shadow-soft"
                  : "bg-sage-100 text-forest-900 hover:bg-sage-200",
              )}
            >
              <Calendar className="h-4 w-4" aria-hidden />
              <span>
                {locale === "bn" ? `দিন ${day.dayNumber}` : `Day ${day.dayNumber}`}
              </span>
              <span className="text-xs opacity-80">({day.date})</span>
            </button>
          );
        })}
      </div>

      {/* Active Day Header */}
      <div className="rounded-2xl bg-peach-100/70 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-forest-900">
            {pick(activeDay.title, locale)}
          </h3>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-terracotta-700 shadow-sm">
            {activeDay.date}
          </span>
        </div>
      </div>

      {/* Sub-Events Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {activeDay.subEvents.map((sub) => (
          <article
            key={sub.id}
            className="card card-hover flex flex-col overflow-hidden !p-0"
          >
            {/* Poster Image Slot */}
            {sub.image && (
              <div className="group relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-peach-100 to-sage-100">
                <Image
                  src={sub.image.src}
                  alt={pick(sub.image.alt, locale)}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                />
                <button
                  type="button"
                  onClick={() => openLightbox(sub.image!.src)}
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-forest-900/80 px-3.5 py-1.5 text-xs font-semibold text-white shadow-soft backdrop-blur hover:bg-forest-900"
                  aria-label="View poster in full screen"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>{locale === "bn" ? "পোস্টার দেখুন" : "View Poster"}</span>
                </button>
              </div>
            )}

            {/* Sub-Event Content */}
            <div className="flex flex-1 flex-col p-6">
              <h4 className="text-xl font-semibold text-forest-900">
                {pick(sub.title, locale)}
              </h4>

              <div className="mt-3 space-y-1.5 text-sm text-forest-700">
                {sub.time && (
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-terracotta-600" aria-hidden />
                    <span>{pick(sub.time, locale)}</span>
                  </p>
                )}
                {sub.venue && (
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-terracotta-600" aria-hidden />
                    <span>{pick(sub.venue, locale)}</span>
                  </p>
                )}
              </div>

              {sub.description && (
                <p className="mt-3 text-sm text-forest-700/90 whitespace-pre-line">
                  {pick(sub.description, locale)}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox for Zooming Poster */}
      {dayImages.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          index={lightboxIndex}
          close={() => setLightboxOpen(false)}
          slides={dayImages.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      )}
    </div>
  );
}
