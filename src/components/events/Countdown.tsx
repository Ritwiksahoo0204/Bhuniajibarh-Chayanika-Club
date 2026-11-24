"use client";

import { useEffect, useState } from "react";

type Props = {
  target: string;
  locale: string;
  labels: { days: string; hours: string; minutes: string; started: string };
};

export function Countdown({ target, locale, labels }: Props) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until the browser clock is known, so server and browser agree
  if (now === null) return <div className="h-20" aria-hidden />;

  const diff = new Date(target).getTime() - now;
  if (diff <= 0) return <p className="font-semibold text-forest-900">{labels.started}</p>;

  // Use clean standard numerals (1, 2, 3...) for instant readability across all languages
  const num = new Intl.NumberFormat("en-IN");
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);

  const parts = [
    { v: days, l: labels.days },
    { v: hours, l: labels.hours },
    { v: minutes, l: labels.minutes },
  ];

  return (
    <div className="flex gap-3">
      {parts.map((p) => (
        <div key={p.l} className="min-w-20 rounded-2xl bg-white px-4 py-3 text-center shadow-soft">
          <p className="font-display text-3xl leading-none font-semibold text-forest-900">
            {num.format(p.v)}
          </p>
          <p className="mt-1 text-xs font-bold text-terracotta-600 uppercase">{p.l}</p>
        </div>
      ))}
    </div>
  );
}