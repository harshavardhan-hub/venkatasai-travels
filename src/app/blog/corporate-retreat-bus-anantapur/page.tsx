import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'How to Plan a Corporate Retreat from Anantapur by Bus | 2026',
  description: 'Taking the company on a trip? Rent a luxurious corporate bus in Anantapur with Venkata Sai Travels to manage staff transport properly and safely.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/corporate-retreat-bus-anantapur',
  },
}

export default function CorporateRetreatBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I hire a premium bus in Anantapur for corporate retreats?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! Venkata Sai Travels provides top-tier luxury AC coaches specifically designed for comfortable HR and corporate retreat transport from Anantapur." }
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
              <span className="text-cream/80">Corporate Retreats</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">B2B</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Plan a Corporate Retreat from <span className="text-gold">Anantapur</span> by Bus
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Simplify corporate event planning. Ensure your employees arrive safely, happily, and exactly on schedule with our premium fleet.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Discuss B2B Transport Models</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for instant outstation bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">request an HR quote →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Streamline B2B Logistics</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Managing a 50+ person staff outing out of the city is fraught with delays if HR does not proactively secure a unified <strong>corporate bus rental in Anantapur</strong>. Partnering early with <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> simplifies the equation rapidly.
            </p>
            <p className="text-deep-navy/80 leading-relaxed mb-6">
              Our massive 50-seater and 30-seater grids easily allow you to group employees logically, ensuring that everybody begins bonding immediately during the highway transit under the steady pulse of top-tier AC systems. <a href="/contact" className="text-gold hover:underline">Organize your upcoming company trip here easily.</a> We have handled transport for heavy-weight regional corporations uniformly without error.
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Execute The Perfect Retreat</h3>
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
