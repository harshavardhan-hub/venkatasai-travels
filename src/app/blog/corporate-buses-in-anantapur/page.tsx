import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Corporate Buses in Anantapur: Employee HR Transport | 2026',
  description: 'Searching for corporate buses in Anantapur? Venkata Sai Tours offers long-term and short-term secure employee transport services. Request a quote.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/corporate-buses-in-anantapur',
  },
}

export default function CorporateBusBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are corporate buses in Anantapur available for daily commutes?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer contract-based corporate buses in Anantapur for daily employee pickups/drop-offs and corporate retreats. Call 9440440969 to ask about long-term rentals." }
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
              <span className="text-cream/80">Corporate Bus Rentals</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Corporate</span>
              <span className="text-xs text-cream/40">March 2026 · 5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Corporate <span className="text-gold">Buses in Anantapur</span>: Safe Employee Transport
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              We provide secure, reliable, and comfortable corporate transport solutions for companies operating in and around Anantapur district.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Ready to connect?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for HR transport contracts. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">request a corporate quote →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Reliable Employee Commutes</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              With growing industrial sectors and IT parks expanding in the region, securing dependable <strong>buses in Anantapur</strong> for your staff is critical to maintaining high productivity and employee satisfaction. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> provides the absolute best in B2B service.
            </p>
            <ul className="space-y-2 text-deep-navy/80 mb-6 font-medium">
              <li><span className="text-gold font-bold mr-2">1.</span> Strict Timeliness — Our drivers operate on strict schedules to ensure your staff reaches the workplace right on time.</li>
              <li><span className="text-gold font-bold mr-2">2.</span> Highest Safety Standards — Zero major-accidents over 24 years.</li>
              <li><span className="text-gold font-bold mr-2">3.</span> Well-maintained AC Vehicles — Ensuring your staff arrives refreshed.</li>
              <li><span className="text-gold font-bold mr-2">4.</span> GPS Tracking — Enabling HR administration to monitor routes effectively.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Discuss Corporate Contracts</h3>
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
