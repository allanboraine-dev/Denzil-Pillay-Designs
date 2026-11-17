"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageCircle, Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Bespoke Atelier", href: "#booking-wizard" },
    { label: "The Designer", href: "#story" },
    { label: "MUA & Styling", href: "#mua-styling" },
    { label: "Press", href: "#press" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0c]/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Logo / Monogram */}
          <Link
            href="#top"
            className="group flex items-center gap-3.5 transition"
            aria-label="Denzil Pillay Designs Home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-velvet text-xs font-semibold tracking-[0.3em] text-gold shadow-sm transition duration-300 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              DPD
            </div>
            <div className="leading-tight">
              <span className="block text-[10px] font-medium uppercase tracking-[0.32em] text-taupe group-hover:text-gold transition">
                Denzil Pillay
              </span>
              <span className="block font-display text-base tracking-[0.2em] text-ivory">
                DESIGNS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-ivory/80 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 transition duration-200 hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/27781693826?text=Hello%20Denzil,%20I'd%20like%20to%20inquire%20about%20a%20bespoke%20couture%20or%20MUA%20consultation."
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold transition hover:border-gold hover:bg-gold/20 sm:inline-flex"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="#booking-wizard"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-obsidian shadow-[0_2px_15px_rgba(212,175,55,0.25)] transition hover:bg-[#e6c45e] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)]"
            >
              <Sparkles className="h-3 w-3" />
              <span>Book a Fitting</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ivory transition hover:border-gold md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-velvet/95 px-6 py-6 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-ivory/80">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 transition hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://wa.me/27781693826?text=Hello%20Denzil,%20I'd%20like%20to%20inquire%20about%20a%20bespoke%20couture%20or%20MUA%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 py-2.5 text-xs uppercase tracking-[0.18em] text-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
