// app/layout.tsx — fonts + global styles for the whole app (screen preview + print route).
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HMI Parts — Business Profile",
  description: "Aftermarket heavy equipment spare parts business profile — Muscat & Barka, Oman.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{children}</body>
    </html>
  );
}
