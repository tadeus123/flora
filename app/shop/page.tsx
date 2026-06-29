import Link from "next/link";
import { products, formatPrice } from "@/lib/products";
import { FloraFlower } from "@/components/FloraArt";
import { PreorderNotice } from "@/components/SiteNotice";

export default function ShopPage() {
  return (
    <div className="page-wrap">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
            Shop
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-medium text-flora-bark mb-3 sm:mb-4">
            Kollektion
          </h1>
          <p className="text-flora-bark/70 max-w-lg">
            Mein erstes Design — gemacht für Mädchen, die das Bikini-Problem
            kennen.
          </p>
        </div>

        <PreorderNotice className="mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) =>
            product.status === "preorder" ? (
              <Link key={product.id} href={`/shop/${product.id}`} className="group block">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-flora-sand to-flora-blush/30 mb-6 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-shadow relative">
                  <FloraFlower className="absolute top-5 right-5 w-8 h-8 text-flora-auburn/12 group-hover:text-flora-auburn/20 transition-colors" />
                  <p className="font-display text-2xl text-flora-bark/40 group-hover:text-flora-auburn/60 transition-colors relative">
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
                    {formatPrice(product.priceInCents)}
                  </p>
                </div>
                <span className="inline-block mt-3 text-xs tracking-widest uppercase text-flora-auburn">
                  Vorbestellung
                </span>
              </Link>
            ) : (
              <div key={product.id} className="opacity-75">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-flora-sand to-flora-blush/20 mb-6 flex items-center justify-center relative">
                  <FloraFlower className="absolute top-5 right-5 w-8 h-8 text-flora-auburn/10" />
                  <p className="font-display text-2xl text-flora-bark/30">
                    {product.name}
                  </p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-display text-xl text-flora-bark/60">
                      {product.name}
                    </h2>
                    <p className="text-sm text-flora-bark/40 mt-1">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="font-display text-lg text-flora-bark/50">Bald</p>
                </div>
                <span className="inline-block mt-3 text-xs tracking-widest uppercase text-flora-bark/40">
                  Noch in Planung
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}