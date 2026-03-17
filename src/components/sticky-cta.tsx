"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 300);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Show on mobile immediately
    const isMobile = window.innerWidth < 768;
    if (isMobile) setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:bottom-6 md:left-auto md:right-6 md:w-auto">
      {/* Mobile full-width bar */}
      <div className="flex md:hidden items-center justify-between bg-[#C9A84C] text-[#0D1B2A] px-4 py-3 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider opacity-80">
            Limited Slots Available!
          </span>
          <span className="text-sm font-bold">Call Now for Instant Booking</span>
          <span className="text-xs font-semibold opacity-80">9440440969 / 9440737138</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#0D1B2A] text-[#C9A84C] px-4 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-[#162740] transition-colors"
            aria-label="Book a bus — go to contact page"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </Link>
          <button
            onClick={() => { setIsDismissed(true); setIsVisible(false); }}
            className="p-1 rounded-full bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40 transition-colors"
            aria-label="Dismiss call banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop floating pill */}
      <div className="hidden md:flex items-center gap-3 bg-[#C9A84C] text-[#0D1B2A] px-5 py-3 rounded-2xl shadow-2xl shadow-[#C9A84C]/30 border-2 border-[#C9A84C]/80">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider opacity-70">Limited Slots!</span>
          <span className="text-sm font-bold leading-tight">Call Now for Instant Booking</span>
          <span className="text-xs font-semibold opacity-80 leading-tight">9440440969 / 9440737138</span>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-[#0D1B2A] text-[#C9A84C] px-4 py-2 rounded-xl font-bold text-sm hover:bg-[#162740] transition-colors whitespace-nowrap shadow-lg"
          aria-label="Go to contact page for bus booking"
        >
          <Phone className="w-4 h-4" />
          Book Now
        </Link>
        <button
          onClick={() => { setIsDismissed(true); setIsVisible(false); }}
          className="p-1 rounded-full hover:bg-[#0D1B2A]/10 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 opacity-60" />
        </button>
      </div>
    </div>
  );
}
