type SiteNoticeProps = {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning";
  className?: string;
};

export default function SiteNotice({
  title,
  children,
  variant = "info",
  className = "",
}: SiteNoticeProps) {
  const styles =
    variant === "warning"
      ? "bg-flora-blush/30 border-flora-terracotta/30 text-flora-bark"
      : "bg-flora-sand/50 border-flora-sand text-flora-bark/80";

  return (
    <div
      className={`rounded-2xl border px-5 py-4 text-sm leading-relaxed ${styles} ${className}`}
      role="status"
    >
      <p className="font-medium text-flora-bark mb-1">{title}</p>
      <div className="text-flora-bark/70">{children}</div>
    </div>
  );
}

export function PreorderNotice({ className = "" }: { className?: string }) {
  return (
    <SiteNotice className={className} title="Vorbestellung · Sample-Phase">
      Das erste Design wird gerade als Sample produziert. Fotos auf der Seite
      sind Platzhalter. Versand startet erst, wenn Qualität und Passform
      stimmen — ich melde mich bei dir.
    </SiteNotice>
  );
}
