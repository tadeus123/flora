export function FloraFlower({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="16" cy="16" r="2.5" fill="currentColor" opacity="0.5" />
      <ellipse
        cx="16"
        cy="9"
        rx="4"
        ry="6"
        fill="currentColor"
        opacity="0.35"
        transform="rotate(0 16 16)"
      />
      <ellipse
        cx="16"
        cy="9"
        rx="4"
        ry="6"
        fill="currentColor"
        opacity="0.35"
        transform="rotate(72 16 16)"
      />
      <ellipse
        cx="16"
        cy="9"
        rx="4"
        ry="6"
        fill="currentColor"
        opacity="0.35"
        transform="rotate(144 16 16)"
      />
      <ellipse
        cx="16"
        cy="9"
        rx="4"
        ry="6"
        fill="currentColor"
        opacity="0.35"
        transform="rotate(216 16 16)"
      />
      <ellipse
        cx="16"
        cy="9"
        rx="4"
        ry="6"
        fill="currentColor"
        opacity="0.35"
        transform="rotate(288 16 16)"
      />
    </svg>
  );
}

export function FloraDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-flora-auburn/40 ${className}`}
      aria-hidden
    >
      <span className="h-px w-12 sm:w-20 bg-flora-auburn/25" />
      <FloraFlower className="w-4 h-4 text-flora-auburn/50" />
      <span className="h-px w-12 sm:w-20 bg-flora-auburn/25" />
    </div>
  );
}

export function FloraWave({ className = "w-full h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 12 Q15 4 30 12 T60 12 T90 12 T120 12"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M0 16 Q20 22 40 16 T80 16 T120 16"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.18"
        fill="none"
      />
    </svg>
  );
}

export function FloraDoodle({
  className = "w-16 h-16",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M32 48 C32 48 20 36 20 26 C20 18 26 14 32 20 C38 14 44 18 44 26 C44 36 32 48 32 48Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M32 20 L32 10 M26 14 L22 8 M38 14 L42 8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
        strokeLinecap="round"
      />
      <circle cx="48" cy="44" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="14" cy="38" r="1" fill="currentColor" opacity="0.25" />
      <path
        d="M8 20 Q12 18 16 20"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
