import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Multi-Axle Bus Rental Services in Anantapur | 2026',
  description: 'Looking for extreme luxury? Book a multi-axle bus rental in Anantapur for unparalleled suspension and superior comfort on extremely long distances.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/multi-axle-bus-rental-anantapur',
  },
}

export default function MultiAxleBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the benefit of a multi-axle bus rental in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "A multi-axle bus provides a third extended axel beneath the coach to actively distribute passenger weight resulting in practically zero road-vibration on highways." }
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
              <span className="text-cream/80">Premium Tech</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Fleet Guide</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Multi-Axle <span className="text-gold">Bus Rental Services</span> in Anantapur
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              When standard transit is insufficient, upgrade to a supreme suspension platform. Here are the perks of booking multi-axle formats.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Seeking premium suspensions?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">receive a high-end quote →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Unparalleled Riding Architecture</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Taking an extended wedding party across states? Guaranteeing passenger comfort means upgrading the mechanical baseline of your coach. A <strong>multi-axle bus rental in Anantapur</strong> provided directly through <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> employs an entirely modified chassis over a standard 50-seater setup.
            </p>
            <p className="text-deep-navy/80 leading-relaxed mb-6">
              The addition of a third load-distributing axle allows multi-axle buses (typically built by Volvo or Scania) to glide over Indian highways. Road-shock is severely dispersed before entering the cabin, meaning passengers in the absolute rear seating row feel zero jolting. <a href="/contact" className="text-gold hover:underline">Book these elite vehicles directly today to secure premium class comfort.</a>
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Acquire Your Multi-Axle Experience</h3>
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
