import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'How to Book a Bus in Anantapur: 2026 Step-by-Step Guide',
  description: 'Want to book a bus in Anantapur easily? Follow our step-by-step guide to rent mini, medium, or luxury buses for any trip. Call Venkata Sai Tours.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/how-to-book-bus-in-anantapur',
  },
}

export default function HowToBookBusBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to book a bus in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "To book a bus in Anantapur, simply call Venkata Sai Tours & Travels at 9440440969. Provide your travel date, destination, and passenger count to receive an instant transparent quote." }
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
              <span className="text-cream/80">Book Bus in Anantapur</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Guide</span>
              <span className="text-xs text-cream/40">March 2026 · 5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              How to <span className="text-gold">Book a Bus in Anantapur</span>: Step-by-Step Guide
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Booking a reliable bus in Anantapur has never been easier. Discover the straightforward steps to getting the perfect bus for your journey.
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
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Steps to Book a Bus in Anantapur</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              If you need to <strong>book a bus in Anantapur</strong> for a family vacation, a school trip, or a corporate event, follow these simple steps to ensure you get the best deal and the safest vehicle:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">1. Determine Your Group Size</h3>
                <p className="text-deep-navy/70">Count your passengers accurately. For 14-18 people, a mini bus is ideal. For 30 people, choose a medium bus. For 40-50+ people, a luxury coach is necessary.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">2. Have Your Itinerary Ready</h3>
                <p className="text-deep-navy/70">Know your exact travel dates, start point in Anantapur, and final destination (e.g. Tirupati, Hyderabad). This helps in calculating the exact per-km pricing.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">3. Reach out to the Experts</h3>
                <p className="text-deep-navy/70">As the highest-rated travels in Anantapur, calling <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> ensures you receive an immediate, transparent quote with absolutely no hidden fees.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Book Your Bus Today</h3>
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
