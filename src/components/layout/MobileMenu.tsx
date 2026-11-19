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
    <div
      id="mobile-menu"
      className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-cream px-5 pt-4 pb-10 lg:hidden"
    >
      <nav className="flex flex-col">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "flex min-h-14 items-center border-b border-sage-100 text-xl font-semibold",
              item.active ? "text-terracotta-600" : "text-forest-900",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6 flex flex-col gap-3">
        <Link href="/get-involved" onClick={onClose} className="btn btn-primary w-full">
          {joinLabel}
        </Link>
        <LanguageSwitcher className="justify-center" />
      </div>
    </div>
  );
}