import Link from "next/link";
import SiteNotice from "@/components/SiteNotice";

export default function SuccessPage() {
  return (
    <div className="page-wrap min-h-[60vh] flex items-center">
      <div className="max-w-lg mx-auto w-full text-center">
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-flora-bark mb-4">
          Danke für deine Vorbestellung!
        </h1>
        <p className="text-flora-bark/70 leading-relaxed mb-6 text-sm sm:text-base">
          Sobald das erste Sample fertig ist, melde ich mich mit Updates.
        </p>
        <SiteNotice className="mb-8 text-left" title="Was passiert als Nächstes?">
          Versand startet erst nach der Sample-Freigabe. Du hörst von mir,
          bevor etwas rausgeht.
        </SiteNotice>
        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
