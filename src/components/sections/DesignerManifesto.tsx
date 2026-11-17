"use client";

import { Sparkles, HeartHandshake, Scissors, Wand2, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CoutureImage } from "@/components/ui/CoutureImage";

const manifestoPillars = [
  {
    number: "01",
    title: "Zero Size Limits. Every Body Celebrated.",
    description:
      "Haute couture has historically catered to an exclusionary fraction of humanity. Denzil Pillay dismantles this dogma. Whether UK size 6 or 28+, every curve, contour, and proportion is treated with architectural reverence. We do not adapt bodies to clothes—we sculpt luxury around you.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Dramatic Craftsmanship & Bling.",
    description:
      "Born from Kimberley’s diamond-rich soil and Cape Town’s coastal drama, every collection marries meticulous hand-draping, structural corsetry, and unapologetic crystalline embellishment. Bold, fierce, and unforgettable on the red carpet or aisle.",
    icon: Scissors,
  },
  {
    number: "03",
    title: "Head-to-Toe Styling (Couture + MUA).",
    description:
      "A garment is only complete when framed by luminous, master-crafted makeup artistry. As both an acclaimed fashion designer and professional MUA, Denzil conceives the entire visual symphony—complexion, hair narrative, and couture silhouette—as one transcendent statement.",
    icon: Wand2,
  },
];

export function DesignerManifesto() {
  return (
    <section id="story" className="relative bg-[#0d0d10] py-24 text-ivory overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(212,175,55,0.08),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split-Screen: The Designer Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Credibility */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-gold/40 bg-velvet shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <CoutureImage
                  src="/images/designer-denzil.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80"
                  alt="Denzil Pillay - Creative Director & Founder"
                  fill
                  className="object-cover"
                  containerClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                      <Award className="h-3.5 w-3.5" />
                      <span>Best Fashion Designer</span>
                    </div>
                    <div className="font-display text-lg text-ivory mt-1">
                      Northern Cape Awards Winner
                    </div>
                    <div className="text-[11px] text-taupe mt-0.5">
                      Dubbed &ldquo;The Northern Cape&rsquo;s Valentino&rdquo;
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2.5rem] border border-gold/20" />
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>The Designer &amp; Founder</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-[1.05]">
              From Kimberley Grit to <span className="text-gold-metallic italic font-serif">Cape Town Couture Icon.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-taupe">
              <p>
                Raised in Kimberley and educated at Floors High School, <strong className="text-ivory">Denzil Pillay</strong> spent years in the corporate 9-to-5 sales world while nurturing an undeniable artistic flame. Driven by passion, determination, and raw creative instinct, Denzil taught himself the intricate art of couture pattern-making, garment construction, and editorial make-up artistry.
              </p>
              <p>
                Taking the leap to establish <strong className="text-gold">Denzil Pillay Designs</strong> in Cape Town, his fearless eye quickly garnered national acclaim. Awarded <em>Best Fashion Designer at the Northern Cape Awards</em> and celebrated by media including <em>SABC 3&rsquo;s Afternoon Express</em> and <em>Beautiful News</em>, Denzil earned the revered moniker &ldquo;The Northern Cape&rsquo;s Valentino.&rdquo;
              </p>
              <p>
                Today, his atelier in Cape Town stands as a beacon of Afro-luxury couture where dramatic evening wear, sharp tailored menswear (The Amory Collection), and breathtaking bridal dreams are realized for clients across South Africa and the globe.
              </p>
            </div>

            {/* Core Manifesto Motto Card */}
            <div className="rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent p-6 mt-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-2">
                Brand Creed
              </div>
              <p className="font-display text-2xl sm:text-3xl italic text-ivory">
                &ldquo;Confident. Sexy. Fierce. Just Own It.&rdquo;
              </p>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-taupe">
                — Denzil Pillay, Creative Director
              </div>
            </div>
          </div>
        </div>

        {/* The 3-Pillar Interactive Manifesto Cards */}
        <div id="manifesto" className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-3">
              Core Creative Manifesto
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight">
              Three Pillars of Radical Couture
            </h3>
            <p className="mt-3 text-sm text-taupe">
              Our non-negotiable promises to every client stepping into the Denzil Pillay atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {manifestoPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="group relative rounded-3xl border border-white/10 bg-velvet p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition duration-300 group-hover:bg-gold group-hover:text-obsidian">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-3xl font-light text-gold/40 group-hover:text-gold transition">
                      {pillar.number}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl text-ivory mb-3 leading-snug">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-taupe leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MUA & Styling Section Highlight */}
        <div id="mua-styling" className="mt-20 rounded-[2.5rem] border border-white/10 bg-velvet p-8 sm:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.12),_transparent_70%)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                <Wand2 className="h-3 w-3" />
                <span>Editorial Make-Up Artistry Studio</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-ivory leading-tight">
                Flawless Skin. Camera-Ready Glamour. <span className="text-gold-light italic">Pure Luxury.</span>
              </h3>
              <p className="text-sm text-taupe leading-relaxed max-w-2xl">
                Whether gracing the runway, walking down the bridal aisle, or preparing for high-profile media appearances, our MUA services bring luminous skin sculpting, editorial eye concepts, and custom shade matching to all complexions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-ivory/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>Bridal &amp; Retinue Glam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>Editorial &amp; Fashion Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>Red Carpet &amp; Television</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="#booking-wizard"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian shadow-[0_4px_25px_rgba(212,175,55,0.3)] transition hover:bg-[#e6c45e]"
              >
                <span>Book MUA Session</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
