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
  metadataBase: new URL("https://www.venkatasaitravels.com/"),
  title: {
    default: "Venkata Sai Tours & Travels | Bus Booking in Anantapur AP",
    template: "%s | Venkata Sai Tours & Travels",
  },
  description:
    "Best bus rental in Anantapur, Andhra Pradesh. Mini bus, tempo traveller, medium bus & luxury coach for pilgrimage, corporate & family tours. Call Now: 9440440969 / 9440737138",
  keywords: [
    // Brand keywords
    "Venkata Sai Tours and Travels",
    "Venkata Sai Travels",
    "Venkata Sai",
    // Core service keywords
    "bus booking Anantapur",
    "book bus in Anantapur",
    "bus hire Anantapur",
    "buses in Anantapur",
    "bus rental Anantapur AP",
    // Travel company
    "travels in Anantapur",
    "best travels in Anantapur",
    "travel agency Anantapur",
    "tour operator Anantapur",
    // Vehicle types
    "mini bus hire Anantapur",
    "mini buses in Anantapur",
    "tempo traveller Anantapur",
    "tourist buses in Anantapur",
    "luxury bus hire Anantapur",
    "big bus hire Anantapur",
    "medium bus rental Anantapur",
    // Tour keywords
    "Anantapur tours",
    "tour packages from Anantapur",
    "Tirupati package from Anantapur",
    "pilgrimage tours Anantapur",
    // Broader AP keywords
    "bus hire Andhra Pradesh",
    "travels in AP",
  ],
  authors: [{ name: "Venkata Sai Tours & Travels" }],
  creator: "Venkata Sai Tours & Travels",
  publisher: "Venkata Sai Tours & Travels",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.venkatasaitravels.com/",
    siteName: "Venkata Sai Tours & Travels",
    title: "Venkata Sai Tours & Travels | Bus Booking in Anantapur AP",
    description:
      "Best bus rental in Anantapur AP. Mini bus, tempo traveller, medium bus & luxury coach for pilgrimage, corporate & family tours. Call Now: 9440440969 / 9440737138",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "Venkata Sai Tours & Travels - Bus Booking Anantapur AP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkata Sai Tours & Travels | Bus Booking Anantapur AP",
    description:
      "Best bus rental in Anantapur AP. Mini bus, tempo traveller & luxury coach. Y.N. Prasad: 9440440969 | Y.N. Kumar: 9440737138",
    images: ["/og/og-home.png"],
    creator: "@VenkataSaiTravels",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // ⬇️ PASTE your Google Search Console verification code below (from HTML tag method)
  // verification: { google: "PASTE_YOUR_CODE_HERE" },
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://www.venkatasaitravels.com/#business",
  name: "Venkata Sai Tours & Travels",
  alternateName: "Venkata Sai Tours",
  image: "https://www.venkatasaitravels.com/logo.png",
  logo: "https://www.venkatasaitravels.com/logo.png",
  description:
    "Best bus rental and tour operator in Anantapur, Andhra Pradesh. Offering mini bus hire, tempo traveller, medium bus, and luxury coach for pilgrimages, corporate tours, family trips, and school excursions.",
  url: "https://www.venkatasaitravels.com",
  telephone: "+919440440969",
  email: "harsharoyal117@gmail.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919440440969",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Telugu", "Hindi", "English"],
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
  sameAs: [
    "https://www.google.com/maps?q=Venkata+Sai+Tours+Travels+Anantapur",
    "https://wa.me/919440440969",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
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
