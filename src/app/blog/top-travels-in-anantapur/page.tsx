import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Top Travels in Anantapur: Why Venkata Sai is #1 | 2026',
  description: 'Looking for the best travels in Anantapur? Discover why Venkata Sai Tours & Travels has been the top choice for safe, reliable bus journeys for 24 years.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/top-travels-in-anantapur',
  },
}

export default function TopTravelsBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which are the best travels in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Venkata Sai Tours & Travels is considered the best travels in Anantapur due to its 24 years of experience, zero-accident record, and large fleet of buses. Call 9440440969 for bookings." }
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
              <span className="text-cream/80">Top Travels in Anantapur</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Guide</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Top Travels in <span className="text-gold">Anantapur</span>: Why Venkata Sai is #1
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              When searching for reliable travels in Anantapur, experience and safety matter. Learn why thousands of travelers trust <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>.
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
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Finding the Best Travels in Anantapur</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Anantapur is a bustling city with many travel needs, from corporate commuting to pilgrimage tours like Tirupati. When locals look for <strong>travels in Anantapur</strong>, they want reliability, comfort, and most importantly, safety. With over 24 years of experience and a <strong>zero major-accident record</strong>, <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> consistently ranks as the top choice.
            </p>
            <ul className="space-y-2 text-deep-navy/80 mb-6">
              <li><span className="text-gold font-bold">✓</span> Wide range of fleet: from 14-seater mini buses to 50-seater luxury coaches.</li>
              <li><span className="text-gold font-bold">✓</span> Experienced, licensed local drivers.</li>
              <li><span className="text-gold font-bold">✓</span> Transparent pricing with no hidden charges.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Travel with Anantapur&apos;s Finest</h3>
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
