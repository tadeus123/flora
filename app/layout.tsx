import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SetupBanner from "@/components/SetupBanner";
import { isStripeFullyConfigured } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "FLORA — Schön. Bequem. Bleibt wo sie ist.",
  description:
    "Bikinis für junge Frauen — schön, bequem, und sie bleiben beim Sprung vom Dreier wo sie sind. Von Flora, Dresden.",
  openGraph: {
    title: "FLORA — Swimwear that stays with you",
    description:
      "Bikinis für Mädchen die süß aussehen wollen und sich am Beckenrand sicher fühlen.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF6F0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasBanner = !isStripeFullyConfigured();

  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-flora-cream text-flora-bark">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header hasBanner={hasBanner} />
          <SetupBanner />
        </div>
        <main
          className={`min-h-screen ${
            hasBanner
              ? "pt-[7.25rem] sm:pt-[7.5rem] md:pt-28"
              : "pt-14 sm:pt-16"
          }`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
