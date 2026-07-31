import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Parlez à Keleya de votre projet d’application, de digitalisation, d’automatisation ou de conception digitale.",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
