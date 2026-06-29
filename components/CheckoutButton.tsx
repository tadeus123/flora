"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { formatPrice, type Product } from "@/lib/products";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

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
        throw new Error(data.error ?? "Checkout failed");
      }

      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) throw new Error(stripeError.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={disabled || loading}
        className="w-full bg-flora-bark text-flora-cream py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-auburn transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? "Wird geladen…"
          : `Vorbestellen — ${formatPrice(product.priceInCents)}`}
      </button>
      {error && (
        <p className="mt-3 text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
}
