import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keleya.cm"),
  title: {
    default: "Keleya — Ingénierie logicielle",
    template: "%s — Keleya",
  },
  description:
    "Keleya conçoit des produits numériques, logiciels métier et plateformes évolutives depuis le Cameroun, pour le monde.",
  keywords: [
    "développement logiciel",
    "logiciel métier",
    "produit numérique",
    "Cameroun",
    "ingénierie logicielle",
  ],
  icons: {
    icon: "/keleya-mark-red.png",
    shortcut: "/keleya-mark-red.png",
    apple: "/keleya-mark-red.png",
  },
  openGraph: {
    title: "Keleya — Le logiciel comme avantage décisif",
    description:
      "Produits numériques et systèmes métier conçus au Cameroun, pour le monde.",
    type: "website",
    locale: "fr_CM",
    siteName: "Keleya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keleya — Le logiciel comme avantage décisif",
    description:
      "Produits numériques et systèmes métier conçus au Cameroun, pour le monde.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
