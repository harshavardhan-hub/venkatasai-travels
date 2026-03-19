"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Mini Bus", path: "/mini-bus" },
  { name: "Medium Bus", path: "/medium-bus" },
  { name: "Big Bus", path: "/big-bus" },
  { name: "Tour Packages", path: "/tour-packages" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "lg:py-3 lg:bg-deep-navy/80 lg:backdrop-blur-md lg:border-b lg:border-white/10 lg:shadow-lg py-4"
            : "py-4 bg-transparent border-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-gold/50 group-hover:ring-gold transition-all">
                <Image
                  src="/logo.png"
                  alt="Venkata Sai Tours & Travels Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-serif font-bold text-cream leading-tight">
                  Venkata Sai
                </span>
                <span className="text-xs text-gold uppercase tracking-widest font-medium">
                  Tours & Travels
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="relative px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-200",
                        isActive ? "text-gold" : "text-cream hover:text-gold"
                      )}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-white/5 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2">
                <Button href="tel:+919440440969" variant="gold" size="sm">
                  <Phone className="w-4 h-4" /> Y.N. Prasad
                </Button>
                <Button href="tel:+919440737138" variant="outline" size="sm" className="border-gold/50 text-cream hover:bg-gold hover:text-deep-navy hover:border-gold">
                  <Phone className="w-4 h-4" /> Y.N. Kumar
                </Button>
              </div>

              <button
                className="p-2 lg:hidden text-cream hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-deep-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-serif font-bold text-gold">
                  Venkata Sai
                </span>
                <button
                  className="p-2 text-cream hover:text-gold rounded-full bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={cn(
                        "text-3xl font-serif",
                        pathname === link.path ? "text-gold" : "text-cream"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <Button href="tel:+919440440969" variant="gold" className="w-full justify-center text-lg">
                  <Phone className="w-5 h-5" /> Y.N. Prasad: 9440440969
                </Button>
                <Button href="tel:+919440737138" variant="outline" className="w-full justify-center text-lg border-gold text-gold hover:bg-gold hover:text-deep-navy">
                  <Phone className="w-5 h-5" /> Y.N. Kumar: 9440737138
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
