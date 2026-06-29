import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-flora-bark text-flora-cream/80 border-t border-flora-bark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-flora-cream mb-3">
              FLORA
            </p>
            <p className="text-sm leading-relaxed text-flora-cream/60">
              Flora clothing GmbH
              <br />
              Dresden, Sachsen
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-flora-cream/40 mb-3">
              Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:text-flora-cream transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-flora-cream transition-colors">
                  Über Flora
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-flora-cream/40 mb-3">
              Kontakt
            </p>
            <a
              href="mailto:hello@flora-swim.com"
              className="text-sm hover:text-flora-cream transition-colors"
            >
              hello@flora-swim.com
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-flora-cream/10 flex flex-col gap-2 sm:flex-row sm:justify-between text-xs text-flora-cream/40">
          <p>© {new Date().getFullYear()} Flora clothing GmbH</p>
          <p>Schön. Bequem. Selbstbewusst.</p>
        </div>
      </div>
    </footer>
  );
}
