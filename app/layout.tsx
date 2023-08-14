import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptopia | Explore the World of Cryptocurrencies",
  description:
    "Stay updated with real-time cryptocurrency prices, trends, and insights. Discover a diverse range of digital assets and make informed decisions in the dynamic world of blockchain technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
