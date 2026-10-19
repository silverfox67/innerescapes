import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InnerEscapes | Neuro-Habit Architecture & Dopamine Reset System",
  description:
    "Eliminate brain fog, chronic context switching, and low-energy habit loops. Commercial-grade neuro-reset framework, deep-work schedule matrices, and digital habit dashboards.",
  keywords: [
    "neuro habit architecture",
    "dopamine reset protocol",
    "deep work schedule template",
    "habit loop design",
    "executive focus framework",
    "mental clarity dashboard",
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
    title: "InnerEscapes | Neuro-Habit Architecture & Dopamine Reset System",
    description:
      "A systematic, friction-free cognitive protocol for deep focus and sustainable daily productivity.",
    url: "https://innerescapes.com",
    siteName: "innerescapes.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnerEscapes | Neuro-Habit Architecture",
    description: "Reclaim 3+ hours of focused deep-work daily with zero burnout.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Complete Neuro-Habit Architecture & Dopamine Reset System",
    description:
      "A complete operational system designed to calibrate dopamine baselines, protect deep-work hours, and install friction-free daily productivity loops.",
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
          name: "The Dopamine & Focus Reset Planner",
          price: "17.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://innerescapes.com/#pricing",
        },
        {
          "@type": "Offer",
          name: "The Complete Neuro-Habit Architecture System",
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
      <body className="bg-midnight-950 text-gray-200 antialiased min-h-screen flex flex-col selection:bg-glacier-500/20 selection:text-glacier-400">
        {children}
      </body>
    </html>
  );
}
