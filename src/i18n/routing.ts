import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "bn"],
  defaultLocale: "en",
  localePrefix: "as-needed", // English: /events   Bengali: /bn/events
  localeDetection: false, // everyone starts on English unless they choose Bengali
});