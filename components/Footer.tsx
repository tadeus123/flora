import Link from "next/link";
import { FloraFlower } from "@/components/FloraArt";

export default function Footer() {
  return (
    <footer className="bg-flora-bark text-flora-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          <div>
            <p className="font-display text-2xl tracking-[0.2em] text-flora-cream mb-4 flex items-center gap-2">
              FLORA
              <FloraFlower className="w-3.5 h-3.5 text-flora-blush/50" />
            </p>
            <p className="text-sm leading-relaxed text-flora-cream/60">
              Flora clothing GmbH
              <br />
              Dresden, Sachsen
              <br />
              Deutschland
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-flora-cream/40 mb-4">
              Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:text-flora-blush transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-flora-blush transition-colors">
                  Über Flora
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-flora-cream/40 mb-4">
              Kontakt
            </p>
            <p className="text-sm text-flora-cream/60">
              <a
                href="mailto:hello@flora-swim.com"
                className="hover:text-flora-blush transition-colors"
              >
                hello@flora-swim.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 pt-8 border-t border-flora-cream/10 flex flex-col gap-3 sm:flex-row sm:justify-between text-xs text-flora-cream/40 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Flora clothing GmbH</p>
          <p>Schön. Bequem. Bleibt wo sie ist.</p>
        </div>
      </div>
    </footer>
  );
}
