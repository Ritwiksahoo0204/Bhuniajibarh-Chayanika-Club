import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { fraunces, nunito, hindSiliguri, notoSerifBengali } from "@/styles/fonts";
import { club } from "@/data/club";
import { t as pick } from "@/lib/content";
import type { Locale } from "@/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("title"), description: t("description") };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${nunito.variable} ${hindSiliguri.variable} ${notoSerifBengali.variable}`}
    >
      <body id="top">
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:shadow-lift"
          >
            {t("skipToContent")}
          </a>
          <Navbar name={pick(club.name, l)} shortName={pick(club.shortName, l)} />
          <div id="main">{children}</div>
          <Footer locale={l} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}