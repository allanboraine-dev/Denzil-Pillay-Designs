import Link from "next/link";
import { MessageCircle, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { CoutureImage } from "@/components/ui/CoutureImage";
import { instagramPosts } from "@/data/collections";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#070709] text-ivory">
      {/* Instagram Editorial Gallery Grid */}
      <div className="border-b border-white/10 bg-black/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                <InstagramIcon className="h-4 w-4" />
                <span>@denzilpillay703</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ivory mt-1">
                From the Atelier &amp; Runway
              </h3>
            </div>
            <a
              href="https://www.instagram.com/denzilpillay703"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light transition"
            >
              <span>Follow On Instagram</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* 6-Item Curated Instagram Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-velvet shadow-md transition hover:border-gold/60"
              >
                <CoutureImage
                  src={post.imageSrc}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  containerClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-obsidian/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                  <InstagramIcon className="h-5 w-5 text-gold mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-ivory font-medium">
                    {post.likes} Likes
                  </span>
                  <span className="text-[9px] text-taupe line-clamp-2 mt-1">
                    {post.caption}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-velvet text-xs font-semibold tracking-[0.28em] text-gold">
                DPD
              </div>
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-[0.32em] text-taupe">
                  Denzil Pillay
                </span>
                <span className="block font-display text-base tracking-[0.2em] text-ivory">
                  DESIGNS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-taupe leading-relaxed max-w-md">
              A Cape Town-based Afro-luxury couture house and editorial make-up artistry brand founded by Kimberley-born self-taught designer Denzil Pillay. Winner of Best Fashion Designer at the Northern Cape Awards. Dedicated to radical body inclusivity for every silhouette, curve, and frame.
            </p>

            <div className="pt-2 text-xs font-display italic text-gold">
              &ldquo;Confident. Sexy. Fierce. Just Own It.&rdquo;
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              The Maison
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-[0.18em] text-taupe">
              <li>
                <Link href="#collections" className="hover:text-gold transition">
                  Haute Couture Collections
                </Link>
              </li>
              <li>
                <Link href="#booking-wizard" className="hover:text-gold transition">
                  Bespoke Atelier Booking
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-gold transition">
                  The Designer &amp; Story
                </Link>
              </li>
              <li>
                <Link href="#mua-styling" className="hover:text-gold transition">
                  Editorial MUA &amp; Styling
                </Link>
              </li>
              <li>
                <Link href="#press" className="hover:text-gold transition">
                  Press &amp; Accolades
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Contact & Pricing Transparency */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Atelier &amp; Concierge
            </h4>
            <div className="space-y-2 text-xs text-taupe leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>Cape Town Atelier • Kimberley Roots, South Africa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="tel:+27781693826"
                  className="hover:text-gold transition text-ivory/90"
                >
                  +27 78 169 3826
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="https://wa.me/27781693826"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition text-ivory/90"
                >
                  WhatsApp VIP Concierge
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/denzilpillay703"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-taupe hover:border-gold hover:text-gold transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/denzilpillaydesigns"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-taupe hover:border-gold hover:text-gold transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Pricing Transparency Note */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3 text-[11px] text-taupe/90 leading-normal">
              <strong className="text-gold font-medium">Bespoke Transparency:</strong> Consultations commence from R1,500 (credited toward commissioned garment). Fabric sourcing, toile fittings, and hand-embellishment quoted individually.
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-taupe uppercase tracking-[0.2em]">
          <div>
            &copy; {new Date().getFullYear()} Denzil Pillay Designs. All rights reserved.
          </div>
          <div className="text-gold/80 font-medium">
            Cape Town • South Africa
          </div>
        </div>
      </div>
    </footer>
  );
}
