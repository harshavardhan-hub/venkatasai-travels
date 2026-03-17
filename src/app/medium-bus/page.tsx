import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Phone, Users, Wind, MapPin, Shield, Music, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: '30-Seat Medium Bus Hire Anantapur AP — Venkata Sai Tours',
  description:
    'Book a 30-seat medium bus in Anantapur for corporate events, school trips & group travel across Andhra Pradesh. Best rates. Call Now: 9440737138 / 9440440969.',
  alternates: {
    canonical: 'https://venkatasaitours.com/medium-bus',
  },
}

export default function MediumBusPage() {
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
    "name": "Medium Bus Hire in Anantapur",
    "description": "30-seat medium bus rentals for corporate events, school trips, and group travel in Anantapur, Andhra Pradesh.",
    "serviceType": "Bus Rental",
    "areaServed": ["Anantapur", "Andhra Pradesh", "Telangana", "Karnataka"]
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a 30-seat medium bus hire cost in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price of hiring a 30-seat medium bus in Anantapur depends on distance (per km), duration, and AC/non-AC choice. We offer the most competitive rates in Anantapur AP. Contact Y.N. Kumar at 9440737138 for a precise quote."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 30-seat bus suitable for school trips from Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our 30-seat medium bus is extremely popular for school excursions, educational trips, and picnics from Anantapur. It has ample luggage space, powerful AC, and a GPS tracking system for student safety."
        }
      },
      {
        "@type": "Question",
        "name": "What cities can you travel to from Anantapur in the medium bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From Anantapur, our 30-seat buses regularly cover Tirupati, Hyderabad, Bangalore, Chennai, Vijayawada, Kurnool, Guntur, and Visakhapatnam. We serve all major cities across Andhra Pradesh, Telangana, and Karnataka."
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
            src="/images/medium-hero.jpg"
            alt="30-seat medium bus hire in Anantapur AP — Venkata Sai Tours & Travels"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-deep-navy/30 to-deep-navy/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection playOnLoad direction="down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-cream text-xs md:text-sm font-medium tracking-widest uppercase">Premium Group Travel — Anantapur AP</span>
          </AnimatedSection>

          <AnimatedSection playOnLoad delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-4 drop-shadow-lg">
              Medium Bus Hire <span className="text-gold">Anantapur</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/90 font-light max-w-2xl mx-auto drop-shadow-md">
              30-Seat Bus Rental — Ideal for Mid-Size Groups Across AP
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO KEYWORD PARAGRAPH */}
      <section className="py-12 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-deep-navy/80 leading-relaxed">
              Need a <strong>medium bus hire in Anantapur</strong>? Venkata Sai Tours &amp; Travels offers 
              the best <strong>30-seat bus rental in Anantapur AP</strong> for corporate outings, school 
              excursions, pilgrimage groups, and wedding transport. Our medium buses cover all major 
              routes across Andhra Pradesh — from Anantapur to Tirupati, Hyderabad, and Bangalore. 
              Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> or{' '}
              <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> for instant booking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-black/5 max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <AnimatedSection direction="left">
              <h2 className="text-4xl font-serif font-bold text-deep-navy mb-6">30-Seater Features</h2>
              <p className="text-deep-navy/70 mb-8 leading-relaxed text-lg">
                Our 30-seater medium buses are the most popular choice for bus rental in Anantapur — 
                ensuring zero compromise on comfort, luggage space, and group cohesion.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Users, text: "30 comfortable push-back seats" },
                  { icon: Wind, text: "Powerful Air Conditioning" },
                  { icon: Music, text: "Entertainment system" },
                  { icon: Shield, text: "Ample undercarriage luggage space" },
                  { icon: Navigation, text: "GPS tracked vehicle" },
                  { icon: MapPin, text: "Licensed and experienced driver" }
                ].map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-semibold text-deep-navy/80 mt-1">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
                <Button href="tel:+919440440969" variant="gold" className="w-full sm:w-auto">
                  <Phone className="mr-2 w-4 h-4"/> Call Now: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" className="w-full sm:w-auto hover:bg-gold hover:text-deep-navy border-gold text-gold">
                  <Phone className="mr-2 w-4 h-4"/> 9440737138
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/medium-bus-interior.jpg"
                alt="Interior of 30-seat medium bus rental Anantapur — comfortable push-back seats"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="font-serif font-bold text-2xl">Ultra-Plush Seating</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BEST FOR & DESTINATIONS */}
      <section className="py-24 bg-deep-navy text-cream overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-deep-navy to-deep-navy" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <AnimatedSection direction="left">
              <h3 className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-px bg-gold/50" />
                Tailored Experiences
              </h3>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10">Best Suited For</h3>
              <div className="space-y-6">
                {[
                  "Corporate team outings & retreats from Anantapur",
                  "School excursions & picnics — Anantapur schools",
                  "Wedding guest transportation in Anantapur",
                  "Group pilgrimage journeys — Tirupati, Mantralayam",
                  "College trips and industry visits across AP"
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group hover:bg-white/5 p-4 rounded-xl transition-colors border border-transparent hover:border-gold/20">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-gold transition-colors">
                      <Check className="w-5 h-5 text-gold group-hover:text-deep-navy" />
                    </div>
                    <span className="text-lg md:text-xl text-cream/90 font-medium py-1">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md h-full flex flex-col justify-center">
                <h3 className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4 text-center">
                  <span className="w-8 h-px bg-gold/50" />Routes<span className="w-8 h-px bg-gold/50" />
                </h3>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-center text-cream">Destinations Covered</h3>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  {["Tirupati","Hyderabad","Bangalore","Chennai","Vijayawada","Kurnool","Guntur","Visakhapatnam","+ All Major AP Cities"].map((city, i) => (
                    <span key={i} className="px-6 py-3 bg-deep-navy text-gold border border-gold/30 rounded-full shadow-lg font-semibold tracking-wide hover:bg-gold hover:text-deep-navy transition-colors cursor-default">
                      {city}
                    </span>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <p className="text-cream/70 mb-6">Need a custom route from Anantapur? We&apos;ll plan it for you.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button href="tel:+919440440969" variant="gold" size="lg" className="text-lg px-8 py-6 h-auto w-full sm:w-auto">
                      <Phone className="mr-3 w-5 h-5"/> 9440440969
                    </Button>
                    <Button href="tel:+919440737138" variant="outline" size="lg" className="text-lg px-8 py-6 h-auto w-full sm:w-auto hover:bg-gold hover:text-deep-navy hover:border-gold border-cream/50 text-cream">
                      <Phone className="mr-3 w-5 h-5"/> 9440737138
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold text-deep-navy mb-2">How much does a 30-seat bus hire cost in Anantapur?</h3>
              <p className="text-deep-navy/70">Pricing depends on AC/non-AC, distance (per km basis), and trip duration. We offer the best medium bus hire rates in Anantapur. Call 9440440969 or 9440737138 for a free quote.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold text-deep-navy mb-2">Can I hire a medium bus for a school trip from Anantapur?</h3>
              <p className="text-deep-navy/70">Absolutely! Our 30-seater is the top choice for school picnics and educational excursions from Anantapur. Student safety is our top priority — GPS tracked with an experienced driver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-8 bg-deep-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-deep-navy/70 mb-4 font-semibold text-sm">Also Available:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/mini-bus" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">Mini Bus & Tempo Traveller Anantapur</Link>
            <Link href="/big-bus" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">40/50-Seat Luxury Bus Anantapur</Link>
            <Link href="/tour-packages" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">Tour Packages from Anantapur</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
