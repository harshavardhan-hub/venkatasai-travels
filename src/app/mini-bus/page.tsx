import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Phone, Users, Wind, MapPin, Shield, Calendar, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Mini Bus & Tempo Traveller Hire Anantapur | 14 & 18 Seat',
  description:
    'Hire 14-seat or 18-seat mini bus / tempo traveller in Anantapur AP. Best rates for family trips, picnics & local travel. Call Now: 9440440969 / 9440737138. Instant Booking!',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/mini-bus',
  },
  openGraph: {
    images: [{ url: '/og/og-mini-bus.png', width: 1200, height: 630, alt: 'Mini Bus & Tempo Traveller Hire in Anantapur AP' }],
  },
}

export default function MiniBusPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Venkata Sai Tours & Travels",
      "telephone": "+919440440969",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ING Vysya Bank Lane, Kamala Nagar",
        "addressLocality": "Anantapur",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "515001",
        "addressCountry": "IN"
      }
    },
    "name": "Mini Bus & Tempo Traveller Hire in Anantapur",
    "description": "14-seat and 18-seat mini bus and tempo traveller rentals for small groups, family outings, and pilgrimages in Anantapur, Andhra Pradesh.",
    "serviceType": "Bus Rental",
    "areaServed": ["Anantapur", "Andhra Pradesh", "Telangana", "Karnataka"],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "description": "Price per km basis. Contact for exact quote."
      }
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the mini bus hire rate in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mini bus hire rates in Anantapur depend on AC/non-AC, distance (per km basis), and duration. We offer both half-day and full-day packages. Contact Y.N. Prasad at 9440440969 for a precise quote tailored to your trip."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum booking duration for a mini bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both half-day and full-day bookings for local travel in Anantapur, and multi-day packages for outstation trips to Tirupati, Shirdi, and other destinations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer tempo traveller hire in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Venkata Sai Tours & Travels offers tempo traveller hire in Anantapur for 12-18 passengers. Ideal for family trips to Tirupati, Mantralayam, and nearby destinations. Call 9440440969 to book."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas do you cover from Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are based in Anantapur, AP, but provide mini bus and tempo traveller services across Andhra Pradesh, Telangana, Karnataka, and beyond. Popular routes: Anantapur to Tirupati, Anantapur to Hyderabad, Anantapur to Bangalore."
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-deep-navy">
      <StructuredData data={serviceJsonLd} />
      <StructuredData data={faqJsonLd} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[60svh] min-h-[500px] w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-deep-navy">
          <Image
            src="/images/mini-hero.jpg"
            alt="Mini bus hire in Anantapur — Venkata Sai Tours 14 & 18 seat mini bus"
            fill
            sizes="100vw"
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-deep-navy/50 to-deep-navy/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection playOnLoad direction="down">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-4 drop-shadow-lg">
              Mini Bus & Tempo Traveller <br className="hidden md:block" />
              <span className="text-gold">Hire in Anantapur</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/90 font-light max-w-2xl mx-auto drop-shadow-md">
              14 & 18 Seat — Perfect for Small Groups & Family Trips in Andhra Pradesh
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO PARAGRAPH — keyword rich */}
      <section className="py-12 bg-cream text-deep-navy relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-deep-navy/80 leading-relaxed">
              Looking for <strong>mini bus hire in Anantapur</strong>? Venkata Sai Tours &amp; Travels offers the 
              most affordable and reliable <strong>mini bus rental in Anantapur AP</strong> for families, corporate 
              picnics, and pilgrimage trips. Our <strong>tempo traveller in Anantapur</strong> is ideal for groups 
              of 12–18 people travelling to Tirupati, Mantralayam, Shirdi, or local destinations. 
              Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> for instant bookings — available 24/7.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* OPTIONS SECTION */}
      <section className="py-10 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 14 SEATER */}
            <AnimatedSection direction="up" delay={0.2} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-black/5 flex flex-col items-center text-center">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/mini-14.jpg"
                  alt="14-seat mini bus for hire in Anantapur — Venkata Sai Tours &amp; Travels"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-gold" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">14-Seat Mini Bus</h2>
              <p className="text-deep-navy/70 mb-8 leading-relaxed">
                The perfect compact coach for tight-knit families and small groups. Cozy, air-conditioned, and incredibly easy to maneuver through city traffic or winding hill roads in Anantapur.
              </p>
              <div className="mt-auto flex flex-col xl:flex-row gap-3 w-full">
                <Button href="tel:+919440440969" variant="gold" className="w-full">
                  <Phone className="mr-2 w-4 h-4"/> Call Now: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" className="w-full border-gold hover:bg-gold hover:text-deep-navy text-gold">
                  <Phone className="mr-2 w-4 h-4"/> 9440737138
                </Button>
              </div>
            </AnimatedSection>

            {/* 18 SEATER */}
            <AnimatedSection direction="up" delay={0.4} className="bg-deep-navy rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center text-cream">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/mini-18.jpg"
                  alt="18-seat mini bus rental Anantapur AP — Venkata Sai Tours"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-gold" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gold mb-4">18-Seat Mini Bus</h2>
              <p className="text-cream/80 mb-8 leading-relaxed">
                Slightly larger capacity for extended families and small corporate teams from Anantapur. Enjoy extra legroom, plush seating, and ample luggage space.
              </p>
              <div className="mt-auto flex flex-col xl:flex-row gap-3 w-full">
                <Button href="tel:+919440440969" variant="gold" className="w-full text-deep-navy">
                  <Phone className="mr-2 w-4 h-4"/> Call Now: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" className="w-full border-gold hover:bg-gold hover:text-deep-navy text-gold">
                  <Phone className="mr-2 w-4 h-4"/> 9440737138
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TEMPO TRAVELLER SECTION */}
      <section id="tempo" className="py-20 bg-deep-navy text-cream scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold/50" />
              Also Available
              <span className="w-12 h-px bg-gold/50" />
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Tempo Traveller Hire <span className="text-gold">Anantapur</span>
            </h2>
            <p className="text-cream/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Our tempo travellers in Anantapur are perfect for 12–18 passengers. Equipped with push-back 
              seats, AC, music systems, and GPS — ideal for pilgrimage tours to Tirupati &amp; Mantralayam, 
              and outstation trips across Andhra Pradesh.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="tel:+919440440969" variant="gold" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto">
              <Phone className="mr-3 w-5 h-5"/> Y.N. Prasad: 9440440969
            </Button>
            <Button href="tel:+919440737138" variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto hover:bg-gold hover:text-deep-navy hover:border-gold border-cream/50 text-cream">
              <Phone className="mr-3 w-5 h-5"/> Y.N. Kumar: 9440737138
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES & BEST FOR */}
      <section className="py-24 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-px bg-gold/50" />
                Premium Amenities
              </p>
              <h3 className="text-4xl font-serif font-bold mb-8">Travel in Comfort</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Wind, text: "AC & Non-AC Available" },
                  { icon: Shield, text: "Experienced Licensed Driver" },
                  { icon: MapPin, text: "GPS Tracked Vehicle" },
                  { icon: Music, text: "Music System Onboard" },
                  { icon: Users, text: "Comfortable Push-back Seats" },
                  { icon: Calendar, text: "Flexible Booking Options" }
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white px-5 py-4 rounded-xl shadow-sm border border-black/5">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-semibold">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-px bg-gold/50" />
                Perfect Occasions
              </p>
              <h3 className="text-4xl font-serif font-bold mb-8">Best Suited For</h3>
              <div className="space-y-4">
                {[
                  "Family outings & get-togethers in Anantapur",
                  "Small group picnics & weekend trips",
                  "Airport transfers from Anantapur",
                  "Local city travel within Anantapur",
                  "Pilgrimage tours — Tirupati, Mantralayam, Shirdi",
                  "Corporate team outings near Anantapur"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-black/5 hover:shadow-sm">
                    <Check className="w-6 h-6 text-gold shrink-0" />
                    <span className="text-lg text-deep-navy/80">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-deep-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-deep-navy/70 mb-6 font-semibold">Explore Other Buses:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medium-bus" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">
              30-Seat Medium Bus Anantapur
            </Link>
            <Link href="/big-bus" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">
              40/50-Seat Luxury Bus Anantapur
            </Link>
            <Link href="/tour-packages" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">
              Tour Packages from Anantapur
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-24 bg-deep-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-deep-navy to-deep-navy" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection direction="up" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-10">Frequently Asked Questions</h2>
            <div className="text-left space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-gold mb-2">What is the mini bus hire rate in Anantapur?</h3>
                <p className="text-cream/80">Rates depend on AC/non-AC, total distance (per km basis), and duration. We offer the best mini bus hire rates in Anantapur — contact us for a precise quote.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-gold mb-2">Do you have tempo traveller hire in Anantapur?</h3>
                <p className="text-cream/80">Yes! We offer tempo traveller hire in Anantapur (12–18 seat). Perfect for family pilgrimages to Tirupati, Mantralayam, and outstation trips. Call 9440440969 or 9440737138 to book.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-gold mb-2">Which areas do you cover from Anantapur?</h3>
                <p className="text-cream/80">We serve Anantapur and all of Andhra Pradesh, Telangana, Karnataka, and beyond. Popular routes: Anantapur to Tirupati, Hyderabad, Bangalore, Mantralayam.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Ready to Book a Mini Bus in Anantapur?</h3>
            <p className="text-cream/70 mb-8">Call Now for Instant Booking — 24/7 Available</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="tel:+919440440969" variant="gold" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto">
                <Phone className="mr-3 w-5 h-5"/> Y.N. Prasad: 9440440969
              </Button>
              <Button href="tel:+919440737138" variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto hover:bg-gold hover:text-deep-navy hover:border-gold border-cream/50 text-cream">
                <Phone className="mr-3 w-5 h-5"/> Y.N. Kumar: 9440737138
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
