import Link from "next/link";
import SiteNotice from "@/components/SiteNotice";

export default function SuccessPage() {
  return (
    <div className="pt-6 pb-12 md:pt-8 md:pb-16 min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center w-full">
        <div className="w-16 h-16 rounded-full bg-flora-moss/20 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-8 h-8 text-flora-moss"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-flora-bark mb-4">
          Danke für deine Vorbestellung!
        </h1>
        <p className="text-flora-bark/70 leading-relaxed mb-6 text-[15px] sm:text-base">
          Danke — das bedeutet mir viel. Sobald das erste Sample fertig ist,
          melde ich mich mit Updates. Du bist von Anfang an dabei.
        </p>
        <SiteNotice className="mb-10 text-left" title="Was passiert als Nächstes?">
          Deine Zahlung ist eingegangen. Versand startet erst nach der
          Sample-Freigabe — das kann ein paar Wochen dauern. Du hörst von mir,
          bevor etwas rausgeht.
        </SiteNotice>
        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
