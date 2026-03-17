import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { StickyCta } from "@/components/sticky-cta";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venkatasaitours.com"),
  title: {
    default: "Venkata Sai Tours & Travels | Bus Booking in Anantapur AP",
    template: "%s | Venkata Sai Tours & Travels",
  },
  description:
    "Best bus rental in Anantapur, Andhra Pradesh. Mini bus, tempo traveller, medium bus & luxury coach for pilgrimage, corporate & family tours. Call Now: 9440440969 / 9440737138",
  keywords: [
    "bus booking Anantapur",
    "travels in Anantapur",
    "mini bus hire Anantapur",
    "bus rental Anantapur AP",
    "tempo traveller Anantapur",
    "Venkata Sai Tours and Travels",
    "Anantapur tours",
    "bus hire Andhra Pradesh",
  ],
  authors: [{ name: "Venkata Sai Tours & Travels" }],
  creator: "Venkata Sai Tours & Travels",
  publisher: "Venkata Sai Tours & Travels",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://venkatasaitours.com",
    siteName: "Venkata Sai Tours & Travels",
    title: "Venkata Sai Tours & Travels | Bus Booking in Anantapur AP",
    description:
      "Best bus rental in Anantapur AP. Mini bus, tempo traveller, medium bus & luxury coach for pilgrimage, corporate & family tours. Call Now: 9440440969",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Venkata Sai Tours & Travels - Bus Booking Anantapur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkata Sai Tours & Travels | Bus Booking Anantapur AP",
    description:
      "Best bus rental in Anantapur AP. Mini bus, tempo traveller, luxury coach. Call Now: 9440440969 / 9440737138",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "add-your-google-search-console-code-here",
  },
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://venkatasaitours.com/#business",
  name: "Venkata Sai Tours & Travels",
  alternateName: "Venkata Sai Tours",
  image: "https://venkatasaitours.com/logo.png",
  logo: "https://venkatasaitours.com/logo.png",
  description:
    "Best bus rental and tour operator in Anantapur, Andhra Pradesh. Offering mini bus hire, tempo traveller, medium bus, and luxury coach for pilgrimages, corporate tours, family trips, and school excursions.",
  url: "https://venkatasaitours.com",
  telephone: "+919440440969",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919440440969",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Telugu", "Hindi", "English"],
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        opens: "00:00",
        closes: "23:59",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    },
    {
      "@type": "ContactPoint",
      telephone: "+919440737138",
      contactType: "reservations",
      areaServed: "IN",
      availableLanguage: ["Telugu", "Hindi", "English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ING Vysya Bank Lane, Kamala Nagar",
    addressLocality: "Anantapur",
    addressRegion: "Andhra Pradesh",
    postalCode: "515001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.681887,
    longitude: 77.600591,
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: [
    "Anantapur",
    "Andhra Pradesh",
    "Telangana",
    "Karnataka",
    "Tamil Nadu",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bus Rental & Tour Packages",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mini Bus Hire Anantapur (14 & 18 Seat)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tempo Traveller Hire Anantapur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medium Bus Hire Anantapur (30 Seat)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Big Bus Hire Anantapur (40-50 Seat)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tirupati Package from Anantapur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pilgrimage & Corporate Tour Packages" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        <Providers>
          {children}
        </Providers>
        <StickyCta />

      </body>
    </html>
  );
}
