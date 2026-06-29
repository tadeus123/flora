import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "FLORA — Bikinis für mehr Selbstvertrauen",
  description:
    "Swimwear die Mädchen selbstbewusster macht — schön, bequem, und ohne ständige Bikini-Sorgen. Von Flora, Dresden.",
  openGraph: {
    title: "FLORA — Swimwear that stays with you",
    description:
      "Bikinis die Mädchen selbstbewusster machen — am Freibad, im Schwimmbad, überall.",
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
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-flora-cream text-flora-bark">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <main className="min-h-screen pt-14 sm:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
