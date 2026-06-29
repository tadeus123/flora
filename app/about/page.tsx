import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 w-full rounded-2xl overflow-hidden">
            <Image
              src="/flora.jpg"
              alt="Flora, Gründerin von FLORA"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
              Über Flora
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-flora-bark mb-6 leading-tight">
              Hi, ich bin Flora.
            </h1>
            <div className="space-y-4 text-flora-bark/70 leading-relaxed">
              <p>
                Lange wusste ich nicht genau, was ich machen will. Aber ich wusste:
                Ich will etwas, das Frauen und Mädchen selbstbewusster macht.
              </p>
              <p>
                Die meisten Bikinis sehen süß aus — bis du vom Dreier springst.
                Dann lösen sich Knoten, Bänder rutschen, und plötzlich denkst du
                mehr an deinen Bikini als an den Sprung. Das kenne ich nur zu gut.
              </p>
              <p>
                Also hab ich mit dem angefangen, was ich selbst am besten kenne.
                FLORA — Bikinis die hübsch aussehen, bequem sind und einfach da
                bleiben wo sie hingehören. Ich lerne gerade jeden Tag dazu.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <section className="py-16 border-t border-flora-sand">
            <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
              Unser Plan
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-flora-bark mb-12">
              Schritt für Schritt. Ich bin noch am Anfang.
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Erstes Sample",
                  desc: "The Jump Bikini — mein erstes Design, gerade in Produktion.",
                },
                {
                  step: "02",
                  title: "Dresden & Sachsen",
                  desc: "Lokal starten, mit Freunden testen, ehrliches Feedback sammeln.",
                },
                {
                  step: "03",
                  title: "Mehr Selbstvertrauen",
                  desc: "Das große Ziel: dass sich Frauen und Mädchen am Wasser frei fühlen.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="border border-flora-sand rounded-2xl p-6"
                >
                  <p className="font-display text-2xl text-flora-auburn/30 mb-3">
                    {item.step}
                  </p>
                  <h3 className="font-display text-lg text-flora-bark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-flora-bark/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 border-t border-flora-sand text-center">
            <p className="font-display text-xl md:text-2xl text-flora-bark italic leading-relaxed text-balance">
              Schön. Bequem. Bleibt wo sie ist.
            </p>
          </section>

          <div className="text-center pb-8">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-flora-bark text-flora-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-auburn transition-colors"
            >
              Zum Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
