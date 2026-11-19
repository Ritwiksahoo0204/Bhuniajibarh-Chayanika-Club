"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common");
  const other = locale === "en" ? "bn" : "en";

  return (
    <Link
      href={pathname}
      locale={other}
      lang={other}
      hrefLang={other}
      aria-label={t("switchLanguageLabel")}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full border-2 border-sage-300 px-4 text-sm font-bold text-sage-700 transition duration-200 hover:bg-sage-100",
        className,
      )}
    >
      {t("switchLanguage")}
    </Link>
  );
}
