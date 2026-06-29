import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";
import { isStripeFullyConfigured } from "@/lib/site";

export async function POST(req: NextRequest) {
  try {
    if (!isStripeFullyConfigured()) {
      return NextResponse.json(
        {
          error:
            "Online-Zahlung ist noch nicht eingerichtet. Bitte später nochmal versuchen.",
        },
        { status: 503 }
      );
    }

    const { productId, color, size } = await req.json();

    const product = getProduct(productId);
    if (!product || product.status !== "preorder") {
      return NextResponse.json(
        { error: "Dieses Produkt ist nicht verfügbar." },
        { status: 404 }
      );
    }

    const stripe = getStripe();
    const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const lineItems = product.stripePriceId
      ? [{ price: product.stripePriceId, quantity: 1 }]
      : [
          {
            price_data: {
              currency: product.currency,
              product_data: {
                name: product.name,
                description: `${product.tagline} — Farbe: ${color}, Größe: ${size}`,
                metadata: {
                  productId: product.id,
                  color,
                  size,
                },
              },
              unit_amount: product.priceInCents,
            },
            quantity: 1,
          },
        ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop/${product.id}`,
      metadata: {
        productId: product.id,
        color,
        size,
      },
      shipping_address_collection: {
        allowed_countries: ["DE", "AT", "CH"],
      },
      locale: "de",
      payment_method_types: ["card"],
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("Checkout error:", err);
    const message =
      err instanceof Error && err.message.includes("STRIPE")
        ? "Online-Zahlung ist noch nicht eingerichtet."
        : err instanceof Error
          ? err.message
          : "Zahlung fehlgeschlagen. Bitte später nochmal versuchen.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
