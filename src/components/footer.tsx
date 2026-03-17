import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-cream pt-20 pb-10 border-t-4 border-gold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 overflow-hidden rounded-full ring-2 ring-gold">
                <Image
                  src="/logo.png"
                  alt="Venkata Sai Tours & Travels Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-cream leading-tight">
                  Venkata Sai
                </span>
                <span className="text-sm text-gold uppercase tracking-widest font-medium">
                  Tours & Travels
                </span>
              </div>
            </Link>
            <p className="text-cream/80 leading-relaxed font-sans text-sm pr-4">
              Andhra Pradesh&apos;s most trusted bus travel company. Providing safe, comfortable, and premium journeys for 24 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-deep-navy transition-all">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-deep-navy transition-all">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-deep-navy transition-all">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-serif font-semibold text-gold relative w-fit">
              Explore Our Fleet
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-saffron" />
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/mini-bus" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 14 & 18 Seat Mini Bus
                </Link>
              </li>
              <li>
                <Link href="/medium-bus" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 30 Seat Medium Bus
                </Link>
              </li>
              <li>
                <Link href="/big-bus" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 40 Seat Semi Deluxe
                </Link>
              </li>
              <li>
                <Link href="/big-bus" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 50 Seat Push Back
                </Link>
              </li>
              <li>
                <Link href="/big-bus" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 4K Audio Video Coach
                </Link>
              </li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-serif font-semibold text-gold relative w-fit">
              Popular Packages
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-saffron" />
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/tour-packages" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Tirupati Balaji Darshan
                </Link>
              </li>
              <li>
                <Link href="/tour-packages" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Shirdi Sai Baba Tour
                </Link>
              </li>
              <li>
                <Link href="/tour-packages" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Corporate Outings
                </Link>
              </li>
              <li>
                <Link href="/tour-packages" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> School Excursions
                </Link>
              </li>
              <li>
                <Link href="/tour-packages" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Family Vacations
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog / Articles */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-serif font-semibold text-gold relative w-fit">
              Travel Guides
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-saffron" />
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/blog" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> All Articles
                </Link>
              </li>
              <li>
                <Link href="/blog/best-bus-rental-anantapur" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Best Bus Rental Anantapur
                </Link>
              </li>
              <li>
                <Link href="/blog/tirupati-package-from-anantapur" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Tirupati From Anantapur
                </Link>
              </li>
              <li>
                <Link href="/blog/mini-bus-vs-big-bus" className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Mini Bus vs Big Bus
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-serif font-semibold text-gold relative w-fit">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-saffron" />
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 text-cream/80">
                <MapPin className="w-6 h-6 shrink-0 text-gold mt-1" />
                <span className="leading-relaxed">
                  <span className="font-semibold block mb-1">Head Office — Anantapur:</span>
                  ING Vysya Bank Lane,<br />
                  Kamala Nagar, Anantapur,<br />
                  Andhra Pradesh 515001
                </span>
              </li>
              <li className="flex items-center gap-4 text-cream/80">
                <Phone className="w-5 h-5 shrink-0 text-gold" />
                <div className="flex flex-col">
                  <a href="tel:+919440440969" className="hover:text-gold transition-colors">Y.N. Prasad: 9440440969</a>
                  <a href="tel:+919440737138" className="hover:text-gold transition-colors">Y.N. Kumar: 9440737138</a>
                </div>
              </li>
              <li className="flex items-center gap-4 text-cream/80">
                <Mail className="w-5 h-5 shrink-0 text-gold" />
                <a href="mailto:harsharoyal117@gmail.com" className="hover:text-gold transition-colors">
                  harsharoyal117@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
          <p>&copy; {new Date().getFullYear()} Venkata Sai Tours & Travels. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <a href="https://wa.me/919440440969" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
