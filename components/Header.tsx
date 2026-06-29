"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FloraFlower } from "@/components/FloraArt";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Über Flora" },
];

export default function Header({ hasBanner = false }: { hasBanner?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="bg-flora-cream/90 backdrop-blur-md border-b border-flora-sand/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-display text-xl sm:text-2xl tracking-[0.15em] sm:tracking-[0.2em] font-medium text-flora-bark hover:text-flora-auburn transition-colors group shrink-0"
            onClick={() => setOpen(false)}
          >
            FLORA
            <FloraFlower className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-flora-terracotta/60 group-hover:text-flora-auburn/70 transition-colors" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-flora-bark/70 hover:text-flora-auburn transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/shop"
              className="hidden sm:inline-flex text-sm font-medium bg-flora-bark text-flora-cream px-5 py-2.5 rounded-full hover:bg-flora-auburn transition-colors"
            >
              Vorbestellen
            </Link>

            <button
              type="button"
              className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-full text-flora-bark hover:bg-flora-sand/60 transition-colors"
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
        <div
          className={`md:hidden fixed inset-x-0 bottom-0 z-[60] bg-flora-cream ${
            hasBanner
              ? "top-[7.25rem] sm:top-[7.5rem]"
              : "top-14 sm:top-16"
          }`}
        >
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-4 sm:px-6 py-6 flex flex-col gap-1 overflow-y-auto">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-4 text-2xl font-display text-flora-bark border-b border-flora-sand/80 active:text-flora-auburn"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-flora-sand">
              <Link
                href="/shop"
                className="flex items-center justify-center w-full bg-flora-bark text-flora-cream py-4 rounded-full text-base font-medium active:bg-flora-auburn transition-colors"
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
