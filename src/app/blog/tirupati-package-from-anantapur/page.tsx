import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Tirupati Package from Anantapur — Price, Distance & Travel Tips',
  description:
    'Planning a Tirupati trip from Anantapur? Distance: 180 km, 3-4 hours. Best bus package prices and tips. Call Venkata Sai Tours: 9440440969.',
  alternates: {
    canonical: 'https://venkatasaitravels.com/blog/tirupati-package-from-anantapur',
  },
}

export default function TirupatiPackageBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How far is Tirupati from Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Tirupati is approximately 180 km from Anantapur via NH 516. The journey takes 3 to 4 hours by road." }
      },
      {
        "@type": "Question",
        "name": "What is the Tirupati package price from Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Prices vary by group size and bus type. Call Venkata Sai Tours at 9440440969 or 9440737138 for the latest Tirupati package prices from Anantapur." }
      },
      {
        "@type": "Question",
        "name": "Is there a direct bus from Anantapur to Tirupati?",
        "acceptedAnswer": { "@type": "Answer", "text": "Venkata Sai Tours operates private group buses from Anantapur to Tirupati at your preferred departure time with no stops. Call 9440440969 or 9440737138 to book." }
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
              <span className="text-cream/80">Tirupati from Anantapur</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Tour Packages</span>
              <span className="text-xs text-cream/40">March 2024 · 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Tirupati Package from <span className="text-gold">Anantapur</span> — Price, Distance & Tips
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Your complete guide to planning a Tirupati Balaji pilgrimage from Anantapur — distance, time, prices, and expert tips.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">

          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl">
            <p className="font-bold text-deep-navy">📞 Book your Tirupati package from Anantapur!</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold">9440440969</a> or <a href="tel:+919440737138" className="text-gold font-bold">9440737138</a> for group bookings. Available 24/7. Or <a href="/contact" className="text-gold font-bold">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Anantapur to Tirupati — Distance & Travel Time</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Distance", value: "~180 km", sub: "via NH 516" },
                { label: "Travel Time", value: "3–4 Hours", sub: "by road" },
                { label: "Best Departure", value: "4–5 AM", sub: "from Anantapur" },
              ].map((s) => (
                <div key={s.label} className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">{s.label}</p>
                  <p className="text-xl font-serif font-bold text-deep-navy">{s.value}</p>
                  <p className="text-deep-navy/50 text-xs mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-deep-navy/80 leading-relaxed">
              Tirupati is approximately <strong>180 km from Anantapur</strong> via NH 516. The journey takes 
              <strong> 3 to 4 hours</strong>, making it one of the most convenient pilgrimages from Anantapur. 
              Depart at 4 AM and arrive at Tirupati by 7–8 AM for darshan.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Tirupati Package Prices from Anantapur (2024)</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              The <strong>Tirupati package price from Anantapur</strong> depends on group size, bus type, and whether you want accommodation. Here is a typical overview:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm text-sm">
                <thead className="bg-deep-navy text-cream">
                  <tr>
                    <th className="p-4 text-left font-bold">Bus Type</th>
                    <th className="p-4 text-left font-bold">Seats</th>
                    <th className="p-4 text-left font-bold">Package</th>
                    <th className="p-4 text-left font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bus: "Mini Bus / Tempo", cap: "14–18", pkg: "Day Trip", price: "Call for quote" },
                    { bus: "Medium Bus", cap: "30", pkg: "2-Day Package", price: "Call for quote" },
                    { bus: "Luxury Coach", cap: "50", pkg: "Custom", price: "Best group rates" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-cream/30" : "bg-white"}>
                      <td className="p-4 font-semibold text-deep-navy">{row.bus}</td>
                      <td className="p-4 text-deep-navy/70">{row.cap}</td>
                      <td className="p-4 text-deep-navy/70">{row.pkg}</td>
                      <td className="p-4 font-bold text-gold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-deep-navy/60 text-sm italic">* Call <a href="tel:+919440440969" className="text-gold font-bold">9440440969</a> / <a href="tel:+919440737138" className="text-gold font-bold">9440737138</a> for exact group pricing. Or <a href="/contact" className="text-gold font-bold">fill our form →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">What&apos;s Included in Our Tirupati Package from Anantapur?</h2>
            <div className="space-y-3 mb-6">
              {[
                "Round-trip bus transport from Anantapur to Tirupati (AC or non-AC)",
                "Experienced driver familiar with the Tirupati route",
                "Push-back seats with ample luggage space",
                "Optional: TTD accommodation or hotel assistance in Tirupati",
                "Optional: Darshan assistance and queue guidance at the temple",
                "Flexible departure time (4 AM, 5 AM, or your preferred time)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-black/5">
                  <span className="text-gold font-bold">✓</span>
                  <span className="text-deep-navy/80">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Best Time to Travel Anantapur to Tirupati</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { season: "🌬️ Oct–Feb (Winter)", rec: "Best time. Pleasant weather, manageable crowds on weekdays.", good: true },
                { season: "☀️ Mar–May (Summer)", rec: "Hot and very crowded. Book your bus from Anantapur well in advance.", good: false },
                { season: "🌧️ Jun–Sep (Monsoon)", rec: "Moderate weather. Check temple timings before booking.", good: true },
                { season: "🎉 Festival Seasons", rec: "Brahmotsavam, Dussehra — highest crowds. Book 3–4 weeks ahead from Anantapur.", good: false },
              ].map((item) => (
                <div key={item.season} className={`p-5 rounded-2xl border ${item.good ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
                  <p className="font-bold text-deep-navy mb-1">{item.season}</p>
                  <p className="text-deep-navy/70 text-sm">{item.rec}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How far is Tirupati from Anantapur?", a: "180 km via NH 516. Drive time is 3–4 hours." },
                { q: "What is the Tirupati package price from Anantapur?", a: "Prices vary. Call 9440440969 or 9440737138 for the latest group pricing." },
                { q: "Can I book just bus transport for Tirupati from Anantapur?", a: "Yes! Book round-trip bus only, or a full package with accommodation. We customise for your group." },
                { q: "Is there a direct bus from Anantapur to Tirupati?", a: "Yes — we operate private group buses with no stops, at your preferred departure time." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                  <h3 className="font-bold text-deep-navy mb-2">{item.q}</h3>
                  <p className="text-deep-navy/70">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Book Your Tirupati Package from Anantapur</h3>
            <p className="text-cream/70 mb-6">Call Now for Instant Booking — Available 24/7. Limited Slots!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="gold" size="lg" className="text-lg px-8 py-5 h-auto">
                <Phone className="mr-3 w-5 h-5"/> Book Now — 9440440969 / 9440737138
              </Button>
              <Button href="tel:+919440737138" variant="outline" size="lg" className="text-lg px-8 py-5 h-auto border-cream/30 text-cream hover:bg-gold hover:text-deep-navy hover:border-gold">
                <Phone className="mr-3 w-5 h-5"/> Y.N. Kumar: 9440737138
              </Button>
            </div>
          </AnimatedSection>

          <div className="pt-4 border-t border-black/10">
            <p className="font-semibold text-deep-navy/60 text-sm uppercase tracking-widest mb-3">Also Read</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/best-bus-rental-anantapur" className="flex items-center gap-2 text-gold hover:underline font-semibold">Best Bus Rental Guide <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/blog/mini-bus-vs-big-bus" className="flex items-center gap-2 text-gold hover:underline font-semibold">Mini Bus vs Big Bus <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/tour-packages" className="flex items-center gap-2 text-gold hover:underline font-semibold">All Tour Packages <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
