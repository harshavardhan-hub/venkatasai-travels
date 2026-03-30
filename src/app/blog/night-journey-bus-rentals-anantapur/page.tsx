import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Night Journey Bus Rentals in Anantapur: Safety Tips | 2026',
  description: 'Taking an overnight trip? Learn the best safety tips and book a reliable, secure night journey bus rental in Anantapur entirely via Venkata Sai Travels.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/night-journey-bus-rentals-anantapur',
  },
}

export default function NightJourneyBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are night journey bus rentals in Anantapur safe?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, provided you book with Venkata Sai Travels. We use dual veteran drivers, GPS live routing, and properly maintained 50-seater AC coaches to absolutely guarantee safety during dark transit hours." }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-deep-navy">
      <StructuredData data={faqJsonLd} />
      <Navbar />

      <section className="relative pt-40 pb-16 bg-deep-navy text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-gold/10 via-deep-navy to-deep-navy pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-cream/50 mb-8">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-cream/80">Night Journeys</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Safety Tips</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Night Journey <span className="text-gold">Bus Rentals in Anantapur</span>: Safety Guide
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              When darkness falls, driver quality is paramount. Here is how to pick the safest private bus in Anantapur for overnight long hauls.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Planning an overnight haul?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant outstation bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Mastering the Midnight Drive</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Booking an overnight <strong>bus rental in Anantapur</strong> helps you maximize your vacation time by sleeping through the long routing times. However, prioritizing an established, highly-rated service over a cheap discount operator is utterly essential for safety. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> dominates the industry locally with our extreme overnight protocols:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Dual Veteran Drivers</h3>
                <p className="text-deep-navy/70">Our strict protocol ensures two fully-licensed drivers are equipped for overnight hauls exceeding 5 hours, eliminating fatigue-related hazards.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Live GPS Security</h3>
                <p className="text-deep-navy/70">We actively track all <a href="/contact" className="text-gold hover:underline">overnight luxury buses</a> using high-speed telemetry, ensuring that you never get stranded in a blind spot along the NH44 highway. Rest easy with your family onboard.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Book Safe Night Travels Here</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button href="tel:+919440440969" variant="gold" size="lg" className="text-lg px-8 py-5 h-auto">
                <Phone className="mr-3 w-5 h-5"/> Y.N. Prasad: 9440440969
              </Button>
              <Button href="tel:+919440737138" variant="outline" size="lg" className="text-lg px-8 py-5 h-auto border-cream/30 text-cream hover:bg-gold hover:text-deep-navy hover:border-gold">
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
