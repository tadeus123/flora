import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-6">
            FLORA · Dresden
          </p>
          <h1 className="font-display text-[2.35rem] leading-[1.08] sm:text-5xl md:text-6xl font-medium text-flora-bark mb-6">
            Swimwear that
            <br />
            <span className="italic text-flora-auburn">stays with you</span>
          </h1>
          <p className="text-base sm:text-lg text-flora-bark/70 max-w-lg mx-auto mb-10 leading-relaxed text-balance">
            Bikinis die Mädchen selbstbewusster machen — schön, bequem, und
            ohne ständig an den Bikini zu denken.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
            <Link href="/shop" className="btn-primary">
              Jetzt vorbestellen
            </Link>
            <Link href="/about" className="btn-secondary">
              Meine Geschichte
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-flora-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
                Die Vision
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-flora-bark mb-6 leading-tight">
                Mehr Selbstvertrauen im Bikini.
              </h2>
              <p className="text-flora-bark/70 leading-relaxed mb-4">
                FLORA ist Swimwear, in der du dich sicher fühlst — hübsch,
                bequem, und ohne dass du ständig checkst ob noch alles sitzt.
              </p>
              <p className="text-flora-bark/70 leading-relaxed text-sm">
                <span className="text-flora-bark">Ein Beispiel:</span> Beim Sprung
                vom Dreier lösen sich bei vielen Bikinis die Knoten — und
                plötzlich denkst du mehr an deinen Bikini als an den Moment.
              </p>
            </div>
            <div className="media-placeholder aspect-[4/5] max-h-[60vh] md:max-h-none">
              <div className="text-center p-8">
                <p className="text-xs tracking-widest uppercase text-flora-bark/40 mb-2">
                  z.&nbsp;B.
                </p>
                <p className="font-display text-5xl text-flora-bark/25 mb-2">
                  3m
                </p>
                <p className="text-xs tracking-widest uppercase text-flora-bark/40">
                  Sprungbrett
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-flora-sand bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4 text-center">
            Worum es geht
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-flora-bark mb-12 text-center">
            Schön. Bequem. Selbstbewusst.
          </h2>
          <div className="grid gap-10 md:grid-cols-3 md:gap-12 max-w-4xl md:max-w-none mx-auto">
            {[
              {
                title: "Schön",
                desc: "Süß aussehen am Freibad — ohne dass du dich dabei unsicher fühlst.",
              },
              {
                title: "Bequem",
                desc: "Weiche Stoffe, die sich anfühlen wie eine zweite Haut.",
              },
              {
                title: "Selbstbewusst",
                desc: "Du denkst an dich — nicht daran, ob dein Bikini mitmacht.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl text-flora-bark mb-2">
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

      <section className="py-16 md:py-24 border-t border-flora-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="media-placeholder aspect-square order-2 md:order-1">
              <div className="text-center p-6">
                <p className="font-display text-2xl text-flora-bark/50 mb-1">
                  The Jump Bikini
                </p>
                <p className="text-xs tracking-widest uppercase text-flora-bark/40">
                  Erstes Design
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
                Erstes Design
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-flora-bark mb-4">
                The Jump Bikini
              </h2>
              <p className="text-flora-bark/70 leading-relaxed mb-6">
                Mein erstes Design für mehr Selbstvertrauen im Bikini — schön,
                bequem, und gemacht damit du dich am Wasser frei fühlst.
              </p>
              <p className="font-display text-2xl text-flora-bark mb-8">89 €</p>
              <Link href="/shop/jump-bikini" className="btn-primary">
                Details & Vorbestellen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-flora-bark text-flora-cream border-t border-flora-bark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4">
            Gerade am Anfang. In Dresden.
          </h2>
          <p className="text-flora-cream/70 leading-relaxed mb-8 text-sm sm:text-base">
            Ich baue FLORA für Mädchen die sich im Bikini sicher fühlen wollen.
            Gerade fange ich mit Freundinnen in Dresden an.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-flora-cream text-flora-bark px-8 py-4 min-h-[3rem] rounded-full text-sm font-medium tracking-wide hover:bg-white transition-colors"
          >
            Zum Shop
          </Link>
        </div>
      </section>
    </>
  );
}
