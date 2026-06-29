import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 pb-16 min-h-[60vh] flex items-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <h1 className="font-display text-5xl text-flora-bark mb-4">404</h1>
        <p className="text-flora-bark/70 mb-8">Diese Seite gibt es nicht.</p>
        <Link
          href="/"
          className="text-flora-auburn hover:underline text-sm"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
