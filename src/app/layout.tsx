// app/layout.tsx — fonts + global styles for the whole app (screen preview + print route).
import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HMI Parts — Business Profile",
  description: "Aftermarket heavy equipment spare parts business profile — Muscat & Barka, Oman.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>{children}</body>
    </html>
  );
}
