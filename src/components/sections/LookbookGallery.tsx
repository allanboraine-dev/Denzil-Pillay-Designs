"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Sparkles, Scissors, ShieldCheck } from "lucide-react";
import { CoutureImage } from "@/components/ui/CoutureImage";
import { coutureCollection, type CoutureItem } from "@/data/collections";

const filterTabs = [
  { id: "all", label: "All Works" },
  { id: "Dramatic Womenswear", label: "Dramatic Womenswear" },
  { id: "The Amory Men's Collection", label: "The Amory Men's" },
  { id: "Bridal & Matric Couture", label: "Bridal & Matric" },
  { id: "Editorial MUA & Runway", label: "Editorial MUA & Runway" },
] as const;

export function LookbookGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPiece, setSelectedPiece] = useState<CoutureItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return coutureCollection;
    return coutureCollection.filter((item) => item.category === activeTab);
  }, [activeTab]);

  // Keyboard escape listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPiece(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Inquire action that navigates to the booking wizard and pre-fills the form
  const handleInquire = (piece: CoutureItem) => {
    const wizardEl = document.getElementById("booking-wizard");
    if (wizardEl) {
      wizardEl.scrollIntoView({ behavior: "smooth" });
    }

    const event = new CustomEvent("select-couture-piece", {
      detail: {
        pieceTitle: piece.title,
        collection: piece.collection,
        category: piece.category,
      },
    });
    window.dispatchEvent(event);

    setSelectedPiece(null);
  };

  return (
    <section id="collections" className="relative bg-obsidian py-24 text-ivory">
      {/* Decorative subtle ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06),_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Curated Haute Couture &amp; MUA Gallery</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight">
              The Living Lookbook
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-taupe leading-relaxed">
            Every garment and beauty concept is tailor-made to measure. Click any creation to explore its craftsmanship, fabric provenance, and inclusive fitting notes.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition duration-200 ${
                  isActive
                    ? "text-obsidian font-semibold"
                    : "text-taupe hover:text-ivory bg-transparent"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Lookbook Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredItems.map((piece) => (
              <motion.div
                key={piece.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-velvet shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_15px_40px_rgba(212,175,55,0.18)]"
                onClick={() => setSelectedPiece(piece)}
              >
                {/* Image Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <CoutureImage
                    src={piece.imageSrc}
                    fallbackSrc={piece.fallbackSrc}
                    alt={piece.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    containerClassName="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-75" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-obsidian/75 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold border border-gold/30 backdrop-blur-md">
                      {piece.category}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-obsidian/75 border border-white/15 text-ivory opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-gold group-hover:text-gold backdrop-blur-md">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-gold/90 mb-1">
                      {piece.collection}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-ivory leading-tight group-hover:text-gold-light transition duration-200">
                      {piece.title}
                    </h3>
                    <p className="mt-2 text-xs text-taupe line-clamp-2 leading-relaxed">
                      {piece.tagline}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-gold/80 font-medium">
                      <span>Inspect Details &amp; Fit</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Couture Lightbox Drawer Modal */}
      <AnimatePresence>
        {selectedPiece && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-3 sm:p-6 backdrop-blur-md"
            onClick={() => setSelectedPiece(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-gold/40 bg-velvet shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPiece(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-obsidian/80 text-ivory transition duration-200 hover:border-gold hover:text-gold hover:scale-105 backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: High-Res Image Display */}
                <div className="relative min-h-[350px] md:min-h-[550px] w-full overflow-hidden bg-obsidian">
                  <CoutureImage
                    src={selectedPiece.imageSrc}
                    fallbackSrc={selectedPiece.fallbackSrc}
                    alt={selectedPiece.title}
                    fill
                    priority
                    className="object-cover"
                    containerClassName="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velvet via-transparent to-transparent md:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-gold/40 bg-obsidian/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold backdrop-blur-md">
                      {selectedPiece.year} Atelier
                    </span>
                  </div>
                </div>

                {/* Right: Craftsmanship, Inclusivity & Inquire */}
                <div className="flex flex-col justify-between p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[85vh] md:max-h-[600px]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      <span>{selectedPiece.collection}</span>
                      <span>•</span>
                      <span>{selectedPiece.category}</span>
                    </div>

                    <h3 className="mt-2 font-display text-3xl sm:text-4xl text-ivory leading-tight">
                      {selectedPiece.title}
                    </h3>

                    <p className="mt-2 text-sm italic text-gold-light/90">
                      &ldquo;{selectedPiece.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Details Cards */}
                  <div className="space-y-4">
                    {/* Silhouette & Cut */}
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe mb-1.5">
                        <Scissors className="h-3.5 w-3.5 text-gold" />
                        <span>Silhouette &amp; Cut</span>
                      </div>
                      <p className="text-xs sm:text-sm text-ivory/90 leading-relaxed">
                        {selectedPiece.silhouetteNotes}
                      </p>
                    </div>

                    {/* Fabric & Provenance */}
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe mb-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-gold" />
                        <span>Fabric &amp; Embellishment</span>
                      </div>
                      <p className="text-xs sm:text-sm text-ivory/90 leading-relaxed">
                        {selectedPiece.fabricDetails}
                      </p>
                    </div>

                    {/* Radical Inclusivity & Fit Guarantee */}
                    <div className="rounded-2xl border border-gold/40 bg-gold/10 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-1.5">
                        <ShieldCheck className="h-4 w-4 text-gold" />
                        <span>Radical Inclusivity &amp; Fit Note</span>
                      </div>
                      <p className="text-xs sm:text-sm text-ivory/90 leading-relaxed">
                        {selectedPiece.inclusivityFitNote}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => handleInquire(selectedPiece)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition duration-200 hover:bg-[#e6c45e]"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Inquire About This Piece</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPiece(null)}
                      className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-taupe hover:text-ivory hover:border-white/30 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
