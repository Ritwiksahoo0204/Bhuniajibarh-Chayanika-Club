import { getTranslations } from "next-intl/server";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { club } from "@/data/club";
import { navLinks } from "@/lib/nav";
import { t as pick } from "@/lib/content";
import type { Locale } from "@/types";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const socialNames = {
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  whatsapp: "WhatsApp",
} as const;

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const { email, phone } = club.contact;
  const socials = (Object.keys(socialNames) as (keyof typeof socialNames)[])
    .map((key) => ({ key, name: socialNames[key], url: club.social[key] }))
    .filter((s) => s.url);

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${club.address.village} ${club.address.block} ${club.address.district} ${club.address.postalCode}`,
  )}`;

  return (
    <footer className="bg-forest-900 text-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Contact comes first on mobile */}
        <div className="order-2 md:order-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-xl font-semibold">{pick(club.shortName, locale)}</span>
          </div>
          <p className="mt-4 text-cream/80">{pick(club.description, locale)}</p>
        </div>

        <div className="order-3">
          <h2 className="text-lg font-semibold !text-cream">{t("footer.quickLinks")}</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block py-1 text-cream/80 hover:text-white hover:underline"
                >
                  {t(`nav.${l.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-lg font-semibold !text-cream">{t("footer.contactUs")}</h2>
          <ul className="mt-4 space-y-3 text-cream/80">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden />
              <span>
                {t("footer.address")}
                <br />
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  {t("footer.findUs")}
                </a>
              </span>
            </li>
            {email && (
              <li className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0" aria-hidden />
                <a href={`mailto:${email}`} className="hover:text-white hover:underline">
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0" aria-hidden />
                <a href={`tel:${phone}`} className="hover:text-white hover:underline">
                  {phone}
                </a>
              </li>
            )}
            {!email && !phone && <li>{t("footer.contactSoon")}</li>}
          </ul>
        </div>

        <div className="order-4">
          {socials.length > 0 && (
            <>
              <h2 className="text-lg font-semibold !text-cream">{t("footer.followUs")}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border border-cream/30 px-4 font-semibold hover:bg-cream/10"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-5 text-sm text-cream/70">
          <p>
            © {new Date().getFullYear()} {pick(club.name, locale)}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-3">
            <LanguageSwitcher className="!border-cream/30 !text-cream hover:!bg-cream/10" />
            <a
              href="#top"
              aria-label={t("common.backToTop")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 hover:bg-cream/10"
            >
              <ArrowUp className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
