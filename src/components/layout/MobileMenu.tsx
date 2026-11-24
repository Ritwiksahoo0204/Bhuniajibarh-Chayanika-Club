"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Item = { href: string; label: string; active: boolean };

export function MobileMenu({
  items,
  joinLabel,
  onClose,
}: {
  items: Item[];
  joinLabel: string;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 top-16 z-30 bg-forest-900/20 backdrop-blur-sm xl:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Dropdown Menu */}
      <div
        id="mobile-menu"
        className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-b-3xl border-t border-sage-200 bg-cream px-6 py-6 shadow-lift xl:hidden animate-in fade-in slide-in-from-top-2 duration-200"
      >
        <nav className="flex flex-col space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              aria-current={item.active ? "page" : undefined}
              className={cn(
                "flex items-center rounded-2xl px-4 py-3 text-lg font-semibold transition duration-150",
                item.active
                  ? "bg-sage-100 text-terracotta-700"
                  : "text-forest-900 hover:bg-sage-100/70",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-5 border-t border-sage-200 pt-5 flex flex-col gap-3">
          <Link
            href="/get-involved"
            onClick={onClose}
            className="btn btn-primary w-full text-center !py-3 shadow-soft"
          >
            {joinLabel}
          </Link>
          <LanguageSwitcher className="justify-center !py-2.5" />
        </div>
      </div>
    </>
  );
}