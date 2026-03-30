import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Top Tourist Places Near Anantapur (and How to Get There) | 2026',
  description: 'Looking for a weekend getaway? Discover the top tourist places near Anantapur. Book a bus from Anantapur with Venkata Sai Tours to visit Lepakshi, Gandikota, and more.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/top-10-tourist-places-near-anantapur',
  },
}

export default function TouristPlacesNearAnantapurBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best tourist places to visit near Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "The top tourist spots near Anantapur include Lepakshi, Gandikota, and Belum Caves. The easiest way to visit them as a group is to book an outstation bus from Anantapur with Venkata Sai Travels." }
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
              <span className="text-cream/80">Tourist Places</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Explore</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Top Tourist Places Near <span className="text-gold">Anantapur</span> (And How to Get There)
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Plan the perfect weekend excursion from Anantapur. See historic temples, beautiful canyons, and incredible ancient architecture effortlessly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Ready to organize your getaway?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant outstation bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Incredible Weekend Escapes</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              If you live in Anantapur or are visiting, you are surrounded by some of the most spectacular tourist spots in Andhra Pradesh. But getting there safely with a group requires a reliable <strong>bus in Anantapur</strong>. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> organizes the best coaches for these stunning nearby routes:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">1. Lepakshi</h3>
                <p className="text-deep-navy/70">A breathtaking 16th-century temple complex famous for its hanging pillar. Barely 2 hours away, making it a perfect one-day trip when renting a rapid <a href="/contact" className="text-gold hover:underline">Tempo Traveller</a>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">2. Gandikota (The Grand Canyon of India)</h3>
                <p className="text-deep-navy/70">Located around 3 hours from Anantapur, this gorge is an absolute must-visit for sunset photography. Our 50-seater buses frequently transport large college trips here.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">3. Belum Caves</h3>
                <p className="text-deep-navy/70">The second longest cave system on the Indian subcontinent is an easy, air-conditioned bus ride from the city.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Explore With Venkata Sai Transport</h3>
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
