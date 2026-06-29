"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { getProduct, formatPrice } from "@/lib/products";
import CheckoutButton from "@/components/CheckoutButton";
import { PreorderNotice } from "@/components/SiteNotice";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = getProduct(id);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0]?.name ?? ""
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes[1] ?? "S"
  );

  if (!product || product.status !== "preorder") {
    return (
      <div className="page-wrap text-center">
        <p className="text-flora-bark/70 mb-2">Dieses Produkt gibt es noch nicht.</p>
        <p className="text-sm text-flora-bark/50 mb-8">
          Wave Top und weitere Designs kommen bald.
        </p>
        <Link
          href="/shop"
          className="text-sm text-flora-auburn hover:underline"
        >
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  const checkoutProps = {
    product,
    color: selectedColor,
    size: selectedSize,
  };

  return (
    <>
      <div className="page-wrap-product">
        <div className="max-w-6xl mx-auto">
          <PreorderNotice className="mb-6 md:mb-8" />
          <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="media-placeholder aspect-[3/4] max-h-[50vh] md:max-h-none mb-8 md:mb-0 md:sticky md:top-28">
              <div className="text-center p-6">
                <p className="font-display text-2xl text-flora-bark/40 mb-2">
                  {product.name}
                </p>
                <p className="text-xs tracking-widest uppercase text-flora-bark/40">
                  Sample in Arbeit
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-3">
                Vorbestellung
              </p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-flora-bark mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-flora-bark/60 mb-4">{product.tagline}</p>
              <p className="font-display text-2xl text-flora-bark mb-6 md:mb-8">
                {formatPrice(product.priceInCents)}
              </p>

              <p className="text-[15px] sm:text-base text-flora-bark/70 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase text-flora-bark/50 mb-3">
                  Farbe — {selectedColor}
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-11 h-11 rounded-full border-2 transition-all touch-manipulation ${
                        selectedColor === color.name
                          ? "border-flora-bark"
                          : "border-flora-sand"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs tracking-widest uppercase text-flora-bark/50 mb-3">
                  Größe
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[3.25rem] px-4 py-3 rounded-full text-sm border transition-all touch-manipulation ${
                        selectedSize === size
                          ? "border-flora-bark bg-flora-bark text-flora-cream"
                          : "border-flora-sand text-flora-bark"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <CheckoutButton {...checkoutProps} />
                <p className="mt-4 text-xs text-flora-bark/50">
                  Sichere Zahlung über Stripe · Versand nach Sample-Freigabe
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-flora-sand">
                <p className="text-xs tracking-widest uppercase text-flora-bark/50 mb-4">
                  Details
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-flora-bark/70 flex gap-2"
                    >
                      <span className="text-flora-bark/30">·</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-flora-cream border-t border-flora-sand px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <p className="font-display text-lg text-flora-bark mb-2">
          {formatPrice(product.priceInCents)}
        </p>
        <CheckoutButton {...checkoutProps} />
      </div>
    </>
  );
}
