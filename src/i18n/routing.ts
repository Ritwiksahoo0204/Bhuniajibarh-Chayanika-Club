import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["bn", "en"],
  defaultLocale: "bn",
  localePrefix: "as-needed", // Bengali: /   English: /en
  localeDetection: false, // everyone starts on Bengali unless they choose English
});