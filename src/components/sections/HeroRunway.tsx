"use client";

import { ArrowRight, Sparkles, Compass } from "lucide-react";
import Link from "next/link";
import { CoutureImage } from "@/components/ui/CoutureImage";
import { pressFeatures } from "@/data/collections";

export function HeroRunway() {
  return (
    <section className="relative flex min-h-[calc(100dvh-65px)] flex-col justify-between overflow-hidden bg-obsidian text-ivory">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.14),_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(166,124,46,0.12),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/30 to-obsidian" />

      {/* Main Hero Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Left Column: Editorial Headline & Story */}
        <div className="flex flex-col justify-center pt-2 lg:pt-0">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold shadow-sm">
            <Sparkles className="h-3 w-3 text-gold" />
            <span>Cape Town Couture House • Kimberley Roots</span>
          </div>

          <h1 className="font-display text-5xl font-light uppercase tracking-tight text-ivory sm:text-7xl lg:text-8xl leading-[0.9]">
            <span className="block text-ivory/80">CONFIDENT.</span>
            <span className="block text-gold-metallic font-semibold italic">SEXY.</span>
            <span className="block text-ivory">FIERCE.</span>
          </h1>

          <p className="mt-6 font-display text-xl sm:text-2xl italic tracking-wide text-gold/90">
            &ldquo;Bespoke Couture &amp; Make-Up Artistry for Every Body.&rdquo;
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-taupe sm:text-base">
            Radically body-inclusive haute couture, bespoke suiting, and red-carpet make-up artistry 
            conceived by award-winning designer Denzil Pillay. Crafted without size boundaries 
            for those who dare to own every room they enter.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#booking-wizard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian shadow-[0_4px_25px_rgba(212,175,55,0.35)] transition duration-300 hover:bg-[#e6c45e] hover:shadow-[0_6px_35px_rgba(212,175,55,0.5)]"
            >
              <span>Book a Fitting</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="#collections"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition duration-300 hover:border-gold/60 hover:text-gold hover:bg-gold/5"
            >
              <Compass className="h-3.5 w-3.5 text-gold" />
              <span>Explore Lookbook</span>
            </Link>
          </div>

          {/* Quick Metrics / Badges */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <span className="block font-display text-2xl font-bold text-gold">100%</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-taupe">Zero Size Limits</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-gold">Best Designer</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-taupe">Northern Cape Awards</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-gold">Couture + MUA</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-taupe">Full Image Direction</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Fashion Frame */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative h-[480px] w-full max-w-[460px] sm:h-[580px] overflow-hidden rounded-[2.5rem] border border-gold/30 bg-velvet shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
            <CoutureImage
              src="/images/hero-couture.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
              alt="Denzil Pillay Designs Haute Couture Night Bloom Gown"
              fill
              priority
              className="object-cover"
              containerClassName="h-full w-full"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />

            {/* Floating Editorial Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-panel rounded-2xl p-4 border border-white/15 backdrop-blur-md">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-gold">
                  <span>Velvet Reverie Couture</span>
                  <span className="rounded-full bg-gold/20 px-2 py-0.5 text-gold">2025</span>
                </div>
                <h2 className="mt-1 font-display text-xl font-medium text-ivory">
                  Night Bloom Obsidian Gown
                </h2>
                <p className="mt-1 text-xs text-taupe line-clamp-2">
                  Sculpted Italian velvet with hand-sewn metallic gold filigree. Tailored for all body silhouettes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Press Credibility Ticker Bar */}
      <div id="press" className="relative z-10 border-t border-white/10 bg-velvet/90 py-3.5 backdrop-blur-md">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-track flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] text-taupe/90">
            {[...pressFeatures, ...pressFeatures].map((press, i) => (
              <span key={`${press}-${i}`} className="inline-flex items-center gap-12">
                <span className="font-medium text-ivory/90 hover:text-gold transition">
                  {press}
                </span>
                <span className="text-gold">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
