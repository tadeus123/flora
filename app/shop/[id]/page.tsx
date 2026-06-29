"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { getProduct } from "@/lib/products";
import CheckoutButton from "@/components/CheckoutButton";
import { FloraFlower } from "@/components/FloraArt";
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
      <div className="pt-24 pb-16 text-center px-6">
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

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <PreorderNotice className="mb-10" />
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product image placeholder */}
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-flora-terracotta/25 via-flora-blush/30 to-flora-moss/20 flex items-center justify-center sticky top-24 relative overflow-hidden">
            <FloraFlower className="absolute top-6 right-6 w-10 h-10 text-flora-auburn/15" />
            <div className="text-center p-8 relative">
              <p className="font-display text-4xl text-flora-bark/30 mb-2">
                {product.name}
              </p>
              <p className="text-xs tracking-widest uppercase text-flora-bark/40">
                Sample in Arbeit
              </p>
            </div>
          </div>

          {/* Product details */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
              Vorbestellung
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-flora-bark mb-2">
              {product.name}
            </h1>
            <p className="text-flora-bark/60 mb-6">{product.tagline}</p>
            <p className="font-display text-3xl text-flora-bark mb-8">
              {(product.priceInCents / 100).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </p>

            <p className="text-flora-bark/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-flora-bark/50 mb-3">
                Farbe — {selectedColor}
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-flora-bark scale-110"
                        : "border-transparent hover:border-flora-bark/30"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-flora-bark/50 mb-3">
                Größe
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] px-4 py-2 rounded-full text-sm border transition-all ${
                      selectedSize === size
                        ? "border-flora-bark bg-flora-bark text-flora-cream"
                        : "border-flora-sand text-flora-bark hover:border-flora-bark/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <CheckoutButton
              product={product}
              color={selectedColor}
              size={selectedSize}
            />

            <p className="mt-4 text-xs text-flora-bark/50 text-center">
              Sichere Zahlung über Stripe · Versand nach Sample-Freigabe
            </p>

            {/* Features */}
            <div className="mt-12 pt-8 border-t border-flora-sand">
              <p className="text-xs tracking-widest uppercase text-flora-bark/50 mb-4">
                Details
              </p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-flora-bark/70 flex items-start gap-2"
                  >
                    <span className="text-flora-auburn mt-0.5">·</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
