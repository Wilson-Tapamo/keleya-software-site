import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";
import "./design.css";

const display = Syne({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://keleya.cm"),
  title: { default: "Keleya — Accélérez votre performance avec élégance", template: "%s — Keleya" },
  description: "Keleya libère le potentiel des organisations par une digitalisation opérationnelle élégante de leurs systèmes.",
  keywords: ["digitalisation opérationnelle", "création d’applications", "gestion de projets digitaux", "Cameroun", "automatisation"],
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-touch-icon.png?v=3",
  },
  openGraph: { title: "Keleya — Accélérez votre performance avec élégance", description: "Des systèmes digitaux qui libèrent le potentiel des organisations.", type: "website", locale: "fr_CM", siteName: "Keleya" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
