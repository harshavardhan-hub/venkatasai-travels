import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Anantapur to Bangalore Airport Bus Transfer for Groups | 2026',
  description: 'Flying out with a massive group? Book a reliable Anantapur to Bangalore airport bus transfer via Venkata Sai Tours to ensure you never miss a flight.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/anantapur-airport-transfer-bus-rental',
  },
}

export default function AirportTransferBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to book an Anantapur to Bangalore airport bus transfer?",
        "acceptedAnswer": { "@type": "Answer", "text": "For groups needing airport transport, call 9440440969 to book a punctual tempo traveller or medium bus from Anantapur directly to Kempegowda International Airport (BLR)." }
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
              <span className="text-cream/80">Airport Transit</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Transit</span>
              <span className="text-xs text-cream/40">March 2026 · 5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Anantapur to Bangalore <span className="text-gold">Airport Bus Transfer</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              When international flights are on the line, punctuality is non-negotiable. Travel efficiently with Anantapur’s top-rated fleet.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Have an international flight to catch?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Never Miss a Connection</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              If an entire corporate team or massive joint family is heading from AP to Kempegowda International Airport (BLR), securing a dedicated <strong>bus rental in Anantapur</strong> exclusively for the transfer is incredibly efficient. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> dominates airport logistics by guaranteeing vehicle dispatch times rigidly.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Massive Luggage Capacity</h3>
                <p className="text-deep-navy/70">Unlike standard cabs, our 14-seater tempo travellers and 30-seater medium buses have enormous trunk and dual-undercarriage spaces, absorbing heavy international travel bags with absolutely no cabin clutter.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Strategic Drops</h3>
                <p className="text-deep-navy/70">We handle the grueling 4-hour NH44 stretch directly, delivering your group right at the airport departure gates without multiple stressful vehicle swaps. <a href="/contact" className="text-gold hover:underline">Request an instant quote today.</a></p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Book Your Group Flight Transport</h3>
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
