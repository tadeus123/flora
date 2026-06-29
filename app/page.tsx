import Link from "next/link";
import { FloraDivider, FloraDoodle, FloraFlower } from "@/components/FloraArt";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-7.25rem)] sm:min-h-[calc(100dvh-7.5rem)] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-flora-blush/30 via-flora-cream to-flora-cream" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-flora-terracotta/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-flora-moss/10 blur-3xl" />
        <FloraFlower className="absolute top-8 left-4 w-6 h-6 text-flora-terracotta/20 md:hidden" />
        <FloraFlower className="absolute top-28 left-8 md:left-16 w-8 h-8 text-flora-terracotta/25 hidden md:block" />
        <FloraDoodle className="absolute bottom-32 right-6 md:right-20 w-14 h-14 text-flora-auburn/20 hidden md:block" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-8">
          <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-flora-auburn mb-4 sm:mb-6">
            FLORA · Dresden
          </p>
          <h1 className="font-display text-[2.35rem] leading-[1.08] sm:text-5xl md:text-7xl lg:text-8xl font-medium text-flora-bark mb-5 sm:mb-8">
            Swimwear that
            <br />
            <span className="italic text-flora-auburn">stays with you</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-flora-bark/70 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance px-1">
            Für Mädchen die süß aussehen wollen — und trotzdem ohne Sorgen vom
            Dreier springen.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
            <Link href="/shop" className="btn-primary">
              Jetzt vorbestellen
            </Link>
            <Link href="/about" className="btn-secondary">
              Meine Geschichte
            </Link>
          </div>
          <FloraDivider className="mt-10 sm:mt-14" />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-3 sm:mb-4">
                Das Problem
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-flora-bark mb-4 sm:mb-6 leading-tight">
                Knoten lösen sich.
                <br />
                Bikinis rutschen.
              </h2>
              <p className="text-flora-bark/70 leading-relaxed mb-4 text-[15px] sm:text-base">
                Kennst du das? Wasserdruck beim Sprung, lose Bänder, Stoffe die
                nicht halten — und plötzlich denkst du mehr an deinen Bikini als
                an alles andere.
              </p>
              <p className="text-flora-bark/70 leading-relaxed text-[15px] sm:text-base">
                Viele springen deshalb nicht vom Dreier — nicht weil sie nicht
                wollen, sondern weil sie sich nicht sicher fühlen. Genau das
                kenne ich.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-[4/5] max-h-[70vh] md:max-h-none rounded-2xl bg-gradient-to-br from-flora-sand via-flora-blush/40 to-flora-terracotta/20 flex items-center justify-center relative overflow-hidden">
                <FloraFlower className="absolute top-6 right-6 w-10 h-10 text-flora-auburn/15" />
                <div className="text-center p-8 relative">
                  <p className="font-display text-5xl sm:text-6xl text-flora-auburn/30 mb-4">
                    3m
                  </p>
                  <p className="text-xs sm:text-sm tracking-wide text-flora-bark/50 uppercase">
                    Sprungbrett · selbstbewusst
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-32 bg-flora-sand/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-3 sm:mb-4">
            Worum es geht
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-flora-bark mb-10 sm:mb-16">
            Schön. Bequem. Selbstbewusst.
          </h2>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-12">
            {[
              {
                title: "Schön",
                desc: "Süß aussehen am Freibad — ohne dass du dich dabei unsicher fühlst.",
              },
              {
                title: "Bequem",
                desc: "Weiche Stoffe, die sich anfühlen wie eine zweite Haut. Den ganzen Tag.",
              },
              {
                title: "Selbstbewusst",
                desc: "Wenn dein Bikini hält, denkst du an den Sprung — nicht an lose Knoten.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-left md:text-center bg-white/50 md:bg-transparent rounded-2xl p-5 md:p-0"
              >
                <h3 className="font-display text-xl sm:text-2xl text-flora-auburn mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-flora-bark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-[4/5] sm:aspect-square max-h-[65vh] sm:max-h-none rounded-2xl bg-gradient-to-br from-flora-terracotta/20 to-flora-moss/20 flex items-center justify-center order-2 md:order-1 relative overflow-hidden">
              <FloraDoodle className="absolute -bottom-2 -left-2 w-20 h-20 text-flora-terracotta/15" />
              <div className="text-center relative">
                <p className="font-display text-2xl sm:text-3xl text-flora-bark mb-2">
                  The Jump Bikini
                </p>
                <p className="text-xs tracking-widest uppercase text-flora-bark/50">
                  Erstes Design · Vorbestellung
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-3 sm:mb-4">
                Erstes Design
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-flora-bark mb-4 sm:mb-6">
                The Jump Bikini
              </h2>
              <p className="text-flora-bark/70 leading-relaxed mb-6 sm:mb-8 text-[15px] sm:text-base">
                Mein erstes Design — aus einem Problem, das ich mit 17 selbst
                kenne. Für alle die vom Beckenrand springen wollen, ohne sich
                Sorgen um ihren Bikini zu machen.
              </p>
              <p className="font-display text-2xl sm:text-3xl text-flora-bark mb-6 sm:mb-8">
                89 €
              </p>
              <Link href="/shop/jump-bikini" className="btn-primary">
                Details & Vorbestellen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-flora-bark text-flora-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6">
            Gerade am Anfang.
            <br />
            <span className="italic text-flora-blush">In Dresden.</span>
          </h2>
          <p className="text-flora-cream/60 leading-relaxed mb-8 sm:mb-10 text-[15px] sm:text-base">
            Ich fange in Dresden an — erst mit Freundinnen, dann weiter. Wenn du
            auch so ein Bikini-Problem kennst: du bist nicht allein.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-flora-cream text-flora-bark px-8 py-4 min-h-[3rem] rounded-full text-sm font-medium tracking-wide hover:bg-flora-blush active:scale-[0.98] transition-colors"
          >
            Zum Shop
          </Link>
        </div>
      </section>
    </>
  );
}
