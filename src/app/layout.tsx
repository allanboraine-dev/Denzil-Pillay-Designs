import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Denzil Pillay Designs | Afro-Luxury Couture & MUA",
  description:
    "Denzil Pillay Designs is a couture house and make-up artistry brand celebrating confident, sexy, fierce expression through bespoke fashion and editorial styling.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-obsidian text-ivory">{children}</body>
    </html>
  );
}
