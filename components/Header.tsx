import Link from "next/link";
import { FloraFlower } from "@/components/FloraArt";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Über Flora" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-flora-cream/80 backdrop-blur-md border-b border-flora-sand/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl tracking-[0.2em] font-medium text-flora-bark hover:text-flora-auburn transition-colors group"
        >
          FLORA
          <FloraFlower className="w-3.5 h-3.5 text-flora-terracotta/60 group-hover:text-flora-auburn/70 transition-colors hidden sm:block" />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm tracking-wide text-flora-bark/70 hover:text-flora-auburn transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/shop"
          className="text-sm font-medium bg-flora-bark text-flora-cream px-5 py-2 rounded-full hover:bg-flora-auburn transition-colors"
        >
          Vorbestellen
        </Link>
      </div>
    </header>
  );
}
