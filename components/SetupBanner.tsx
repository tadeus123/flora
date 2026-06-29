import { isStripeFullyConfigured } from "@/lib/site";

export default function SetupBanner() {
  if (isStripeFullyConfigured()) return null;

  return (
    <div className="bg-flora-blush/40 border-b border-flora-terracotta/20">
      <div className="max-w-6xl mx-auto px-6 py-2.5">
        <p className="text-center text-xs sm:text-sm text-flora-bark/80">
          <span className="font-medium text-flora-bark">Hinweis:</span>{" "}
          Online-Zahlung wird gerade eingerichtet. Die Seite ist live — Checkout
          folgt in Kürze.
        </p>
      </div>
    </div>
  );
}
