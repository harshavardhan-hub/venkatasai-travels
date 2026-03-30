import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Top 5 Places to Visit Near Anantapur by Bus | 2026 Tours',
  description: 'Looking for places to visit near Anantapur? Book a bus from Anantapur to Tirupati, Mantralayam, and Shirdi for an unforgettable pilgrimage.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/places-to-visit-near-anantapur',
  },
}

export default function PlacesNearAnantapurBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best places to visit near Anantapur by bus?",
        "acceptedAnswer": { "@type": "Answer", "text": "The top places to visit near Anantapur by bus include Tirupati, Mantralayam, Shirdi, and Lepakshi. Venkata Sai Tours offers packages to all these locations." }
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
              <span className="text-cream/80">Places Near Anantapur</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Tourism</span>
              <span className="text-xs text-cream/40">March 2026 · 7 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Top Places to Visit Near <span className="text-gold">Anantapur</span> by Bus
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Explore the rich heritage and immense spiritual significance of South India by booking a tour from Anantapur to these breathtaking locations.
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
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Unforgettable Getaways</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Because of its central location in Andhra Pradesh, <strong>Anantapur</strong> serves as the perfect starting point for many iconic destinations. By teaming up with <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>, you get premium coaches to get there comfortably.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">1. Tirupati Balaji</h3>
                <p className="text-deep-navy/70">A 4-hour drive. We offer customized weekend day packages to streamline your darshan.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">2. Mantralayam</h3>
                <p className="text-deep-navy/70">Just a few hours away, it is the perfect 1-day retreat for families seeking spiritual solace.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">3. Shirdi</h3>
                <p className="text-deep-navy/70">Our 50-seater luxury coaches provide the ultimate overnight comfort for the long drive to Maharashtra.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">4. Lepakshi</h3>
                <p className="text-deep-navy/70">Famous for its historic temple architecture, easily reachable via a <a href="/contact" className="text-gold hover:underline">mini bus hire</a>.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Start Your Journey Today</h3>
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
