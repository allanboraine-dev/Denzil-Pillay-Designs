"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <a
        href="https://wa.me/27781693826?text=Hello%20Denzil,%20I'd%20like%20to%20inquire%20about%20a%20bespoke%20couture%20or%20MUA%20consultation."
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-2.5 rounded-full border border-gold/40 bg-velvet/95 px-4 py-3 text-xs uppercase tracking-[0.2em] text-ivory shadow-[0_10px_35px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold hover:shadow-[0_12px_40px_rgba(212,175,55,0.35)]"
        aria-label="Chat directly with Denzil Pillay on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white">
          <MessageCircle className="h-4 w-4" />
        </div>
        <div className="hidden sm:block text-left leading-none pr-1">
          <span className="block text-[9px] uppercase tracking-[0.2em] text-taupe">Direct Concierge</span>
          <span className="block font-medium text-gold">+27 78 169 3826</span>
        </div>
      </a>
    </aside>
  );
}
