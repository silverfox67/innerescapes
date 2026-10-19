import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InnerEscapes | A Structured System for Unbroken Executive Focus",
  description:
    "A deliberate, quiet operational system for sustained mental clarity and focused work. Field manuals, deep-work schedule architectures, and digital sprint frameworks.",
  keywords: [
    "executive focus system",
    "deep work schedule template",
    "mental clarity dashboard",
    "focus habit system",
    "operational time blocking",
    "context switching reduction",
  ],
  authors: [{ name: "innerescapes.com" }],
  creator: "innerescapes.com",
  publisher: "innerescapes.com",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "InnerEscapes | A Structured System for Unbroken Executive Focus",
    description:
      "A deliberate operational system for sustained mental clarity and uninterrupted focus.",
    url: "https://innerescapes.com",
    siteName: "innerescapes.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnerEscapes | A Structured System for Unbroken Executive Focus",
    description: "Daily operational protocols for sustained, calm deep work.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0d0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "InnerEscapes Executive Focus System",
    description:
      "A complete operational system designed to protect deep-work hours and install calm, repeatable daily focus routines.",
    brand: {
      "@type": "Brand",
      name: "InnerEscapes",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "17.00",
      highPrice: "29.00",
      priceCurrency: "USD",
      offerCount: "2",
      offers: [
        {
          "@type": "Offer",
          name: "The Focus & Clarity Reset Planner",
          price: "17.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://innerescapes.com/#pricing",
        },
        {
          "@type": "Offer",
          name: "The Complete Executive Focus Architecture",
          price: "29.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://innerescapes.com/#pricing",
        },
      ],
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0c0d0e] text-stone-200 antialiased min-h-screen flex flex-col selection:bg-stone-700/40 selection:text-stone-100">
        {children}
      </body>
    </html>
  );
}
