import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Compass, Building, GraduationCap, Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Tour Packages from Anantapur | Pilgrimage, Corporate & Family',
  description:
    'Affordable pilgrimage, family, corporate & school tour packages from Anantapur AP. Tirupati, Shirdi, Varanasi & more. Call Now: 9440440969 / 9440737138.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/tour-packages',
  },
  openGraph: {
    images: [{ url: '/og/og-tour-packages.png', width: 1200, height: 630, alt: 'Tour Packages from Anantapur — Tirupati, Shirdi, Goa & more' }],
  },
}

export default function TourPackagesPage() {
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
    "name": "Tour Packages from Anantapur",
    "description": "Pilgrimage, corporate, family, and school tour packages from Anantapur, Andhra Pradesh covering Tirupati, Shirdi, Varanasi, Goa, Vizag and more.",
    "serviceType": "Tour Operator",
    "areaServed": ["Anantapur", "Andhra Pradesh", "India"]
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Tirupati package price from Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tirupati tour packages from Anantapur start at very affordable rates. The journey is approximately 3-4 hours from Anantapur to Tirupati. A 2-day package with bus + accommodation starts from ₹1,500/head for groups. Call 9440440969 for the latest pricing and availability."
        }
      },
      {
        "@type": "Question",
        "name": "How far is Tirupati from Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tirupati is approximately 180 km from Anantapur, Andhra Pradesh. The journey takes about 3 to 4 hours by road in our comfortable buses. We depart daily from Anantapur for Tirupati Balaji Darshan."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer custom tour packages from Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Venkata Sai Tours & Travels creates fully customised tour packages from Anantapur for any group size and any destination. Call Y.N. Prasad at 9440440969 to discuss your requirements and get a free quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you arrange corporate tour packages from Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We are the leading corporate tour operator from Anantapur. We handle team outings, annual day transport, and multi-city conference travel for companies of all sizes. Contact us at 9440440969 for corporate packages."
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
      <section className="relative h-[65svh] min-h-[500px] w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-deep-navy">
          <Image
            src="/images/tour-hero.jpg"
            alt="Tour packages from Anantapur AP — Tirupati, Shirdi, Goa, Vizag tours"
            fill
            sizes="100vw"
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-deep-navy/30 to-deep-navy/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection playOnLoad direction="down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-white/5 backdrop-blur-md mb-6 shadow-lg">
            <Compass className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="text-cream text-xs md:text-sm font-medium tracking-widest uppercase">Curated Journeys Across India from Anantapur</span>
          </AnimatedSection>
          
          <AnimatedSection playOnLoad delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-4 drop-shadow-2xl">
              Tour <span className="text-gold">Packages</span> <br className="hidden md:block"/>from Anantapur
            </h1>
            <p className="text-lg md:text-2xl text-cream/90 font-light max-w-2xl mx-auto drop-shadow-md pb-10">
              Unforgettable experiences — pilgrimage, corporate, family & school tours from Anantapur, AP.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO KEYWORD PARAGRAPH */}
      <section className="py-12 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-deep-navy/80 leading-relaxed">
              Venkata Sai Tours &amp; Travels is Anantapur&apos;s most trusted <strong>tour operator</strong>, offering 
              affordable <strong>tour packages from Anantapur AP</strong> to Tirupati, Shirdi, Varanasi, Goa, 
              Mantralayam, and many more destinations. Whether it&apos;s a family vacation, a corporate 
              outing, a school picnic, or a pilgrimage —  we have the perfect package. 
              Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> for
              group bookings and pricing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TIRUPATI PACKAGE PRICING */}
      <section className="py-16 bg-deep-navy text-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold/50" />
              Most Popular Package
              <span className="w-12 h-px bg-gold/50" />
            </h2>
            <h2 className="text-4xl font-serif font-bold">Tirupati Package from Anantapur</h2>
            <p className="text-cream/70 mt-4 text-lg">Distance: ~180 km | Drive Time: 3–4 Hours</p>
          </AnimatedSection>
          <AnimatedSection direction="up" className="bg-white/5 border border-gold/30 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2">Day Trip</p>
                <p className="text-4xl font-serif font-bold text-cream mb-2">₹ On Request</p>
                <p className="text-cream/60 text-sm">Bus transport only. Darshan on your own.</p>
              </div>
              <div className="text-center p-6 bg-gold/10 rounded-2xl border border-gold/40 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-deep-navy text-xs font-bold px-3 py-1 rounded-full">Popular</div>
                <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2">2-Day Package</p>
                <p className="text-4xl font-serif font-bold text-cream mb-2">Call for Price</p>
                <p className="text-cream/60 text-sm">Bus + accommodation + darshan assistance.</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2">Custom Group</p>
                <p className="text-4xl font-serif font-bold text-cream mb-2">Best Rates</p>
                <p className="text-cream/60 text-sm">Groups of 10+ get special group pricing.</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-cream/70 mb-4">All prices are per-group basis. Call for exact quote based on bus size.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="tel:+919440440969" variant="gold" size="lg" className="text-lg px-8 py-6 h-auto">
                  <Phone className="mr-3 w-5 h-5"/> Y.N. Prasad: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" size="lg" className="text-lg px-8 py-6 h-auto hover:bg-gold hover:text-deep-navy hover:border-gold border-cream/50 text-cream">
                  <Phone className="mr-3 w-5 h-5"/> Y.N. Kumar: 9440737138
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PACKAGES FILTER / OVERVIEW */}
      <section className="py-16 relative z-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-black/5 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-navy mb-12 text-center">Explore All Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-center">
              <a href="#pilgrimage" className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-gold/10 transition-colors border border-transparent hover:border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                  <Star className="w-8 h-8" />
                </div>
                <span className="font-semibold text-deep-navy/80 group-hover:text-deep-navy">Pilgrimage</span>
              </a>
              <a href="#corporate" className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-gold/10 transition-colors border border-transparent hover:border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                  <Building className="w-8 h-8" />
                </div>
                <span className="font-semibold text-deep-navy/80 group-hover:text-deep-navy">Corporate</span>
              </a>
              <a href="#family" className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-gold/10 transition-colors border border-transparent hover:border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                  <Heart className="w-8 h-8" />
                </div>
                <span className="font-semibold text-deep-navy/80 group-hover:text-deep-navy">Family</span>
              </a>
              <a href="#education" className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-gold/10 transition-colors border border-transparent hover:border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="font-semibold text-deep-navy/80 group-hover:text-deep-navy">Education</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PILGRIMAGE TOURS */}
      <section id="pilgrimage" className="py-20 bg-cream scroll-mt-24 text-deep-navy">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection direction="left" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 flex items-center gap-4">
              <span className="text-gold">Pilgrimage</span> Tours from Anantapur
            </h2>
            <p className="text-deep-navy/70 text-lg max-w-2xl">Spiritual journeys from Anantapur crafted with comfort and devotion in mind. We ensure your pilgrimage is peaceful and worry-free.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourCard 
              category="Pilgrimage" title="Tirupati Balaji Darshan" duration="2 Days" location="Tirupati" delay={0.1}
              description="A seamless divine journey from Anantapur (~180 km). Includes luxury bus transport, comfortable accommodation, and coordinated temple visit." 
              image="/images/tirupati.jpg" 
            />
            <TourCard 
              category="Pilgrimage" title="Shirdi Sai Baba Tour" duration="4 Days" location="Shirdi, MH" delay={0.2}
              description="Group departure from Anantapur. An all-inclusive pilgrimage package covering travel, stay, and darshan assistance." 
              image="/images/shirdi.jpg" 
            />
            <TourCard 
              category="Pilgrimage" title="Varanasi & Prayagraj" duration="6 Days" location="North India" delay={0.3}
              description="Spiritual North India tour from Anantapur covering the most sacred ghats and temples. Perfect for large families." 
              image="/images/varanasi.jpg" 
            />
            <TourCard 
              category="Pilgrimage" title="Mantralayam Day Trip" duration="1 Day" location="Mantralayam" delay={0.4}
              description="A quick yet fulfilling spiritual getaway from Anantapur to the sacred Raghavendraswamy Temple. Suitable for weekend travel." 
              image="/images/mantralayam.jpg" 
            />
          </div>
        </div>
      </section>
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-10" />

      {/* CORPORATE TOURS */}
      <section id="corporate" className="py-20 bg-cream scroll-mt-24 text-deep-navy">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection direction="left" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 flex items-center gap-4">
              <span className="text-gold">Corporate</span> Packages from Anantapur
            </h2>
            <p className="text-deep-navy/70 text-lg max-w-2xl">Professional transport solutions for your team. From daily commuting to multi-city retreats from Anantapur.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourCard 
              category="Corporate" title="Team Outing" duration="Half / Full Day" location="Nearby Resorts" delay={0.1}
              description="Boost team morale with a fun-filled day at premium resorts near Anantapur. We handle the pickup and drop from any location in Anantapur." 
              image="/images/corporate-outing.jpg" 
            />
            <TourCard 
              category="Corporate" title="Annual Day Transport" duration="Custom" location="Bulk Event Centers" delay={0.2}
              description="Bulk booking for companies hosting large annual gatherings in and around Anantapur. We ensure everyone arrives together and on time." 
              image="/images/annual-day.jpg" 
            />
            <TourCard 
              category="Corporate" title="Conference Travel" duration="Multi-Day" location="Metro Cities" delay={0.3}
              description="Multi-city corporate tour management for leadership teams or large employee delegations attending business conferences from Anantapur." 
              image="/images/conference.jpg" 
            />
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-10" />

      {/* FAMILY & EDUCATION */}
      <section id="family" className="py-20 bg-deep-navy text-cream scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-deep-navy to-deep-navy pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Family */}
          <AnimatedSection direction="left" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 flex items-center gap-4">
              Family & <span className="text-gold">Leisure</span> Travel from Anantapur
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl">Pack your bags and unwind. We take you to the best leisure destinations safely and comfortably from Anantapur.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <TourCard 
              category="Family" title="Hill Station Tour" duration="2 Days" location="Horsley Hills" delay={0.1}
              description="Escape the heat to the scenic Horsley Hills. A perfect weekend retreat for families from Anantapur." 
              image="/images/hill-station.jpg" 
            />
            <TourCard 
              category="Family" title="Beach Holiday" duration="3 Days" location="Vizag" delay={0.2}
              description="Enjoy the sweeping coastlines of Visakhapatnam. A relaxing 3-day itinerary from Anantapur covering all major tourist spots." 
              image="/images/beach.jpg" 
            />
            <TourCard 
              category="Family" title="Karnataka & Goa" duration="5 Days" location="West Coast" delay={0.3}
              description="The ultimate family vacation from Anantapur covering historical sites in Karnataka and the pristine beaches of Goa." 
              image="/images/goa.jpg" 
            />
          </div>

          {/* Education */}
          <div id="education" className="scroll-mt-24">
            <AnimatedSection direction="left" className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 flex items-center gap-4">
                <span className="text-gold">School</span> Trips from Anantapur
              </h2>
              <p className="text-cream/70 text-lg max-w-2xl">Safety-certified travel for schools and colleges in Anantapur focusing on education, heritage, and nature.</p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TourCard 
                category="Education" title="Historical Excursions" duration="1-2 Days" location="AP & TS Heritage Sites" delay={0.1}
                description="Educational tours from Anantapur covering ancient temples, forts, and museums across Andhra Pradesh and Telangana." 
                image="/images/historical.jpg" 
              />
              <TourCard 
                category="Education" title="Adventure Camps" duration="Special Route" location="Nature Destinations" delay={0.2}
                description="Thrilling trips to nature parks and trekking destinations designed specifically for active youth groups from Anantapur schools." 
                image="/images/adventure.jpg" 
              />
              <TourCard 
                category="Education" title="Annual Local Picnic" duration="1 Day" location="Custom" delay={0.3}
                description="Customized local trip planning for the entire school's annual picnic with our large fleet of 50-seater buses based in Anantapur." 
                image="/images/school-picnic.jpg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG LINKS */}
      <section className="py-12 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-deep-navy/60 font-semibold text-sm mb-4 uppercase tracking-widest">Read Our Guides</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/tirupati-package-from-anantapur" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">
              Tirupati Package from Anantapur — Price Guide
            </Link>
            <Link href="/blog/best-bus-rental-anantapur" className="px-5 py-2.5 rounded-full border border-deep-navy/30 text-deep-navy/70 hover:border-gold hover:text-gold transition-colors text-sm font-semibold">
              Best Bus Rental in Anantapur
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-5">
            {[
              { q: "What is the Tirupati package price from Anantapur?", a: "Tirupati is ~180 km from Anantapur (3-4 hours drive). 2-day packages with bus + accommodation start at group-based pricing. Call 9440440969 or 9440737138 for the latest rates." },
              { q: "Do you offer custom packages from Anantapur?", a: "Yes! We create fully customised tour packages from Anantapur for any group size and destination. Contact us at 9440440969 or 9440737138 to discuss your requirements and get a free quote." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                <h3 className="text-lg font-bold text-deep-navy mb-2">{item.q}</h3>
                <p className="text-deep-navy/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold text-deep-navy text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Plan Your Custom Trip from Anantapur</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">Don&apos;t see exactly what you&apos;re looking for? Contact us and we&apos;ll craft an itinerary just for you. Call Now for Instant Booking!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="tel:+919440440969" variant="outline" size="lg" className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-gold text-lg px-10 py-6 h-auto transition-all shadow-xl">
                <Phone className="mr-3 w-5 h-5"/> Y.N. Prasad: 9440440969
              </Button>
              <Button href="tel:+919440737138" variant="outline" size="lg" className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-gold text-lg px-10 py-6 h-auto transition-all shadow-xl">
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
