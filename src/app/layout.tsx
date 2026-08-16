import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";

import "./globals.css";

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dhimangroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhiman Group | Engineering, Manufacturing & Agriculture",
    template: "%s | Dhiman Group",
  },
  description:
    "Dhiman Group is a diversified industrial group advancing engineering, manufacturing, and agriculture through quality, innovation, and long-term partnerships.",
  applicationName: "Dhiman Group",
  keywords: [
    "Dhiman Group",
    "Dhiman Engineering Company",
    "Naman Agro Udyog",
    "industrial engineering",
    "agricultural solutions",
  ],
  authors: [{ name: "Dhiman Group" }],
  creator: "Dhiman Group",
  publisher: "Dhiman Group",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Dhiman Group",
    title: "Dhiman Group | Engineering, Manufacturing & Agriculture",
    description:
      "A diversified industrial group committed to quality, innovation, and long-term partnerships.",
    images: [
      {
        url: "/images/hero-industry.jpg",
        width: 1200,
        height: 630,
        alt: "Dhiman Group industrial operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiman Group | Engineering, Manufacturing & Agriculture",
    description:
      "A diversified industrial group committed to quality, innovation, and long-term partnerships.",
    images: ["/images/hero-industry.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f5d75",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
