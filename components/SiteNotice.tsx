type SiteNoticeProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function SiteNotice({
  title,
  children,
  className = "",
}: SiteNoticeProps) {
  return (
    <div
      className={`border border-flora-sand px-4 py-3 text-sm leading-relaxed ${className}`}
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
      Das erste Design wird gerade als Sample produziert. Fotos sind
      Platzhalter. Versand startet, wenn Qualität und Passform stimmen.
    </SiteNotice>
  );
}
