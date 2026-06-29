export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceInCents: number;
  currency: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  features: string[];
  status: "preorder" | "coming_soon";
  stripePriceId?: string;
}

export const products: Product[] = [
  {
    id: "jump-bikini",
    name: "The Jump Bikini",
    tagline: "Für den Sprung vom Dreier — und alles danach",
    description:
      "Mein erstes Design — für Mädchen die süß aussehen wollen und trotzdem vom Dreier springen. Ich kenne das Problem: lose Knoten, ständiges Nachjustieren, null gutes Gefühl am Beckenrand.",
    priceInCents: 8900,
    currency: "eur",
    colors: [
      { name: "Terrakotta", hex: "#C4785A" },
      { name: "Sand", hex: "#E8DFD4" },
      { name: "Moos", hex: "#6B7F6B" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    features: [
      "Sicherer Halt auch bei Wasserdruck",
      "Weiche, schnelltrocknende Stoffe",
      "Verstellbare Träger ohne lose Knoten",
      "Entwickelt in Dresden",
    ],
    status: "preorder",
    stripePriceId: process.env.STRIPE_PRICE_JUMP_BIKINI,
  },
  {
    id: "wave-top",
    name: "Wave Top",
    tagline: "Bald verfügbar",
    description:
      "Ein zweites Design ist in Arbeit — minimalistisch, elegant, genauso durchdacht.",
    priceInCents: 5900,
    currency: "eur",
    colors: [{ name: "Schwarz", hex: "#1a1a1a" }],
    sizes: ["XS", "S", "M", "L"],
    features: ["In Entwicklung"],
    status: "coming_soon",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number, currency = "eur"): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}
