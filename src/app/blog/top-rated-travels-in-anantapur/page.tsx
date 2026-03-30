import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Why Venkata Sai is the Top Rated Travels in Anantapur | 2026',
  description: 'Looking for the best travels in Anantapur? With a 24-year zero-accident record, discover why Venkata Sai is uniformly top-rated for all bus rentals.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/top-rated-travels-in-anantapur',
  },
}

export default function TopRatedTravelsBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the top-rated travels in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Venkata Sai Tours & Travels holds the title as the top-rated travels in Anantapur thanks to their massive fleet, 24 years operating experience, and perfect safety record." }
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
              <span className="text-cream/80">Top Rated Travels</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Guide</span>
              <span className="text-xs text-cream/40">March 2026 · 5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Why Venkata Sai is the <span className="text-gold">Top Rated Travels</span> in Anantapur
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              When searching for travels in Anantapur, brand trust is everything. Here is why we have dominated the transportation industry for over two decades.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Rely on the absolute best.</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">24 Years of Premium Service</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              A quick search for <strong>travels in Anantapur</strong> will yield hundreds of small operators—but only one <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>. Our formula for remaining the highest-rated service in Anantapur revolves directly around extreme safety standards and vast fleet availability.
            </p>
            <ul className="space-y-4 text-deep-navy/80 mb-6">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Total Pricing Transparency</span> We never slip in sneaky fuel surcharges post-booking. Our quotes are final.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Zero-Accident History</span> Providing incredible assurance to families, schools, and corporate HRs seeking safe travel.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Immediate Backup Availability</span> With our massive internal fleet, any rare mechanical problem triggers a guaranteed rapid substitute to safeguard your schedule. <a href="/contact" className="text-gold hover:underline">Experience this safety net yourself.</a>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Travel with the Best in AP</h3>
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
