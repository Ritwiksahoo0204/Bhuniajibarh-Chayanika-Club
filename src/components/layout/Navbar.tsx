"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Navbar({ name, shortName }: { name: string; shortName: string }) {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow appears once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the page changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scrolling while the menu is open, and close with Escape
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const items = navLinks.map((l) => ({
    href: l.href,
    label: t(`nav.${l.key}`),
    active: isActive(l.href),
  }));

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-16 bg-cream/90 backdrop-blur transition-shadow duration-200",
        scrolled && "shadow-soft",
      )}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Logo />
          <span className="truncate font-display text-lg font-semibold text-forest-900">
            <span className="hidden xl:inline">{name}</span>
            <span className="xl:hidden">{shortName}</span>
          </span>
        </Link>

        <nav aria-label={t("common.mainNavigation")} className="hidden items-center gap-1 xl:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition duration-200 hover:bg-sage-100",
                item.active ? "bg-sage-100 text-terracotta-700" : "text-forest-900",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden xl:inline-flex" />
          <Link href="/get-involved" className="btn btn-primary hidden !py-2 !px-5 whitespace-nowrap xl:inline-flex">
            {t("common.joinUs")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest-900 hover:bg-sage-100 xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <MobileMenu items={items} joinLabel={t("common.joinUs")} onClose={() => setOpen(false)} />
      )}
    </header>
  );
}
