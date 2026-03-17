import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'Bus Travel Guides & Tips | Venkata Sai Tours Anantapur Blog',
  description:
    'Expert bus travel guides for Anantapur, AP. Tirupati package prices, best bus rental guide, mini bus vs big bus comparison. By Venkata Sai Tours & Travels.',
  alternates: {
    canonical: 'https://venkatasaitravels.com/blog',
  },
}

const posts = [
  {
    slug: 'best-bus-rental-anantapur',
    title: 'Best Bus Rental in Anantapur — Complete Guide 2024',
    description: 'Everything you need to know about hiring a bus in Anantapur, AP. Prices, fleet options, tips, and why Venkata Sai Tours is Anantapur\'s #1 choice.',
    category: 'Bus Rental',
    date: 'March 2024',
  },
  {
    slug: 'tirupati-package-from-anantapur',
    title: 'Tirupati Package from Anantapur — Price, Distance & Travel Tips',
    description: 'Planning a Tirupati trip from Anantapur? Here\'s everything you need — distance, best travel time, package prices, bus options, and booking tips.',
    category: 'Tour Packages',
    date: 'March 2024',
  },
  {
    slug: 'mini-bus-vs-big-bus',
    title: 'Mini Bus vs Big Bus: Which is Better for Your Group?',
    description: 'Not sure whether to book a mini bus or a big bus for your trip from Anantapur? This detailed comparison will help you choose the right vehicle.',
    category: 'Travel Tips',
    date: 'March 2024',
  },
]

export default function BlogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://venkatasaitravels.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://venkatasaitravels.com/blog" }
    ]
  }

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-deep-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      <section className="relative pt-40 pb-20 bg-deep-navy text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-deep-navy to-deep-navy pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6">
              Travel <span className="text-gold">Guides</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
              Expert tips and guides for bus travel from Anantapur, Andhra Pradesh — by Venkata Sai Tours &amp; Travels.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} direction="up" delay={0.1 * i}>
                <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5 hover:border-gold/30 hover:-translate-y-2 transition-all duration-500">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gold uppercase tracking-widest">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-deep-navy/40">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4 group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-deep-navy/65 leading-relaxed mb-6">{post.description}</p>
                    <span className="inline-flex items-center gap-2 text-gold font-bold text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
