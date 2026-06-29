import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
          <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 w-full border border-flora-sand overflow-hidden">
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
            <h1 className="font-display text-3xl sm:text-4xl font-medium text-flora-bark mb-6 leading-tight">
              Hi, ich bin Flora — 17, aus Dresden.
            </h1>
            <div className="space-y-4 text-flora-bark/70 leading-relaxed text-[15px] sm:text-base">
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
                fehlt. Deshalb FLORA: Swimwear für Mädchen wie mich.
              </p>
            </div>
          </div>
        </div>

        <section className="py-12 border-t border-flora-sand max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
            Der Plan
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-flora-bark mb-8">
            Schritt für Schritt.
          </h2>
          <ol className="space-y-6">
            {[
              {
                step: "01",
                title: "Erstes Sample",
                desc: "The Jump Bikini — gerade in Produktion.",
              },
              {
                step: "02",
                title: "Dresden & Freundinnen",
                desc: "Testen, Feedback sammeln, verbessern.",
              },
              {
                step: "03",
                title: "Mehr Selbstvertrauen",
                desc: "Damit du dich im Bikini frei fühlst.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="font-display text-flora-bark/30 text-lg shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg text-flora-bark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-flora-bark/70">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="text-center pt-8">
          <Link href="/shop" className="btn-primary">
            Zum Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
