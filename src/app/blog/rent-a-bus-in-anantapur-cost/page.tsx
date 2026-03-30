import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Rent a Bus in Anantapur: 2026 Costs & Important Tips',
  description: 'Want to rent a bus in Anantapur? Check out the latest transparent per-km prices for mini, medium, and luxury buses in Anantapur for safe trips.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/rent-a-bus-in-anantapur-cost',
  },
}

export default function RentBusBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to rent a bus in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "The cost to rent a bus in Anantapur varies primarily by bus size and distance, typically calculated via a per-km rate. Call Venkata Sai Tours at 9440440969 for accurate pricing." }
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
              <span className="text-cream/80">Bus Rental Costs</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Pricing</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Rent a Bus in <span className="text-gold">Anantapur</span>: Current Costs & Rates
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Understand the pricing factors and get the most transparent, affordable quotes when you need to rent a bus in Anantapur for your group.
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
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Pricing Breakdown: Renting a Bus in Anantapur</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              If you&apos;re planning to <strong>rent a bus in Anantapur</strong>, you will usually be charged on a per-kilometer basis along with driver bata (allowance) and potential toll fees. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> offers full transparency up front so you never have to worry about hidden surprises.
            </p>
            <ul className="space-y-4 text-deep-navy/80 mb-6">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Mini Bus Rental</span> Ideal for quick trips. Base prices are highly affordable and perfect for tight budgets catering to 14-18 people.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Medium Bus Rental</span> The best value strictly based on per-head averages for groups up to 30.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Luxury Bus Rental</span> While carrying the highest absolute base cost, renting a 50-seater bus practically splits the cost down to very cheap rates for every individual onboard, making massive journeys cost-effective.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Get an Instant Quote</h3>
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
