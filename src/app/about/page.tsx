import { Metadata } from 'next'
import Image from 'next/image'
import { Award, ShieldCheck, Map, Clock, Phone, Bus, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'About Us | Venkata Sai Tours & Travels Anantapur AP',
  description:
    'Learn about Venkata Sai Tours & Travels — Anantapur\'s most trusted bus company with 24 years of service. Bus rental, mini bus, tempo traveller & luxury coaches in Anantapur AP. Call: 9440440969.',
  alternates: {
    canonical: 'https://venkatasaitours.com/about',
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Venkata Sai Tours & Travels",
      "foundingDate": "2002",
      "description": "Anantapur's most trusted bus rental and tour operator with 24 years of service across Andhra Pradesh.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ING Vysya Bank Lane, Kamala Nagar",
        "addressLocality": "Anantapur",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "515001",
        "addressCountry": "IN"
      },
      "telephone": "+919440440969"
    }
  }

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-deep-navy">
      <StructuredData data={jsonLd} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[60svh] min-h-[500px] w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-deep-navy">
          <Image
            src="/images/about-hero.jpg"
            alt="Venkata Sai Tours & Travels bus fleet — Anantapur AP's most trusted bus company"
            fill
            className="object-cover opacity-50 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-deep-navy/30 to-deep-navy/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection direction="down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-white/5 backdrop-blur-md mb-6 shadow-lg">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-cream text-xs md:text-sm font-medium tracking-widest uppercase">Our Story — Est. 2002, Anantapur AP</span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-4 drop-shadow-2xl">
              24 Years of <br className="hidden md:block" />
              <span className="text-gold">Trusted Journeys</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
              Anantapur&apos;s #1 bus rental company — serving families, pilgrims, and corporates since 2002.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT KEYWORD PARA */}
      <section className="py-16 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-deep-navy/80 leading-relaxed">
              <strong>Venkata Sai Tours &amp; Travels</strong> is the most trusted <strong>bus company in Anantapur, Andhra Pradesh</strong>. 
              Founded in 2002 by Y.N. Prasad and Y.N. Kumar, we have built a reputation for safe, 
              punctual, and affordable <strong>bus rental in Anantapur</strong>. From <strong>mini bus hire</strong> and{' '}
              <strong>tempo traveller</strong> bookings to 50-seat luxury coaches, we serve individuals, 
              families, schools, and corporations across Anantapur, AP, Telangana, and beyond. 
              We are located at ING Vysya Bank Lane, Kamala Nagar, Anantapur — call us anytime at{' '}
              <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> or{' '}
              <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MILESTONES / STATS */}
      <section className="py-24 bg-deep-navy text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-deep-navy to-deep-navy opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold/50" />
              By The Numbers
              <span className="w-12 h-px bg-gold/50" />
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Milestones in Anantapur</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection direction="up" delay={0.1} className="text-center">
              <div className="text-5xl md:text-7xl font-serif font-bold text-gold mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]">24</div>
              <p className="text-xl font-medium tracking-wide">Years in Anantapur</p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2} className="text-center">
              <div className="text-5xl md:text-7xl font-serif font-bold text-gold mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]">10,000+</div>
              <p className="text-xl font-medium tracking-wide">Happy Customers</p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3} className="text-center">
              <div className="text-5xl md:text-7xl font-serif font-bold text-gold mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]">5,000+</div>
              <p className="text-xl font-medium tracking-wide">Destinations</p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4} className="text-center">
              <div className="text-5xl md:text-7xl font-serif font-bold text-gold mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]">0</div>
              <p className="text-xl font-medium tracking-wide">Major Accidents</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-cream text-deep-navy">
        <div className="container mx-auto px-4 md:px-6">
           <AnimatedSection className="text-center mb-16">
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold/50" />
              Core Principles
              <span className="w-12 h-px bg-gold/50" />
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Why Anantapur Trusts Us</h2>
            <p className="mt-4 text-deep-navy/70 text-lg max-w-2xl mx-auto">
              As the leading <strong>travels in Anantapur AP</strong>, our values drive everything we do — from the first call to the final destination.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "Rigorous maintenance schedules and highly trained staff ensure Anantapur's best safety record — zero major accidents." },
              { icon: Clock, title: "Punctuality", desc: "We value your time. Our buses from Anantapur start on the dot and stick to designated schedules seamlessly." },
              { icon: Heart, title: "Honest Service", desc: "No hidden charges, honest feedback, and completely transparent bus booking processes in Anantapur." },
              { icon: Bus, title: "Comfort & Cleanliness", desc: "All vehicles are sanitized and meticulously cleaned before every trip departing from Anantapur." },
              { icon: Award, title: "Affordable Pricing", desc: "Premium bus travel experiences tailored to fit a wide array of budget requirements across Andhra Pradesh." },
              { icon: Map, title: "Diverse Fleet", desc: "From 14-seat mini buses to 50-seat luxury coaches — all based in Anantapur, serving every group size." }
            ].map((val, i) => (
              <AnimatedSection key={i} delay={0.1 * i} direction="up" className="bg-white p-8 rounded-3xl shadow-lg shadow-deep-navy/5 border border-black/5 hover:border-gold/30 hover:-translate-y-2 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <val.icon className="w-6 h-6 text-gold group-hover:text-deep-navy" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{val.title}</h3>
                <p className="text-deep-navy/70 leading-relaxed">{val.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP / TEAM */}
      <section className="py-24 bg-white text-deep-navy relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
           <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold/50" />
              The People Behind The Wheel
              <span className="w-12 h-px bg-gold/50" />
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Leadership</h2>
            <p className="text-lg text-deep-navy/70">Dedicated partners ensuring every journey from Anantapur is nothing short of excellent — anytime, any day.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0.1} className="flex flex-col items-center bg-cream p-10 rounded-3xl text-center border border-black/5">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold shadow-xl mb-6 relative">
                <Image src="/prasad.png" alt="Y.N. Prasad — Managing Partner, Venkata Sai Tours & Travels Anantapur" fill className="object-cover" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-2">Y.N. Prasad</h3>
              <p className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Managing Partner</p>
              <p className="text-deep-navy/60 text-sm mb-6">Bus Booking Anantapur — Head of Operations</p>
              <Button href="tel:+919440440969" variant="outline" className="w-full border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white">
                <Phone className="w-4 h-4"/> Call Now: 9440440969
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="flex flex-col items-center bg-cream p-10 rounded-3xl text-center border border-black/5">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold shadow-xl mb-6 relative">
                <Image src="/kumar.png" alt="Y.N. Kumar — Founding Partner, Venkata Sai Tours & Travels Anantapur" fill className="object-cover" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-2">Y.N. Kumar</h3>
              <p className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Founding Partner</p>
              <p className="text-deep-navy/60 text-sm mb-6">Travels in Anantapur — Head of Customer Relations</p>
              <Button href="tel:+919440737138" variant="outline" className="w-full border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white">
                <Phone className="w-4 h-4"/> Call Now: 9440737138
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
