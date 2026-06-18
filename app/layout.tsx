import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ratu Horeca Kitchen",
  description:
    "Design, Build & Supply Kitchen Equipment untuk Restaurant, Cafe, Hotel, Bakery, Central Kitchen, Villa dan Apartemen.",

  keywords: [
    "Ratu Horeca Kitchen",
    "Kitchen Equipment",
    "Commercial Kitchen",
    "Kitchen Contractor",
    "Stainless Fabrication",
    "Restaurant Kitchen",
    "Cafe Kitchen",
    "Hotel Kitchen",
    "Bakery Kitchen",
    "Central Kitchen",
    "Kitchen Design",
    "Kitchen Installation",
    "Kitchen Equipment Supplier",
  ],

  authors: [
    {
      name: "Ratu Horeca Kitchen",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
