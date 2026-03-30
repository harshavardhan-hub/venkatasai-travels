import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Mini Bus Rental in Anantapur for Family Picnics | 2026',
  description: 'Looking for a mini bus rental in Anantapur? Perfect for 14-20 passengers, tempo travellers offer great comfort for family outings. Book instantly.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/mini-bus-rental-family-picnics-anantapur',
  },
}

export default function MiniBusPicnicBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a mini bus rental in Anantapur good for family picnics?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, a mini bus rental in Anantapur is the absolutely perfect, cost-effective choice for medium families consisting of 14-20 individuals heading on a 1-day trip." }
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
              <span className="text-cream/80">Family Mini Bus Rental</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Outings</span>
              <span className="text-xs text-cream/40">March 2026 · 5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Mini <span className="text-gold">Bus Rental in Anantapur</span> for Family Picnics
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Why coordinate three separate cars when you can travel together? Find out why mini buses are the ultimate family transport solution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Planning a family gathering?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant family bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">The Perfect Picnic Transport</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              A <strong>mini bus rental in Anantapur</strong> (often referred to as a Tempo Traveller) is the optimal choice when your family size suddenly outgrows a typical SUV. Rather than splitting the family into multiple cars—which ruins the collective bonding experience—<a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> provides an elegant, unified solution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">Cost Effective</h3>
                <p className="text-deep-navy/70">The combined fuel and toll costs of driving 3-4 separate cars often outweighs the single per-km fare of a dedicated mini bus.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">Stress-Free Travel</h3>
                <p className="text-deep-navy/70">No one in the family has to exhaust themselves driving. Our professional drivers navigate the traffic while you enjoy quality time.</p>
              </div>
            </div>
            <p className="text-deep-navy/80 leading-relaxed"><a href="/contact" className="text-gold hover:underline">Book your family outing today</a> and create seamless memories.</p>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Grab Your Mini Bus Fast</h3>
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
