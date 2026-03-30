import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Anantapur Bus Rental FAQs — Everything You Need to Know | 2026',
  description: 'Your top questions answered! Searching for a bus in Anantapur? Here is the ultimate FAQ for hiring safe buses through Venkata Sai Travels.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/anantapur-bus-rental-faqs',
  },
}

export default function BusFaqBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are there any hidden charges when hiring a bus in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "At Venkata Sai Travels, we believe in 100% transparency. Our rate includes tolls, taxes, and driver bata entirely up front, leaving no hidden fees." }
      },
      {
        "@type": "Question",
        "name": "Can I book a bus in Anantapur instantly?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, just dial 9440440969 for instant availability and booking confirmation for any vehicle type across Anantapur." }
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
              <span className="text-cream/80">Bus Rental FAQs</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">FAQ</span>
              <span className="text-xs text-cream/40">March 2026 · 4 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Anantapur Bus Rental <span className="text-gold">FAQs</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Find immediate answers to all your common questions regarding renting a bus in Anantapur — simplified and straight to the point.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Cannot find your answer here?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Directly ask our support team at <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar). We are available to help 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">message us →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">Are there any hidden charges when hiring a bus in Anantapur?</h3>
                <p className="text-deep-navy/70">At <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>, we believe in 100% transparency. Our rate includes tolls, taxes, and driver bata entirely up front, leaving no hidden fees or surprise last-minute additions.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">Can I book a bus in Anantapur instantly?</h3>
                <p className="text-deep-navy/70">Yes! Just dial 9440440969 for instant availability and booking confirmation for any vehicle type across Anantapur utilizing our vast logistical network.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                <h3 className="font-bold text-deep-navy text-xl mb-2">What if there is a breakdown?</h3>
                <p className="text-deep-navy/70">Since our priority for any bus rental in Anantapur is absolute security, we perform meticulous servicing beforehand. On the rare off-chance of mechanical difficulty, our 24/7 backup network ensures a swift vehicle replacement without delaying your itinerary. <a href="/contact" className="text-gold hover:underline">Contact us</a> for more details.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Experience Excellence Today</h3>
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
