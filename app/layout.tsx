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
  metadataBase: new URL("https://ratu-horeca-kitchen.vercel.app"),
  title: "Ratu Horeca Kitchen",
  robots: {
  index: true,
  follow: true,
},
  icons: {
  icon: "/favicon.jpeg",
},
  description:
    "Design, Build & Supply Kitchen Equipment untuk Restaurant, Cafe, Hotel, Bakery, Central Kitchen, Villa dan Apartemen.",

  keywords: [
    "Kitchen Equipment",
    "Kitchen Contractor",
    "Restaurant Kitchen",
    "Cafe Kitchen",
    "Hotel Kitchen",
    "Bakery Kitchen",
    "Central Kitchen",
    "Kitchen Design",
    "Kitchen Installation",
    "Stainless Fabrication",
    "Commercial Kitchen",
    "Ratu Horeca Kitchen",
  ],

  openGraph: {
    title: "Ratu Horeca Kitchen",
    description:
      "Design, Build & Supply Kitchen Equipment untuk Restaurant, Cafe, Hotel, Bakery, Central Kitchen, Villa dan Apartemen.",
    url: "https://ratu-horeca-kitchen.vercel.app",
    siteName: "Ratu Horeca Kitchen",
    images: [
      {
        url: "/logo/rhk-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Ratu Horeca Kitchen",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ratu Horeca Kitchen",
    description:
      "Design, Build & Supply Kitchen Equipment.",
    images: ["/logo/rhk-logo.jpeg"],
  },
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
