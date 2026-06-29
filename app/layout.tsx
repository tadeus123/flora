import type { Metadata } from "next";
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
  title: "FLORA — Schön. Bequem. Bleibt wo sie ist.",
  description:
    "Bikinis die Frauen und Mädchen selbstbewusster machen — schön, bequem, und sie bleiben wo sie sind. Von Flora clothing GmbH, Dresden.",
  openGraph: {
    title: "FLORA — Swimwear that stays with you",
    description:
      "Bikinis für mehr Selbstvertrauen am Beckenrand — schön, bequem, praktisch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-flora-cream text-flora-bark">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
