import Link from "next/link";
import { FloraDivider, FloraDoodle, FloraFlower } from "@/components/FloraArt";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-flora-blush/30 via-flora-cream to-flora-cream" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-flora-terracotta/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-flora-moss/10 blur-3xl" />
        <FloraFlower className="absolute top-28 left-8 md:left-16 w-8 h-8 text-flora-terracotta/25 flora-float hidden md:block" />
        <FloraDoodle className="absolute bottom-32 right-6 md:right-20 w-14 h-14 text-flora-auburn/20 flora-float-delay hidden md:block" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-6 animate-fade-in">
            FLORA · Dresden
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-flora-bark leading-[1.1] mb-8 animate-fade-up [animation-delay:200ms]">
            Swimwear that
            <br />
            <span className="italic text-flora-auburn">stays with you</span>
          </h1>
          <p className="text-lg md:text-xl text-flora-bark/70 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up [animation-delay:400ms] text-balance">
            Für Mädchen die süß aussehen wollen — und trotzdem ohne Sorgen vom
            Dreier springen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:600ms]">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-flora-bark text-flora-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-auburn transition-all hover:scale-[1.02]"
            >
              Jetzt vorbestellen
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-flora-bark/20 text-flora-bark px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:border-flora-auburn hover:text-flora-auburn transition-colors"
            >
              Meine Geschichte
            </Link>
          </div>
          <FloraDivider className="mt-14" />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
                Das Problem
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-flora-bark mb-6 leading-tight">
                Knoten lösen sich.
                <br />
                Bikinis rutschen.
              </h2>
              <p className="text-flora-bark/70 leading-relaxed mb-4">
                Kennst du das? Wasserdruck beim Sprung, lose Bänder, Stoffe die
                nicht halten — und plötzlich denkst du mehr an deinen Bikini als
                an alles andere.
              </p>
              <p className="text-flora-bark/70 leading-relaxed">
                Viele springen deshalb nicht vom Dreier — nicht weil sie nicht
                wollen, sondern weil sie sich nicht sicher fühlen. Genau das
                kenne ich.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-flora-sand via-flora-blush/40 to-flora-terracotta/20 flex items-center justify-center relative overflow-hidden">
                <FloraFlower className="absolute top-6 right-6 w-10 h-10 text-flora-auburn/15" />
                <div className="text-center p-8 relative">
                  <p className="font-display text-6xl text-flora-auburn/30 mb-4">
                    3m
                  </p>
                  <p className="text-sm tracking-wide text-flora-bark/50 uppercase">
                    Sprungbrett · selbstbewusst
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-flora-sand/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
            Worum es geht
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-flora-bark mb-16">
            Schön. Bequem. Selbstbewusst.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
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
              <div key={item.title} className="text-left md:text-center">
                <h3 className="font-display text-2xl text-flora-auburn mb-3">
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
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-flora-terracotta/20 to-flora-moss/20 flex items-center justify-center order-2 md:order-1 relative overflow-hidden">
              <FloraDoodle className="absolute -bottom-2 -left-2 w-20 h-20 text-flora-terracotta/15" />
              <div className="text-center relative">
                <p className="font-display text-3xl text-flora-bark mb-2">
                  The Jump Bikini
                </p>
                <p className="text-xs tracking-widest uppercase text-flora-bark/50">
                  Erstes Design · Vorbestellung
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
                Erstes Design
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-flora-bark mb-6">
                The Jump Bikini
              </h2>
              <p className="text-flora-bark/70 leading-relaxed mb-8">
                Mein erstes Design — aus einem Problem, das ich mit 17 selbst
                kenne. Für alle die vom Beckenrand springen wollen, ohne sich
                Sorgen um ihren Bikini zu machen.
              </p>
              <p className="font-display text-3xl text-flora-bark mb-8">89 €</p>
              <Link
                href="/shop/jump-bikini"
                className="inline-flex items-center justify-center bg-flora-bark text-flora-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-auburn transition-all"
              >
                Details & Vorbestellen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-flora-bark text-flora-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Gerade am Anfang.
            <br />
            <span className="italic text-flora-blush">In Dresden.</span>
          </h2>
          <p className="text-flora-cream/60 leading-relaxed mb-10">
            Ich fange in Dresden an — erst mit Freundinnen, dann weiter. Wenn
            du auch so ein Bikini-Problem kennst: du bist nicht allein.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-flora-cream text-flora-bark px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-blush transition-colors"
          >
            Zum Shop
          </Link>
        </div>
      </section>
    </>
  );
}
