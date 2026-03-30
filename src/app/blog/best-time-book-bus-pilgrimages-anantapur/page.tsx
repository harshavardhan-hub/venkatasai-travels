import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Best Time to Book a Bus in Anantapur for Pilgrimages | 2026',
  description: 'Avoid the rush! Learn the best time to book a bus in Anantapur for Tirupati, Shirdi, and Mantralayam pilgrimages. Book with Venkata Sai Tours now.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/best-time-book-bus-pilgrimages-anantapur',
  },
}

export default function BestTimePilgrimageBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is the best time to book a bus in Anantapur for Tirupati?",
        "acceptedAnswer": { "@type": "Answer", "text": "It is best to book a bus in Anantapur at least 2-3 weeks in advance during festival seasons and holidays to ensure vehicle availability." }
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
              <span className="text-cream/80">Pilgrimage Timing</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Pilgrimage</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Best Time to <span className="text-gold">Book a Bus in Anantapur</span> for Pilgrimages
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Do not get caught without transport during peak holy seasons. Master the art of booking your pilgrimage trips in advance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Planning a spiritual retreat?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant blocks. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">reserve online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Navigating the Rush</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Whenever massive temple festivals or major holidays occur, the demand to <strong>book a bus in Anantapur</strong> skyrockets. Because Anantapur serves as a massive junction point for pilgrimages to Tirupati and Karnataka, local fleets drain quickly.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Summer Vacations & Festivals</h3>
                <p className="text-deep-navy/70">During April, May, and major festive months like Dasara and Sankranti, you must contact <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> at least 2 to 3 weeks prior to departure to secure a high-quality AC coach.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Regular Weekends</h3>
                <p className="text-deep-navy/70">Even on standard weekends, it is best practice to <a href="/contact" className="text-gold hover:underline">lock in your vehicle</a> 5-7 days beforehand. This guarantees you receive exactly the 50-seater or 30-seater configuration you need.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Lock in Your Dates</h3>
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
