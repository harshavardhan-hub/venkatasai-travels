import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Star, ShieldCheck, Map, Users, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { BusCard } from '@/components/bus-card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Bus Booking Anantapur | Venkata Sai Tours & Travels',
  description:
    'Best bus rental in Anantapur AP. Mini bus, tempo traveller, medium bus & luxury coach. Pilgrimage, corporate & family tours. Call Now: 9440440969 / 9440737138. Book Today!',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/',
  },
  openGraph: {
    images: [{ url: '/og/og-home.png', width: 1200, height: 630, alt: 'Venkata Sai Tours & Travels — Bus Booking Anantapur AP' }],
  },
}

export default function Home() {
  // LocalBusiness schema is already in global layout.tsx — no duplicate needed here

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Venkata Sai Tours & Travels located in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Venkata Sai Tours & Travels is located at ING Vysya Bank Lane, Kamala Nagar, Anantapur, Andhra Pradesh 515001. You can call 9440440969 for directions or bookings."
        }
      },
      {
        "@type": "Question",
        "name": "What types of buses are available for hire in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 14-seat and 18-seat mini buses, tempo travellers, 30-seat medium buses, 40-seat semi-deluxe buses, 50-seat push-back buses, and 4K audio-video luxury coaches — all based in Anantapur, AP."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a bus in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply call Y.N. Prasad at 9440440969 or Y.N. Kumar at 9440737138 for instant bus booking in Anantapur. We are available 24/7. You can also WhatsApp us for quick confirmation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Tirupati tour packages from Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer Tirupati Balaji Darshan packages from Anantapur starting at very affordable rates. The journey takes approximately 3-4 hours by our comfortable buses. Call 9440440969 for package details and pricing."
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-deep-navy">
      <StructuredData data={faqJsonLd} />
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-deep-navy">
          <Image
            src="/images/hero-bus.jpg"
            alt="Bus booking Anantapur — Venkata Sai Tours & Travels luxury fleet"
            fill
            className="object-cover opacity-50 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-deep-navy/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center pt-20">
          <AnimatedSection playOnLoad direction="down" delay={0.2} className="w-fit">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-white/5 backdrop-blur-md mb-8 shadow-lg">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-cream text-xs md:text-sm font-medium tracking-widest uppercase">
                Anantapur&apos;s #1 Bus Booking Service
              </span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection playOnLoad delay={0.4} className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-bold text-cream leading-[1.1] mb-6 drop-shadow-2xl">
              Venkata Sai <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-saffron to-gold">Tours & Travels</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/90 font-light mb-4 max-w-2xl mx-auto drop-shadow-md">
              Bus Booking in Anantapur, Andhra Pradesh.
            </p>
            <p className="text-base md:text-lg text-cream/70 font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
              Mini bus hire · Tempo traveller · Medium bus · 50-seat luxury coach. 24/7 service across AP, Telangana & beyond.
            </p>
          </AnimatedSection>
          
          <AnimatedSection playOnLoad direction="up" delay={0.6} className="w-fit">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5">
              <Button size="lg" href="#fleet" className="text-lg px-8 py-6 h-auto" variant="gold">
                Explore Our Fleet
              </Button>
              <Button size="lg" variant="outline" href="tel:+919440440969" className="text-lg px-8 py-6 h-auto bg-deep-navy/30 backdrop-blur-md border-cream/20 text-cream hover:border-gold hover:text-gold hover:bg-white/10">
                <Phone className="mr-3 w-5 h-5"/> Y.N. Prasad: 9440440969
              </Button>
              <Button size="lg" variant="outline" href="tel:+919440737138" className="text-lg px-8 py-6 h-auto bg-deep-navy/30 backdrop-blur-md border-cream/20 text-cream hover:border-gold hover:text-gold hover:bg-white/10">
                <Phone className="mr-3 w-5 h-5"/> Y.N. Kumar: 9440737138
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-cream text-deep-navy relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold/50" />
              The Venkata Sai Difference
              <span className="w-12 h-px bg-gold/50" />
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Why Travel With Us?</h2>
            <p className="mt-6 text-lg text-deep-navy/70 max-w-3xl mx-auto leading-relaxed">
              Venkata Sai Tours &amp; Travels is Anantapur&apos;s most trusted bus rental company — offering 
              safe, comfortable, and affordable bus hire for pilgrimages to Tirupati, Shirdi &amp; Varanasi, 
              corporate outings, school trips, and family vacations across Andhra Pradesh.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "10,000+ Happy Customers", desc: "Families, corporates, and pilgrims from Anantapur trust us every day." },
              { icon: ShieldCheck, title: "24 Years Experience", desc: "Two decades of safe, reliable, and punctual bus travel in AP." },
              { icon: Map, title: "5,000+ Destinations", desc: "Covering all major routes across Andhra Pradesh, Telangana and beyond." },
              { icon: Phone, title: "24/7 Booking", desc: "Round-the-clock bus booking and travel assistance. Call anytime." }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={0.1 * i} direction="up" className="bg-white p-10 rounded-3xl shadow-xl shadow-deep-navy/5 border border-black/5 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-gold group-hover:text-deep-navy transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{feature.title}</h3>
                <p className="text-deep-navy/70 leading-relaxed text-lg">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET OVERVIEW */}
      <section id="fleet" className="py-24 md:py-32 bg-deep-navy text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <AnimatedSection direction="left" className="max-w-2xl">
              <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-gold/50" />
                Our Premium Vehicles
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Bus Fleet</h2>
              <p className="text-cream/70 text-xl leading-relaxed">
                From mini bus hire in Anantapur to 50-seat luxury coaches — we have the perfect vehicle for every group size and budget.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="shrink-0 w-full lg:w-auto">
              <Button href="/contact" variant="gold" size="lg" className="w-full lg:w-auto text-lg px-8 py-6 h-auto">
                Get an Instant Quote
              </Button>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BusCard 
              name="Mini Bus / Tempo Traveller" seats="14–18" 
              description="Ideal for small families, airport transfers & local picnics. AC & non-AC available in Anantapur."
              image="/images/mini-14.jpg" href="/mini-bus" delay={0.1}
            />
            <BusCard 
              name="30-Seat Medium Bus" seats="30" 
              description="Perfect for school excursions, corporate team outings, and group travel from Anantapur."
              image="/images/medium-30.jpg" href="/medium-bus" delay={0.2}
            />
            <BusCard 
              name="4K Audio Video Coach" seats="40–50" 
              description="Luxury redefined — 4K displays, surround sound, and push-back recliners for long-distance travel."
              image="/images/big-luxury.jpg" href="/big-bus" delay={0.3}
            />
          </div>

          {/* Keyword-rich internal links */}
          <AnimatedSection direction="up" delay={0.4} className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Mini Bus Hire Anantapur", href: "/mini-bus" },
              { label: "Tempo Traveller Anantapur", href: "/mini-bus#tempo" },
              { label: "Medium Bus Rental AP", href: "/medium-bus" },
              { label: "Luxury Bus Hire Anantapur", href: "/big-bus" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-center px-4 py-3 rounded-xl border border-gold/30 text-gold/80 hover:text-gold hover:border-gold hover:bg-white/5 transition-all text-sm font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* TOUR HIGHLIGHTS */}
      <section className="py-24 md:py-32 bg-cream text-deep-navy overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1 relative">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                <div className="absolute inset-0 border border-gold/30 rounded-[3rem] translate-x-6 translate-y-6" />
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image src="/images/tour-collage.jpg" alt="Tour packages from Anantapur — Tirupati, Shirdi, Goa & more" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent" />
                </div>
                
                {/* Floating Testimonial */}
                <AnimatedSection delay={0.8} direction="up" className="absolute -bottom-10 -left-4 md:-left-12 bg-white p-8 rounded-3xl shadow-2xl z-20 w-80 border border-black/5">
                  <div className="flex text-gold mb-4 gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="font-serif font-bold text-xl mb-3 leading-snug">&quot;Breathtaking Trips&quot;</p>
                  <p className="text-deep-navy/70 leading-relaxed mb-4">&quot;Our family loved the Tirupati package from Anantapur! Safe driving and excellent coordination by Y.N. Prasad.&quot;</p>
                  <p className="text-sm font-bold tracking-widest text-gold uppercase">— Ramesh K., Anantapur</p>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-gold/50" />
                Curated Journeys
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Tour Packages <br className="hidden md:block"/>from Anantapur</h2>
              <p className="text-xl text-deep-navy/70 mb-12 leading-relaxed">
                Discover the best of India with our expertly crafted tour packages from Anantapur, AP. We handle the driving while you create memories.
              </p>
              
              <ul className="space-y-8 mb-14">
                {[
                  { title: "Pilgrimage Tours", desc: "Tirupati, Shirdi, Varanasi — guided pilgrimage trips from Anantapur." },
                  { title: "Corporate Outings", desc: "Team building trips to resorts, hill stations & conference venues." },
                  { title: "Family Vacations", desc: "Safe and memorable holidays to Goa, Kerala, Vizag & more." },
                  { title: "School & College Trips", desc: "Certified educational and adventure excursions across AP." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="mt-1 w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-300">
                      <ChevronRight className="w-6 h-6 text-gold group-hover:text-deep-navy transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-2xl mb-2">{item.title}</h3>
                      <p className="text-deep-navy/70 text-lg">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Button href="/tour-packages" variant="gold" size="lg" className="text-lg px-8 py-6 h-auto">
                View All Packages <ChevronRight className="ml-2 w-5 h-5"/>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
