"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { formatPrice, type Product } from "@/lib/products";
import { isStripePublishableConfigured } from "@/lib/site";
import SiteNotice from "@/components/SiteNotice";

const stripeReady = isStripePublishableConfigured();
const stripePromise = stripeReady
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  : null;

interface CheckoutButtonProps {
  product: Product;
  color: string;
  size: string;
  disabled?: boolean;
}

export default function CheckoutButton({
  product,
  color,
  size,
  disabled,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    if (!stripeReady) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          color,
          size,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ?? "Zahlung gerade nicht möglich. Bitte später nochmal versuchen."
        );
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error(
          "Zahlung konnte nicht geladen werden. Bitte Seite neu laden."
        );
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) throw new Error(stripeError.message);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Etwas ist schiefgelaufen. Bitte später nochmal versuchen."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      {!stripeReady && (
        <SiteNotice variant="warning" title="Zahlung noch nicht aktiv">
          Stripe wird gerade eingerichtet. Du kannst die Seite schon erkunden —
          Vorbestellen per Zahlung folgt bald. Fragen?{" "}
          <a
            href="mailto:hello@flora-swim.com"
            className="text-flora-auburn underline underline-offset-2"
          >
            hello@flora-swim.com
          </a>
        </SiteNotice>
      )}

      <button
        onClick={handleCheckout}
        disabled={disabled || loading || !stripeReady}
        className="w-full bg-flora-bark text-flora-cream py-4 min-h-[3rem] rounded-full text-sm font-medium tracking-wide hover:bg-flora-auburn active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
      >
        {loading
          ? "Wird geladen…"
          : stripeReady
            ? `Vorbestellen — ${formatPrice(product.priceInCents)}`
            : "Vorbestellen — bald verfügbar"}
      </button>

      {error && (
        <p className="text-sm text-red-600 text-center" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
