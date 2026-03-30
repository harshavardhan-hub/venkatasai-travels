import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Anantapur to Srisailam Bus Package: Tourist Planning | 2026',
  description: 'Traveling from Anantapur to Srisailam? Book the perfect private bus in Anantapur for your Srisailam trip. Venkata Sai Tours offers 14 to 50 seater coaches.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/anantapur-to-srisailam-bus-package',
  },
}

export default function AnantapurToSrisailamBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How far is Srisailam from Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Srisailam is an approximate 7 hour drive from Anantapur. Booking a comfortable, safe bus in Anantapur through Venkata Sai will ease the journey along the ghat roads." }
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
              <span className="text-cream/80">Pilgrimage</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Tourism</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Anantapur to Srisailam <span className="text-gold">Bus Package</span>: Expert Planning
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Navigate the winding Srisailam ghat roads safely by renting a high-tier AC coach entirely for your group directly from Anantapur.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Securing transport to Srisailam?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant outstation bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">get a fast quote →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Conquer The Ghat Roads With Ease</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Taking an entire extended family on a spiritual getaway from Anantapur to Srisailam is an incredibly beautiful venture, but it involves traversing difficult forest ghats and navigating approximately 7 hours of road time. By securing a premium <strong>bus in Anantapur</strong> through <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>, you offload all routing anxiety to seasoned veteran drivers.
            </p>
            <p className="text-deep-navy/80 leading-relaxed mb-6">
              Our massive suspension systems handle the forest terrain smoothly so parents and the elderly can rest instead of complaining of motion sickness. Let our 4K video entertainment systems handle the kids during transit. <a href="/contact" className="text-gold hover:underline">Contact us today to arrange your Srisailam bus rental package.</a>
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Book Your Private Coach Here</h3>
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
