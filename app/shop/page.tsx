import Link from "next/link";
import { products, formatPrice } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
            Shop
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-flora-bark mb-4">
            Kollektion
          </h1>
          <p className="text-flora-bark/70 max-w-lg">
            Meine ersten Designs — entwickelt in Dresden, gerade am Anfang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.status === "preorder" ? `/shop/${product.id}` : "#"}
              className={`group block ${product.status === "coming_soon" ? "pointer-events-none opacity-60" : ""}`}
            >
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-flora-sand to-flora-blush/30 mb-6 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-shadow">
                <p className="font-display text-2xl text-flora-bark/40 group-hover:text-flora-auburn/60 transition-colors">
                  {product.name}
                </p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-display text-xl text-flora-bark group-hover:text-flora-auburn transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-sm text-flora-bark/50 mt-1">
                    {product.tagline}
                  </p>
                </div>
                <p className="font-display text-lg text-flora-bark">
                  {product.status === "coming_soon"
                    ? "Bald"
                    : formatPrice(product.priceInCents)}
                </p>
              </div>
              {product.status === "preorder" && (
                <span className="inline-block mt-3 text-xs tracking-widest uppercase text-flora-auburn">
                  Vorbestellung
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
