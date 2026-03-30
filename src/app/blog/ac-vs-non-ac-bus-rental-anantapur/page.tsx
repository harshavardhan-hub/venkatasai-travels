import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'AC vs Non-AC Bus Rental in Anantapur: Which to Choose? | 2026',
  description: 'Unsure between AC or Non-AC bus rental in Anantapur? Compare pricing, comfort, and journey profiles to make the smartest booking with Venkata Sai Travels.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/ac-vs-non-ac-bus-rental-anantapur',
  },
}

export default function AcVsNonAcBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I choose AC or Non-AC bus rental in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "For journeys exceeding 2 hours or travelling in summer, an AC bus rental in Anantapur is highly recommended. Non-AC is suitable for short winter trips." }
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
              <span className="text-cream/80">AC vs Non-AC Comparison</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Comparison</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              AC vs Non-AC <span className="text-gold">Bus Rental in Anantapur</span>: Which is Better?
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Deciding the tier of transport for a large group can be tricky. Here is exactly how to choose the right bus for your budget and comfort.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Need help choosing?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for a free consultation. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">request a quote →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Making the Right Choice</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              When finalizing a <strong>bus rental in Anantapur</strong> via <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a>, one of the most critical factors is deciding between Air-Conditioned (AC) and standard Non-AC coaches.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">When to Choose AC Buses</h3>
                <p className="text-deep-navy/70">AC buses are basically mandatory during Anantapur&apos;s blistering summer months (March - July). They are also highly recommended for any journey exceeding 4 hours (like Hyderabad or Bangalore routes) because closed windows insulate the cabin from highway noise and exhaust pollution.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">When to Choose Non-AC Buses</h3>
                <p className="text-deep-navy/70">If you are working with an incredibly tight budget on a short 1-to-2 hour daytime trip during winter months (December), a Non-AC vehicle offers significant cost savings without unbearable discomfort. <a href="/contact" className="text-gold hover:underline">Contact us to compare prices.</a></p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Lock in Your Bus Type</h3>
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
