import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="pt-24 pb-16 min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto px-6 text-center">
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
        <h1 className="font-display text-4xl md:text-5xl font-medium text-flora-bark mb-4">
          Danke für deine Vorbestellung!
        </h1>
        <p className="text-flora-bark/70 leading-relaxed mb-10">
          Danke — das bedeutet mir viel. Sobald das erste Sample fertig ist,
          melde ich mich mit Updates. Du bist von Anfang an dabei.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-flora-bark text-flora-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-auburn transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
