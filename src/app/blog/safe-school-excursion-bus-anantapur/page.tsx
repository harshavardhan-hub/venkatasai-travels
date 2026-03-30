import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Safe School Excursion Bus Rentals in Anantapur | 2026',
  description: 'Need a safe bus in Anantapur for school excursions? Discover our specialized school-trip fleet with a zero-accident record. Call Venkata Sai Tours.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/safe-school-excursion-bus-anantapur',
  },
}

export default function SchoolExcursionBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to hire a safe excursion bus in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Hiring a safe excursion bus in Anantapur is easy. Venkata Sai Tours & Travels holds a 24-year zero-accident record, offering GPS-tracked 50-seaters for school trips." }
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
              <span className="text-cream/80">School Excursions</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Education</span>
              <span className="text-xs text-cream/40">March 2026 · 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Safe School Excursion <span className="text-gold">Bus in Anantapur</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              When it comes to children, safety is the only priority. Learn why we are the #1 trusted choice for daily transport and excursion buses in Anantapur.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl mb-8">
            <p className="font-bold text-deep-navy">📞 Ready to book a secure trip?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold hover:underline">9440440969</a> (Y.N. Prasad) or <a href="tel:+919440737138" className="text-gold font-bold hover:underline">9440737138</a> (Y.N. Kumar) for educational bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold hover:underline">contact us →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Zero-Accident Safety Record</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Finding a safe <strong>bus in Anantapur</strong> for educational tours doesn&apos;t need to be difficult. <a href="https://www.venkatasaitravels.com" className="text-gold hover:underline font-semibold">Venkata Sai Tours & Travels</a> routinely provides extensive services to major colleges and schools across Anantapur utilizing our premium 50-seater and 30-seater safety-optimized buses.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">GPS Tracking Security</h3>
                <p className="text-deep-navy/70">Our modern fleet incorporates live tracking systems, allowing school administrations to monitor exact journey variables on field trips. <a href="/contact" className="text-gold hover:underline">Book a reliable bus today.</a></p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5">
                <h3 className="font-bold text-deep-navy text-lg mb-2">Dedicated Veterans</h3>
                <p className="text-deep-navy/70">We exclusively deploy senior drivers with exemplary local routing knowledge and impeccable zero-incident track records for every student excursion.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Schedule Your Educational Tour</h3>
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
