import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Industrial Visit Bus Rental in Anantapur for Colleges | 2026',
  description: 'Need to coordinate an engineering industrial visit? Rent a 50-seater AC bus in Anantapur perfectly suited for safe student travel to Bangalore or Hyderabad.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/industrial-visit-bus-rental-anantapur',
  },
}

export default function IndustrialVisitBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to arrange an industrial visit bus rental in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "For engineering and college industrial visits (IVs), call Venkata Sai Tours at 9440440969 to rent a 50-seater AC coach fully equipped for outstation travel." }
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
              <span className="text-cream/80">Industrial Visits</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Universities</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Industrial Visit <span className="text-gold">Bus Rental in Anantapur</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              When engineering students head to Bangalore or Hyderabad for corporate exposure, safety is paramount. Secure an industrial visit bus rental in Anantapur you can trust.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Organizing an IV for your department?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Dedicated Transport for Engineering Students</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Taking an entire faculty and fifty students on an extensive <strong>industrial visit</strong> to a high-tech facility in neighboring states requires incredible logistical tracking. By coordinating your <strong>bus rental in Anantapur</strong> directly through <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>, college administrations drop the entire burden of transit security onto our 24 years of zero-accident experience.
            </p>
            <ul className="space-y-4 text-deep-navy/80 mb-6">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">GPS Tracket Fleet</span> Head-of-Departments can proactively monitor the bus route as the group maneuvers deeply into Bangalore.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Unmatched Capacity</span> A single premium 50-seater luxury coach fits a standard engineering batch entirely, letting them socialize freely.
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                <span className="font-bold block text-lg mb-1">Toll & Inter-State Tax Ready</span> We process all border documentation, minimizing frustrating checkpoint halts along NH44. <a href="/contact" className="text-gold hover:underline">Get your custom IV package today.</a>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Schedule Your Department&apos;s Transport</h3>
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
