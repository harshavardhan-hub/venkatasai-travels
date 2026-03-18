import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { ContactForm } from '@/components/contact-form'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Contact Us | Book a Bus in Anantapur — Call 9440440969',
  description:
    'Book a bus in Anantapur. Call Y.N. Prasad: 9440440969 or Y.N. Kumar: 9440737138. ING Vysya Bank Lane, Kamala Nagar, Anantapur AP 515001. Available 24/7.',
  alternates: {
    canonical: 'https://www.venkatasaitravels.com/contact',
  },
  openGraph: {
    images: [{ url: '/og/og-contact.png', width: 1200, height: 630, alt: 'Contact Venkata Sai Tours & Travels — Book a Bus in Anantapur' }],
  },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Venkata Sai Tours & Travels",
      "telephone": "+919440440969",
      "email": "harsharoyal117@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ING Vysya Bank Lane, Kamala Nagar",
        "addressLocality": "Anantapur",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "515001",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "areaServed": "Anantapur, Andhra Pradesh"
    }
  }

  return (
    <main className="min-h-screen bg-cream text-deep-navy selection:bg-gold selection:text-deep-navy">
      <StructuredData data={jsonLd} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-deep-navy text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-deep-navy to-deep-navy pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection direction="down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-white/5 backdrop-blur-md mb-6 shadow-lg">
            <span className="text-gold text-xs md:text-sm font-medium tracking-widest uppercase">Book a Bus in Anantapur — 24/7</span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-6">
              We&apos;re Ready to <br className="hidden md:block"/>
              <span className="text-gold">Plan Your Journey</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/80 font-light drop-shadow-md">
              Book a bus in Anantapur now — call for instant booking, custom tour packages, and all travel queries. Available 24/7 near you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT DETAILS & FORM */}
      <section className="py-24 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto items-start">
            
            {/* Contact Details Panel */}
            <AnimatedSection direction="up" className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-black/5 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-serif font-bold text-deep-navy mb-10">Contact Information</h2>
                
                <ul className="space-y-8 mb-12">
                  <li className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us for Instant Booking (24/7)</h3>
                      <p className="text-deep-navy/70"><a href="tel:+919440440969" className="hover:text-gold transition-colors font-semibold">Y.N. Prasad: 9440440969</a></p>
                      <p className="text-deep-navy/70"><a href="tel:+919440737138" className="hover:text-gold transition-colors font-semibold">Y.N. Kumar: 9440737138</a></p>
                      <a
                        href="https://wa.me/919440440969?text=Hi%2C%20I%20want%20to%20book%20a%20bus%20from%20Anantapur."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-[#25D366] font-semibold hover:underline text-sm"
                      >
                        💬 WhatsApp Us
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Our Location in Anantapur</h3>
                      <p className="text-deep-navy/70 leading-relaxed max-w-[220px]">
                        ING Vysya Bank Lane,<br />Kamala Nagar, Anantapur,<br />
                        Andhra Pradesh 515001
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <p className="text-deep-navy/70"><a href="mailto:harsharoyal117@gmail.com" className="hover:text-gold transition-colors">harsharoyal117@gmail.com</a></p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-cream rounded-2xl flex items-center justify-center gap-4 text-deep-navy font-medium border border-black/5">
                <Clock className="w-6 h-6 text-gold" />
                Available 24/7 — Serving Anantapur & all of AP
              </div>
            </AnimatedSection>

            {/* Booking Form */}
            <AnimatedSection direction="up" delay={0.2} className="lg:col-span-3 bg-deep-navy text-cream rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
              <h2 className="text-3xl font-serif font-bold text-gold mb-2">Book Your Journey from Anantapur</h2>
              <p className="text-cream/70 mb-10">Fill out the details below and we&apos;ll get back to you immediately for your bus booking in Anantapur.</p>
              
              <ContactForm />
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS EMBED */}
      <section className="py-12 bg-cream text-center container mx-auto px-4 md:px-6 mb-12">
        <AnimatedSection direction="up" delay={0.4} className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.606399086111!2d77.595015!3d14.681887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b0b18f0a673%3A0xcf95b9ba25c50c00!2sKamala%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Venkata Sai Tours & Travels location — Kamala Nagar Anantapur AP"
            className="absolute inset-0 bg-deep-navy/10"
          />
        </AnimatedSection>
        <p className="mt-4 text-deep-navy/50 text-sm">Venkata Sai Tours &amp; Travels — ING Vysya Bank Lane, Kamala Nagar, Anantapur, Andhra Pradesh</p>
      </section>

      <Footer />
    </main>
  )
}
