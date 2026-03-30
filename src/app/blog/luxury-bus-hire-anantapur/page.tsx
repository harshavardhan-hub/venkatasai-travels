import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Luxury Bus Hire in Anantapur for Long Journeys | 2026',
  description: 'Traveling far? Book a luxury bus hire in Anantapur with AC, push-back seats, and 4K video. Maximum comfort for massive groups via Venkata Sai Tours.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/luxury-bus-hire-anantapur',
  },
}

export default function LuxuryBusBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to arrange a luxury bus hire in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Contact Venkata Sai Tours at 9440440969 to easily book a 50-seater luxury bus hire in Anantapur for comfortable outstation trips." }
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
              <span className="text-cream/80">Luxury Bus Hire</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Premium Transport</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Luxury <span className="text-gold">Bus Hire in Anantapur</span> for Long Journeys
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Do not compromise on comfort. Discover why upgrading to a luxury 50-seater is the best decision for any massive group trip starting from Anantapur.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Ready for a premium experience?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">The VIP Standard</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              A <strong>luxury bus hire in Anantapur</strong> fundamentally transforms a tiring journey into a mobile vacation. When you book our ultra-modern 50-seater fleets via <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>, you unlock premium tier road dynamics.
            </p>
            <ul className="space-y-4 text-deep-navy/80 mb-6">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Total Climate Control</span> Multi-vent AC systems guarantee cooling for all passengers, regardless of the scorching Andhra sun.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Push-back Seating</span> Recline to a near-flat profile to easily sleep during overnight transit routing.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">4K Theatre Systems</span> Enjoy crystal clear video systems installed with immersive audio to entertain the masses locally.
              </li>
            </ul>
            <p className="text-deep-navy/80 leading-relaxed"><a href="/contact" className="text-gold hover:underline">Secure your luxury bus today.</a> Our top-end vehicles book out quickly during peak wedding and tourist seasons.</p>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Reserve Anantapur&apos;s Finest</h3>
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
