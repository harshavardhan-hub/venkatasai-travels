import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Reliable Travels in Anantapur for Outstation Trips | 2026',
  description: 'Taking a long trip? Pick the most reliable travels in Anantapur for outstation journeys to Hyderabad, Bangalore, and beyond. Find out more.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/travels-in-anantapur-to-hyderabad',
  },
}

export default function OutstationTravelsBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which are the best travels in Anantapur for long trips?",
        "acceptedAnswer": { "@type": "Answer", "text": "Venkata Sai Tours is extensively recognized as the best travels in Anantapur for outstation journeys, offering 50-seater push-back coaches for optimum long-distance comfort." }
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
              <span className="text-cream/80">Outstation Travels Features</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Long Distance</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Reliable <span className="text-gold">Travels in Anantapur</span> for Outstation Trips
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Long-distance journey ahead? Discover why prioritizing quality travels in Anantapur will save you from exhaustion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Ready to book your trip?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Mastering Long Routes from Anantapur</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              When exploring <strong>travels in Anantapur</strong> for an outstation trip (such as an Anantapur to Hyderabad/Bangalore shuttle or an exotic destination like Goa or Araku Valley), the mechanical integrity of the vehicles matters far more than during short city hops. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> provides an absolutely premium service for long haul journeys.
            </p>
            <p className="text-deep-navy/80 leading-relaxed mb-6">
              We guarantee perfectly serviced AC engines, deep-cleaned interiors, premium push-back reclining capabilities, and dual drivers for any journey spanning multi-day overnight operations to ensure absolutely robust safety. <a href="/contact" className="text-gold hover:underline">Submit your itinerary here today to get started.</a>
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Leave Your Long Drive to Us</h3>
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
