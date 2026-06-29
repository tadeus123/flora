import Image from "next/image";
import Link from "next/link";
import { FloraDivider, FloraFlower } from "@/components/FloraArt";

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 w-full">
            <div className="absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-flora-blush/40 to-flora-sand/60 -z-10" />
            <div className="relative h-full rounded-2xl overflow-hidden ring-1 ring-flora-sand">
              <Image
                src="/flora.jpg"
                alt="Flora, Gründerin von FLORA"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <FloraFlower className="absolute -bottom-3 -right-3 w-9 h-9 text-flora-terracotta/50 bg-flora-cream rounded-full p-1.5 shadow-sm" />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4 flex items-center gap-2">
              <FloraFlower className="w-3 h-3 text-flora-terracotta/60" />
              Über Flora
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-flora-bark mb-5 sm:mb-6 leading-tight">
              Hi, ich bin Flora — 17, aus Dresden.
            </h1>
            <div className="space-y-4 text-flora-bark/70 leading-relaxed">
              <p>
                Lange wusste ich nicht, was ich machen will. Aber ich wusste: Ich
                will etwas, das Mädchen selbstbewusster macht — am Freibad, im
                Schwimmbad, überall wo man im Bikini ist.
              </p>
              <p>
                Dafür braucht es Bikinis, in denen du dich wirklich sicher
                fühlst. Nicht nur süß aussehen — sondern frei sein, ohne
                ständig an lose Knoten oder rutschende Bänder zu denken.
              </p>
              <p>
                Der Sprung vom Dreier war für mich nur ein Beispiel, warum das
                fehlt. Deshalb FLORA: Swimwear für Mädchen wie mich. Ich bin
                noch am Anfang — und lerne jeden Tag dazu.
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
                  title: "Dresden & Freundinnen",
                  desc: "Erst mit Freundinnen testen — ehrliches Feedback von Mädchen wie mir.",
                },
                {
                  step: "03",
                  title: "Mehr Selbstvertrauen",
                  desc: "Damit du dich im Bikini frei fühlst — am Wasser und überall.",
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
            <FloraDivider className="mb-10" />
            <p className="font-display text-xl md:text-2xl text-flora-bark italic leading-relaxed text-balance">
              Schön. Bequem. Selbstbewusst.
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
