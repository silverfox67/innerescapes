import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inner Escapes | A Quiet Architecture for Unbroken Thought",
  description:
    "The practical system for clearing high-velocity cognitive noise, eliminating decision fatigue, and protecting deep mental reserves.",
  keywords: [
    "inner escapes",
    "executive cognitive hygiene",
    "unbroken focus field guide",
    "digital reset protocol",
    "attention architecture",
  ],
  authors: [{ name: "innerescapes.com" }],
  creator: "innerescapes.com",
  publisher: "innerescapes.com",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Inner Escapes | A Quiet Architecture for Unbroken Thought",
    description:
      "A quiet architecture for unbroken thought. Executive Cognitive Hygiene · Volume I.",
    url: "https://innerescapes.com",
    siteName: "innerescapes.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inner Escapes | A Quiet Architecture for Unbroken Thought",
    description: "The practical system for clearing cognitive noise and protecting deep mental reserves.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Inner Escapes: Executive Cognitive Hygiene Field Guide",
    description:
      "The practical system for clearing cognitive noise, eliminating decision fatigue, and protecting deep mental reserves.",
    brand: {
      "@type": "Brand",
      name: "Inner Escapes",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "17.00",
      highPrice: "27.00",
      priceCurrency: "USD",
      offerCount: "2",
      offers: [
        {
          "@type": "Offer",
          name: "The Field Protocol",
          price: "17.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://innerescapes.com/#access",
        },
        {
          "@type": "Offer",
          name: "The Complete System",
          price: "27.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://innerescapes.com/#access",
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#211F1D] antialiased min-h-screen flex flex-col selection:bg-[#2D4A3E]/10 selection:text-[#2D4A3E]">
        {children}
      </body>
    </html>
  );
}
