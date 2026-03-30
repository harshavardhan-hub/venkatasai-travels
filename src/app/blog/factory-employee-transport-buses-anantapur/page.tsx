import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Factory Employee Transport Buses in Anantapur | 2026 Contacts',
  description: 'Searching for factory employee transport buses in Anantapur? Hire Venkata Sai Travels for daily secure commuting contracts tailored for industrial sectors.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/factory-employee-transport-buses-anantapur',
  },
}

export default function FactoryTransportBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Venkata Sai Tours offer factory employee transport buses in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle robust monthly B2B contracts specifically providing secure factory employee transit directly from Anantapur city boundaries." }
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
              <span className="text-cream/80">Industrial Commuting</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">B2B</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Factory Employee Transport <span className="text-gold">Buses in Anantapur</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Lock down robust monthly B2B contracts specifically providing secure factory employee transit directly from Anantapur limits to KIA and broader industrial hubs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Discussing Monthly Logistics?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">request an HR B2B quote →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Streamline Shift Changes</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              With the expansion of industrial park networks surrounding the region, securing dependable <strong>factory employee transport buses in Anantapur</strong> determines whether plant shift schedules remain robust. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> provides strict daily shuttling capability for B2B operations.
            </p>
            <ul className="space-y-4 text-deep-navy/80 mb-6">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Punctual Dispatch Integrity</span> Shift timings are critical. Our regional drivers are fundamentally trained to optimize routes and bypass morning bottlenecks without delays.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Scaled Fleet Solutions</span> Whether your facility needs a 14-seater tempo or a brigade of 50-seater AC coaches, we formulate a transport structure strictly scaled against your worker density. <a href="/contact" className="text-gold hover:underline">Reach out for B2B contracts immediately.</a>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Lock Down B2B Contracts</h3>
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
