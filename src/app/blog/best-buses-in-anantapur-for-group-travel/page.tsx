import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Best Buses in Anantapur for Group Travel | 2026 Reviews',
  description: 'Find the best buses in Anantapur for group travel! Explore mini buses, multi-axle coaches, and luxury buses with Venkata Sai Tours. Call now.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/best-buses-in-anantapur-for-group-travel',
  },
}

export default function BestBusesBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I find the best buses in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Venkata Sai Tours & Travels offers the best buses in Anantapur, including AC 50-seaters, 30-seater medium buses, and 14-seater tempo travellers." }
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
              <span className="text-cream/80">Best Buses in Anantapur</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Explore</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Best <span className="text-gold">Buses in Anantapur</span> for Group Travel
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Traveling with a big group? We have reviewed the best buses in Anantapur to help you find maximum comfort and safety for your trip.
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
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Discovering the Best Buses in Anantapur</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              When organizing a pilgrimage, corporate retreat, or family gathering, securing the right transportation is essential. The demand for <strong>buses in Anantapur</strong> is high year-round. Here are the top configurations you can hire from <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours</a> to elevate your travel experience.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Luxury 50-Seater Coaches</h3>
                <p className="text-deep-navy/70">These are undoubtedly the best buses in Anantapur for massive groups. Equipped with push-back recliners, superior suspension, and powerful AC systems, they make long journeys effortless.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">4K Audio Video Buses</h3>
                <p className="text-deep-navy/70">For the absolute premium experience, <a href="/contact" className="text-gold hover:underline">book our exclusive 4K entertainment coaches</a>—making any long-distance travel wildly enjoyable for passengers of all ages.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Versatile Medium Buses (30-Seat)</h3>
                <p className="text-deep-navy/70">If your group sits squarely around 25-30 members, the medium bus offers the best of both worlds: robust comfort at a very competitive per-head cost.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Hire Anantapur&apos;s Best Buses</h3>
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
