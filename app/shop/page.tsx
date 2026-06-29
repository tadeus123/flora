import Link from "next/link";
import { products, formatPrice } from "@/lib/products";
import { PreorderNotice } from "@/components/SiteNotice";

export default function ShopPage() {
  return (
    <div className="page-wrap">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-flora-auburn mb-4">
            Shop
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-flora-bark mb-3">
            Kollektion
          </h1>
          <p className="text-flora-bark/70 max-w-lg text-sm sm:text-base">
            Swimwear für Mädchen, die sich im Bikini sicher und selbstbewusst
            fühlen wollen.
          </p>
        </div>

        <PreorderNotice className="mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) =>
            product.status === "preorder" ? (
              <Link key={product.id} href={`/shop/${product.id}`} className="group block">
                <div className="media-placeholder aspect-[3/4] mb-4">
                  <p className="font-display text-xl text-flora-bark/40 group-hover:text-flora-bark/60 transition-colors">
                    {product.name}
                  </p>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <div>
                    <h2 className="font-display text-lg text-flora-bark">
                      {product.name}
                    </h2>
                    <p className="text-sm text-flora-bark/50 mt-1">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="font-display text-lg text-flora-bark shrink-0">
                    {formatPrice(product.priceInCents)}
                  </p>
                </div>
                <span className="inline-block mt-2 text-xs tracking-widest uppercase text-flora-auburn">
                  Vorbestellung
                </span>
              </Link>
            ) : (
              <div key={product.id} className="opacity-60">
                <div className="media-placeholder aspect-[3/4] mb-4">
                  <p className="font-display text-xl text-flora-bark/30">
                    {product.name}
                  </p>
                </div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h2 className="font-display text-lg text-flora-bark/60">
                      {product.name}
                    </h2>
                    <p className="text-sm text-flora-bark/40 mt-1">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="text-sm text-flora-bark/50">Bald</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
