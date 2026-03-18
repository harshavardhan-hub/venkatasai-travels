import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Mini Bus vs Big Bus — Which is Best for Your Group? | Anantapur',
  description:
    'Mini bus hire or big bus rental in Anantapur — which is right for your group? Expert comparison of seats, price, comfort & use cases. Call Venkata Sai Tours: 9440440969.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/blog/mini-bus-vs-big-bus',
  },
}

export default function MiniBusVsBigBusBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I hire a mini bus or big bus for my group from Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "For groups of 8–18, a mini bus or tempo traveller is ideal. For 20–30 people, choose a medium bus. For 40+ people, go for a 50-seat luxury coach. Call Venkata Sai Tours at 9440440969 or 9440737138 for a recommendation based on your group size." }
      },
      {
        "@type": "Question",
        "name": "Is mini bus hire cheaper than big bus in Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, a mini bus hire in Anantapur is less expensive in absolute terms than a big bus. However, if your group is large, the per-person cost of a big bus can be lower. Call 9440440969 or 9440737138 for a comparison quote." }
      },
      {
        "@type": "Question",
        "name": "What is the best bus for a Tirupati pilgrimage from Anantapur?",
        "acceptedAnswer": { "@type": "Answer", "text": "For small families (up to 18), a mini bus or tempo traveller is perfect for Tirupati from Anantapur. For groups of 25–30, the medium bus is ideal. For 40+ pilgrims, the 50-seat luxury coach provides the most comfort." }
      }
    ]
  }

  const comparisonData = [
    { feature: "Capacity", mini: "14–18 passengers", big: "40–50 passengers" },
    { feature: "Best for", mini: "Families, small groups", big: "Large groups, events" },
    { feature: "Ideal trips", mini: "Local, Tirupati, picnics", big: "Pilgrimages, weddings, conferences" },
    { feature: "Comfort", mini: "Compact, good AC", big: "Maximum, push-back recliners" },
    { feature: "Maneuverability", mini: "Excellent — city & hills", big: "Good — highways preferred" },
    { feature: "Per-group cost", mini: "Lower absolute cost", big: "Lower per-person for big groups" },
    { feature: "Entertainment", mini: "Music system", big: "4K AV system available" },
    { feature: "Luggage space", mini: "Moderate", big: "Large undercarriage storage" },
  ]

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
              <span className="text-cream/80">Mini Bus vs Big Bus</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Travel Tips</span>
              <span className="text-xs text-cream/40">March 2024 · 7 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Mini Bus vs Big Bus: <span className="text-gold">Which is Best</span> for Your Group?
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Not sure whether to hire a mini bus or big bus from Anantapur? This detailed comparison will help you choose the perfect vehicle for your trip.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">

          <AnimatedSection className="p-6 bg-gold/10 border border-gold/30 rounded-2xl">
            <p className="font-bold text-deep-navy">📞 Not sure which bus to book?</p>
            <p className="text-deep-navy/70 text-sm mt-1">Call <a href="tel:+919440440969" className="text-gold font-bold">9440440969</a> or <a href="tel:+919440737138" className="text-gold font-bold">9440737138</a> and our team will recommend the best option. Or <a href="/contact" className="text-gold font-bold">book online →</a></p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">The Quick Answer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-2 border-gold/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-deep-navy mb-3">🚐 Choose Mini Bus / Tempo Traveller if:</h3>
                <ul className="space-y-2 text-deep-navy/70">
                  {["Your group is 8–18 people","You need a quick Tirupati day trip","You are traveling through city roads or hills","Budget is a primary concern","You need door-to-door service in Anantapur"].map((i, idx) => (
                    <li key={idx} className="flex items-center gap-2"><span className="text-gold">✓</span> {i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-deep-navy rounded-2xl p-6 text-cream">
                <h3 className="text-xl font-bold text-gold mb-3">🚌 Choose Big Bus (40–50 Seat) if:</h3>
                <ul className="space-y-2 text-cream/80">
                  {["Your group is 25–50+ people","You are traveling long-distance from Anantapur","You need luggage space for multi-day trips","You want push-back recliners for comfort","It's a wedding or large corporate event"].map((i, idx) => (
                    <li key={idx} className="flex items-center gap-2"><span className="text-gold">✓</span> {i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Side-by-Side Comparison: Mini Bus vs Big Bus in Anantapur</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm text-sm">
                <thead className="bg-deep-navy text-cream">
                  <tr>
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-left font-bold">🚐 Mini Bus / Tempo</th>
                    <th className="p-4 text-left font-bold">🚌 Big Bus (40–50)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-cream/30" : "bg-white"}>
                      <td className="p-4 font-bold text-deep-navy">{row.feature}</td>
                      <td className="p-4 text-deep-navy/70">{row.mini}</td>
                      <td className="p-4 text-deep-navy/70">{row.big}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Mini Bus Hire in Anantapur — When It&apos;s the Right Choice</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              A <strong>mini bus hire in Anantapur</strong> (14–18 seats) is the most popular choice for small groups. 
              It&apos;s affordable, manoeuvrable in city traffic, and perfect for family picnics, airport transfers, 
              and short pilgrimages to <Link href="/tour-packages#pilgrimage" className="text-gold hover:underline">Tirupati and Mantralayam</Link> from Anantapur.
            </p>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              Our <Link href="/mini-bus" className="text-gold hover:underline font-semibold">mini buses and tempo travellers</Link> come 
              with AC, music systems, GPS tracking, and experienced drivers. They are ideally suited for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {["Family outings from Anantapur", "School batch day trips", "Airport transfers — Hyderabad, Bangalore", "Local city travel in Anantapur", "Tirupati day trips (perfect group size)", "Small corporate team outings"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5">
                  <span className="text-gold">✓</span>
                  <span className="font-medium text-deep-navy/80">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Big Bus Rental in Anantapur — When It&apos;s the Right Choice</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              For groups of 25 or more, a <strong>big bus rental in Anantapur</strong> (40–50 seats) delivers much better 
              value. The per-person cost drops significantly, and everyone travels together — no splitting of groups. 
              Our <Link href="/big-bus" className="text-gold hover:underline font-semibold">luxury big buses</Link> feature push-back 
              recliner seats, powerful AC, entertainment systems, and large luggage bays.
            </p>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              The exclusive <strong>4K Audio Video Coach</strong> is the finest bus available for hire in Anantapur, 
              with a 4K display and surround sound. Best suited for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {["Large family weddings in Anantapur", "Mass employee transport", "Multi-day pilgrimages to Shirdi, Varanasi", "Corporate annual day events", "School annual picnics (50-seater)", "Long-distance tours to Goa, Vizag"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5">
                  <span className="text-gold">✓</span>
                  <span className="font-medium text-deep-navy/80">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">What About the 30-Seat Medium Bus?</h2>
            <p className="text-deep-navy/80 leading-relaxed mb-4">
              The <Link href="/medium-bus" className="text-gold hover:underline font-semibold">30-seat medium bus</Link> is 
              the perfect middle ground. It&apos;s larger than a mini bus but more affordable than a 50-seater. 
              The medium bus is the top choice in Anantapur for school excursions, corporate team outings, 
              and mid-size pilgrimages to destinations like Shirdi, Mantralayam, and Tirupati.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "Should I hire a mini bus or big bus for my group from Anantapur?", a: "For 8–18 people, choose a mini bus / tempo traveller. For 20–30, choose a medium bus. For 40+, choose the 50-seat luxury coach. Call 9440440969 or 9440737138 for a free recommendation." },
                { q: "Is mini bus hire cheaper than big bus hire in Anantapur?", a: "A mini bus is cheaper in absolute terms, but for large groups, the per-person cost of a big bus is usually lower. Call us for a comparison quote." },
                { q: "What is the best bus for pilgrimage from Anantapur?", a: "For small families (up to 18), a mini bus or tempo traveller. For 25–30 pilgrims, the medium bus. For 40+ pilgrims, the 50-seat luxury coach offers the most comfort on long journeys." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                  <h3 className="font-bold text-deep-navy mb-2">{item.q}</h3>
                  <p className="text-deep-navy/70">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-deep-navy text-cream p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Still Not Sure? Call Us — We&apos;ll Help You Choose</h3>
            <p className="text-cream/70 mb-6">Our team will recommend the perfect bus for your group from Anantapur. Available 24/7.</p>
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
              <Link href="/blog/tirupati-package-from-anantapur" className="flex items-center gap-2 text-gold hover:underline font-semibold">Tirupati Package from Anantapur <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/mini-bus" className="flex items-center gap-2 text-gold hover:underline font-semibold">Mini Bus Hire Anantapur <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/big-bus" className="flex items-center gap-2 text-gold hover:underline font-semibold">Big Bus Hire Anantapur <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
