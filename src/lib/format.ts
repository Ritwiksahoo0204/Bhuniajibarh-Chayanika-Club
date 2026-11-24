import type { Locale } from "@/types";

const TZ = "Asia/Kolkata";
// Use Latin numerals (1, 2, 3...) across both Bengali and English for 100% clarity
const intlLocale = (l: Locale) => (l === "bn" ? "bn-IN-u-nu-latn" : "en-IN");

export const formatDay = (iso: string, l: Locale) =>
  new Intl.DateTimeFormat(intlLocale(l), { day: "numeric", timeZone: TZ }).format(new Date(iso));

export const formatMonth = (iso: string, l: Locale) =>
  new Intl.DateTimeFormat(intlLocale(l), { month: "short", timeZone: TZ }).format(new Date(iso));

export const formatDateTime = (iso: string, l: Locale) =>
  new Intl.DateTimeFormat(intlLocale(l), {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: TZ,
  }).format(new Date(iso));

export const formatDate = (iso: string, l: Locale) =>
  new Intl.DateTimeFormat(intlLocale(l), { dateStyle: "medium", timeZone: TZ }).format(
    new Date(iso),
  );