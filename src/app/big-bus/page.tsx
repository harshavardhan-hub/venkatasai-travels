import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Phone, Users, Tv } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: '40 & 50 Seat Luxury Bus Hire Anantapur | Big Bus Rental AP',
  description:
    'Hire 40-seat semi-deluxe or 50-seat push-back luxury bus in Anantapur AP. 4K audio-video coach available. Call Now: 9440440969 / 9440737138.',
  alternates: {
    canonical: 'https://venkatasaitravels.com/big-bus',
  },
  openGraph: {
    images: [{ url: '/og/og-big-bus.png', width: 1200, height: 630, alt: '40 & 50-Seat Luxury Bus Hire in Anantapur AP' }],
  },
}

export default function BigBusPage() {
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
    "name": "Luxury Big Bus Hire in Anantapur",
    "description": "40-seat semi-deluxe and 50-seat push-back luxury coaches for large groups in Anantapur, Andhra Pradesh. 4K audio video coach also available.",
    "serviceType": "Bus Rental",
    "areaServed": ["Anantapur", "Andhra Pradesh", "Telangana", "Karnataka"]
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of hiring a 50-seat bus in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price for a 50-seat luxury bus hire in Anantapur depends on distance, duration, and type (semi-deluxe or push-back). We offer the most competitive large bus rental rates in Anantapur AP. Call 9440440969 for a free customised quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide big buses for weddings in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our 40 and 50-seat buses are in high demand for wedding processions and guest transportation in Anantapur. We ensure all guests travel together in comfort and arrive on time. Book early to secure your date — call 9440440969."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 4K Audio Video Coach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 4K Audio Video Coach is the ultimate luxury bus featuring the latest 4K display system, immersive surround sound, individual USB charging ports, and premium push-back reclining seats. Ideal for long-distance pilgrimages and corporate conferences from Anantapur."
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-deep-navy text-cream selection:bg-gold selection:text-deep-navy">
      <StructuredData data={serviceJsonLd} />
      <StructuredData data={faqJsonLd} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70svh] min-h-[600px] w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/big-hero.jpg"
            alt="40 and 50 seat luxury bus hire in Anantapur AP — Venkata Sai Tours"
            fill
            className="object-cover opacity-50 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-deep-navy/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection playOnLoad direction="down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-gold text-xs md:text-sm font-medium tracking-widest uppercase">Anantapur&apos;s Largest Bus Fleet</span>
          </AnimatedSection>
          
          <AnimatedSection playOnLoad delay={0.2} className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream leading-[1.1] mb-6 drop-shadow-2xl">
              Big Bus Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-saffron">Anantapur</span>
            </h1>
            <p className="text-xl md:text-3xl text-cream/90 font-light drop-shadow-md">
              40 & 50-Seat Luxury Coaches for Large Groups — Anantapur AP
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO KEYWORD PARAGRAPH */}
      <section className="py-12 bg-deep-navy border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Looking for <strong className="text-gold">large bus rental in Anantapur</strong>? Venkata Sai Tours &amp; Travels offers 
              premium 40-seat semi-deluxe and 50-seat push-back luxury <strong className="text-gold">bus hire in Anantapur AP</strong> for 
              corporate conferences, big weddings, mass employee transport, and long-distance pilgrimages. 
              Our exclusive <strong className="text-gold">4K Audio Video Coach</strong> is the finest bus available in Anantapur. 
              Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> for instant booking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* THREE BUS TYPES */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            
            {/* 40 Seat Semi Deluxe */}
            <AnimatedSection direction="up" delay={0.1} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl hover:border-gold/30 hover:bg-white/10 transition-all flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-cream mb-2">40-Seat Semi Deluxe</h2>
              <p className="text-cream/70 mb-8 flex-1">
                Perfect balance of capacity and cost. Reclining seats, powerful AC, large windows, and ample undercarriage luggage space. Charging ports available. Best for corporate travel from Anantapur.
              </p>
              <div className="flex flex-col w-full gap-3 mt-auto">
                <Button href="tel:+919440440969" variant="gold" className="w-full">
                  <Phone className="mr-2 w-4 h-4"/> Call Now: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" className="w-full">
                  <Phone className="mr-2 w-4 h-4"/> 9440737138
                </Button>
              </div>
            </AnimatedSection>

            {/* 50 Seat Push Back */}
            <AnimatedSection direction="up" delay={0.2} className="bg-gradient-to-br from-gold/20 to-deep-navy border border-gold/50 p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(201,168,76,0.15)] flex flex-col items-center text-center transform lg:-translate-y-8 relative">
              <div className="absolute -top-4 bg-gold text-deep-navy px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
              <div className="w-24 h-24 rounded-2xl bg-gold flex items-center justify-center mb-6 shadow-xl shadow-gold/20">
                <Users className="w-12 h-12 text-deep-navy" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gold mb-2">50-Seat Push Back</h2>
              <p className="text-cream/90 mb-8 flex-1 text-lg">
                Maximum capacity with full push-back recliners for long-distance journeys from Anantapur. High-end AC, entertainment screens, and premium interiors for mass comfort.
              </p>
              <div className="flex flex-col w-full gap-3 mt-auto">
                <Button href="tel:+919440440969" variant="gold" size="lg" className="w-full text-lg">
                  <Phone className="mr-2 w-5 h-5"/> Y.N. Prasad: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" size="lg" className="w-full text-lg bg-deep-navy/40 border-gold/50 text-cream hover:bg-gold hover:text-deep-navy border">
                  <Phone className="mr-2 w-5 h-5"/> Y.N. Kumar: 9440737138
                </Button>
              </div>
            </AnimatedSection>

            {/* 4K Audio & Video Coach */}
            <AnimatedSection direction="up" delay={0.3} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl hover:border-gold/30 hover:bg-white/10 transition-all flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Tv className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-cream mb-2">4K Audio Video Coach</h2>
              <p className="text-cream/70 mb-8 flex-1">
                The ultimate luxury bus in Anantapur. 4K display system, immersive surround sound, individual USB charging, and premium push-back seating. Perfect for VIP tours and pilgrimages.
              </p>
              <div className="flex flex-col w-full gap-3 mt-auto">
                <Button href="tel:+919440440969" variant="gold" className="w-full">
                  <Phone className="mr-2 w-4 h-4"/> Call Now: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" className="w-full">
                  <Phone className="mr-2 w-4 h-4"/> 9440737138
                </Button>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className="py-24 bg-cream text-deep-navy overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <AnimatedSection direction="left" className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl max-w-2xl mx-auto w-full">
              <Image
                src="/images/large-group.jpg"
                alt="Large group bus travel from Anantapur — Venkata Sai Tours 50-seat luxury coach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-px bg-gold/50" />
                Capacity & Scale
              </p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Best Suited For</h3>
              <p className="text-xl text-deep-navy/70 mb-10 leading-relaxed">
                When you have a massive group in Anantapur, logistics matter. Our big bus fleet ensures everyone travels together, arrives on time, and enjoys the ride.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Large family functions & weddings",
                  "Corporate conferences & events",
                  "Long-distance pilgrimages from Anantapur",
                  "Mass employee transport",
                  "Wedding processions in Anantapur",
                  "Sports team travel across AP"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="tel:+919440440969" variant="gold" size="lg" className="w-full sm:w-auto px-8 h-14">
                  <Phone className="w-5 h-5 mr-3"/> Y.N. Prasad: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" size="lg" className="w-full sm:w-auto px-8 h-14 border-deep-navy text-deep-navy hover:bg-deep-navy hover:border-deep-navy hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 mr-3"/> Y.N. Kumar: 9440737138
                </Button>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-deep-navy text-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-gold mb-2">What is the price of 50-seat bus hire in Anantapur?</h3>
              <p className="text-cream/80">Pricing for large bus hire in Anantapur depends on distance, AC/non-AC, and trip duration. Call 9440440969 or 9440737138 for a free, no-obligation quote customised for your group.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-gold mb-2">Do you arrange big buses for weddings in Anantapur?</h3>
              <p className="text-cream/80">Yes! We are the top choice for wedding guest transport in Anantapur. Our 40 and 50-seat luxury coaches ensure all guests travel together in style. Book early — call 9440440969 or 9440737138.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-cream/50 mb-4 font-semibold text-sm">Also Available:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/mini-bus" className="px-5 py-2.5 rounded-full border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">Mini Bus & Tempo Traveller Anantapur</Link>
            <Link href="/medium-bus" className="px-5 py-2.5 rounded-full border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">30-Seat Medium Bus Anantapur</Link>
            <Link href="/tour-packages" className="px-5 py-2.5 rounded-full border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">Tour Packages from Anantapur</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
