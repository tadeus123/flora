import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 pb-16 min-h-[60vh] flex items-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <h1 className="font-display text-5xl text-flora-bark mb-4">404</h1>
        <p className="text-flora-bark/70 mb-2">Diese Seite gibt es nicht.</p>
        <p className="text-sm text-flora-bark/50 mb-8">
          Vielleicht findest du im Shop oder auf der Startseite was du suchst.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="text-sm text-flora-auburn hover:underline"
          >
            Startseite
          </Link>
          <Link
            href="/shop"
            className="text-sm text-flora-auburn hover:underline"
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
}