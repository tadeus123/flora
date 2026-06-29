"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Über Flora" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="bg-flora-cream border-b border-flora-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl tracking-[0.15em] sm:tracking-[0.2em] font-medium text-flora-bark hover:text-flora-auburn transition-colors shrink-0"
            onClick={() => setOpen(false)}
          >
            FLORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-flora-bark/70 hover:text-flora-auburn transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/shop"
              className="md:hidden text-sm text-flora-bark/80 px-3 py-2 min-h-[2.75rem] flex items-center"
            >
              Shop
            </Link>
            <Link
              href="/shop"
              className="hidden md:inline-flex text-sm font-medium bg-flora-bark text-flora-cream px-5 py-2.5 rounded-full hover:bg-flora-auburn transition-colors"
            >
              Vorbestellen
            </Link>

            <button
              type="button"
              className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-flora-bark"
              aria-expanded={open}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 z-[60] bg-flora-cream border-t border-flora-sand">
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-4 py-4 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-4 text-xl font-display text-flora-bark border-b border-flora-sand last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Link
                href="/shop"
                className="flex items-center justify-center w-full bg-flora-bark text-flora-cream py-4 rounded-full text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                Jetzt vorbestellen
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
