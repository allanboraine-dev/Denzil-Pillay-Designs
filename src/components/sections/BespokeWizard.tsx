"use client";

import { useState, useEffect, useMemo } from "react";
import { z } from "zod";
import {
  Sparkles,
  CalendarDays,
  Check,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const serviceOptions = [
  {
    id: "Custom Evening Gown",
    title: "Custom Evening Gown",
    desc: "Sculpted velvet, crystal beadwork, red-carpet and gala couture.",
  },
  {
    id: "The Amory Menswear",
    title: "Menswear Suiting (The Amory)",
    desc: "Architectural blazers, bespoke tuxedos, and vanguard utility trousers.",
  },
  {
    id: "Bridal & Matric Farewell",
    title: "Bridal & Matric Farewell",
    desc: "Royal wedding gowns, showstopping matric farewell statement pieces.",
  },
  {
    id: "Editorial Make-Up Artistry",
    title: "Editorial Make-Up Artistry",
    desc: "Flawless red carpet, runway, bridal retinue, or photography glam.",
  },
  {
    id: "Full Runway / Event Package",
    title: "Full Runway & Event Styling",
    desc: "Head-to-toe couture design + master make-up artistry + live styling.",
  },
] as const;

const silhouetteStyles = [
  "Dramatic / Bling & Crystals",
  "Flowing & Ethereal Drape",
  "Edgy & Structured Tailoring",
  "Classic Hourglass Mermaid",
  "Avant-Garde Architectural",
] as const;

const fittingModes = [
  {
    id: "Cape Town Studio Fitting",
    title: "In-Studio Cape Town Atelier Fitting",
    desc: "Private 1-on-1 bespoke consultation and toile fittings in Cape Town.",
  },
  {
    id: "Virtual Global Concierge",
    title: "Remote Virtual Measurement Concierge",
    desc: "Worldwide VIP video fitting and guide for South Africa & international clients.",
  },
] as const;

const formSchema = z.object({
  service: z.string().min(1, "Please select a couture service"),
  eventDate: z.string().min(1, "Please select your event date"),
  urgency: z.string().optional(),
  silhouette: z.string().min(1, "Please specify your preferred silhouette"),
  styleTag: z.string().min(1, "Please choose a style direction"),
  fittingMode: z.string().min(1, "Please choose your fitting preference"),
  clientName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please provide a valid phone number (with country code)"),
  budgetRange: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function BespokeWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const [formData, setFormData] = useState<FormValues>({
    service: "Custom Evening Gown",
    eventDate: "",
    urgency: "Standard Timeline",
    silhouette: "",
    styleTag: "Dramatic / Bling & Crystals",
    fittingMode: "Cape Town Studio Fitting",
    clientName: "",
    email: "",
    phone: "",
    budgetRange: "R10,000 - R25,000",
    notes: "",
  });

  // Listen for custom events dispatched when user clicks "Inquire About This Piece" in lookbook
  useEffect(() => {
    const handlePieceSelection = (e: Event) => {
      const customEvent = e as CustomEvent<{
        pieceTitle: string;
        collection: string;
        category: string;
      }>;
      const detail = customEvent.detail;
      if (!detail) return;

      let matchedService: FormValues["service"] = "Custom Evening Gown";
      if (detail.category.includes("Men")) {
        matchedService = "The Amory Menswear";
      } else if (detail.category.includes("Bridal")) {
        matchedService = "Bridal & Matric Farewell";
      } else if (detail.category.includes("MUA")) {
        matchedService = "Editorial Make-Up Artistry";
      }

      setFormData((prev) => ({
        ...prev,
        service: matchedService,
        silhouette: `${detail.pieceTitle} (${detail.collection})`,
        notes: `Inquiring about ${detail.pieceTitle} from ${detail.collection}.`,
      }));

      // Jump directly to Step 2 so client can set date and specifics
      setStep(2);
    };

    window.addEventListener("select-couture-piece", handlePieceSelection);
    return () => window.removeEventListener("select-couture-piece", handlePieceSelection);
  }, []);

  // Calculate timeline urgency when date changes
  const urgencyStatus = useMemo(() => {
    if (!formData.eventDate) return null;
    const target = new Date(formData.eventDate);
    const now = new Date();
    const diffTime = target.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      return { isRush: false, label: "Past date selected", color: "text-red-400" };
    }
    if (diffDays < 28) {
      return {
        isRush: true,
        days: diffDays,
        label: `Rush Order Notice (${diffDays} days away — under 4 weeks)`,
        desc: "Requires accelerated atelier schedule and express toile fittings. Subject to atelier capacity.",
      };
    }
    return {
      isRush: false,
      days: diffDays,
      label: `Standard Atelier Window (${Math.round(diffDays / 7)} weeks away)`,
      desc: "Optimal timeline for custom pattern grading, hand-embellishment, and comprehensive toile fittings.",
    };
  }, [formData.eventDate]);

  const updateField = (field: keyof FormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (currentStep === 1) {
      if (!formData.service) newErrors.service = "Please select a service";
    } else if (currentStep === 2) {
      if (!formData.eventDate) {
        newErrors.eventDate = "Please select your planned event or consultation date";
      }
    } else if (currentStep === 3) {
      if (!formData.silhouette.trim()) {
        newErrors.silhouette = "Please specify a preferred silhouette or look";
      }
    } else if (currentStep === 4) {
      if (!formData.clientName.trim()) {
        newErrors.clientName = "Please enter your name";
      }
      if (!formData.email.trim() || !formData.email.includes("@")) {
        newErrors.email = "Please provide a valid email";
      }
      if (!formData.phone.trim() || formData.phone.length < 7) {
        newErrors.phone = "Please provide a valid contact number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3 | 4);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    const parsed = formSchema.safeParse({
      ...formData,
      urgency: urgencyStatus?.isRush ? "Rush Order" : "Standard Timeline",
    });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(
          Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0] ?? ""])
        ) as Partial<Record<keyof FormValues, string>>
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setIsSuccess(true);
    } catch {
      setErrors((prev) => ({
        ...prev,
        notes: "Unable to process online inquiry right now. Please message Denzil directly on WhatsApp below.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp pre-formatted message link
  const whatsappUrl = useMemo(() => {
    const text = `*NEW COUTURE BRIEF - DENZIL PILLAY DESIGNS*
• *Client:* ${formData.clientName || "Valued Client"}
• *Service:* ${formData.service}
• *Event Date:* ${formData.eventDate || "TBD"} (${urgencyStatus?.isRush ? "RUSH ORDER" : "Standard"})
• *Silhouette:* ${formData.silhouette || "Custom consultation"}
• *Style Direction:* ${formData.styleTag}
• *Fitting Mode:* ${formData.fittingMode}
• *Contact:* ${formData.phone} | ${formData.email}
• *Notes:* ${formData.notes || "None"}`;

    return `https://wa.me/27781693826?text=${encodeURIComponent(text)}`;
  }, [formData, urgencyStatus]);

  return (
    <section id="booking-wizard" className="relative bg-[#0a0a0c] py-24 text-ivory">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.1),_transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Bespoke Concierge</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight">
            Commission Your Look
          </h2>
          <p className="mt-3 text-sm text-taupe leading-relaxed">
            Begin your bespoke couture journey. Step through our concierge questionnaire to calculate atelier timeline, fitting preferences, and reserve your consultation.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="overflow-hidden rounded-[2.5rem] border border-gold/30 bg-velvet shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
          {/* Step Progress Bar */}
          <div className="grid grid-cols-4 border-b border-white/10 bg-black/40 text-center">
            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Timeline" },
              { num: 3, label: "Silhouette" },
              { num: 4, label: "Dispatch" },
            ].map((s) => {
              const isCurrent = step === s.num;
              const isDone = step > s.num;
              return (
                <div
                  key={s.num}
                  className={`py-4 px-2 sm:px-4 border-r last:border-r-0 border-white/10 transition-colors ${
                    isCurrent
                      ? "bg-gold/15 text-gold border-b-2 border-b-gold"
                      : isDone
                      ? "text-ivory/90"
                      : "text-taupe/50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                        isCurrent
                          ? "bg-gold text-obsidian"
                          : isDone
                          ? "bg-white/20 text-ivory"
                          : "border border-white/15 text-taupe/60"
                      }`}
                    >
                      {isDone ? <Check className="h-3 w-3 stroke-[3]" /> : s.num}
                    </span>
                    <span className="hidden sm:inline text-xs font-medium uppercase tracking-[0.18em]">
                      {s.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form Content */}
          {isSuccess ? (
            /* Success State Receipt */
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-gold/20 text-gold shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                <CheckCircle2 className="h-8 w-8 text-gold" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                  Inquiry Received by Atelier
                </span>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl text-ivory">
                  Your Bespoke Commission Is in Motion.
                </h3>
                <p className="mt-2 text-sm text-taupe max-w-lg mx-auto">
                  Thank you, <span className="text-ivory font-medium">{formData.clientName}</span>. Denzil Pillay personally reviews each inquiry. For priority immediate dispatch, send your generated brief directly via WhatsApp.
                </p>
              </div>

              {/* Commission Summary Receipt Box */}
              <div className="mx-auto max-w-md rounded-2xl border border-white/15 bg-black/40 p-5 text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-taupe uppercase tracking-wider">Service:</span>
                  <span className="text-ivory font-medium">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-taupe uppercase tracking-wider">Event Date:</span>
                  <span className="text-ivory font-medium">{formData.eventDate || "TBD"}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-taupe uppercase tracking-wider">Silhouette / Style:</span>
                  <span className="text-gold font-medium">{formData.styleTag}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe uppercase tracking-wider">Fitting Mode:</span>
                  <span className="text-ivory font-medium">{formData.fittingMode}</span>
                </div>
              </div>

              {/* WhatsApp VIP Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition hover:bg-[#e6c45e]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Brief via WhatsApp (+27 78 169 3826)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                  }}
                  className="text-xs uppercase tracking-[0.2em] text-taupe hover:text-ivory transition py-2"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Multi-Step Wizard */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Step 1 of 4
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory mt-1">
                      Select Your Desired Atelier Service
                    </h3>
                    <p className="text-xs sm:text-sm text-taupe mt-1">
                      Choose the primary category for your couture commission or beauty session.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {serviceOptions.map((opt) => {
                      const isSelected = formData.service === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => updateField("service", opt.id)}
                          className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${
                            isSelected
                              ? "border-gold bg-gold/15 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                              : "border-white/10 bg-black/25 hover:border-gold/40 hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display text-xl font-medium text-ivory">
                              {opt.title}
                            </span>
                            <span
                              className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                                isSelected ? "border-gold bg-gold text-obsidian" : "border-white/20"
                              }`}
                            >
                              {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                            </span>
                          </div>
                          <p className="mt-2 text-xs text-taupe leading-relaxed">
                            {opt.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Event Date & Timeline */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Step 2 of 4
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory mt-1">
                      Event Date &amp; Timeline Calculator
                    </h3>
                    <p className="text-xs sm:text-sm text-taupe mt-1">
                      Couture garments undergo hand-cutting, custom toiles, and personal fittings.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date Picker */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                        Target Event or Fitting Date
                      </label>
                      <div className="relative">
                        <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => updateField("eventDate", e.target.value)}
                          className="w-full rounded-2xl border border-white/15 bg-black/40 py-3.5 pl-11 pr-4 text-sm text-ivory outline-none focus:border-gold transition"
                        />
                      </div>
                      {errors.eventDate && (
                        <p className="text-xs text-red-400 mt-1">{errors.eventDate}</p>
                      )}
                    </div>

                    {/* Timeline Urgency Indicator */}
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe mb-1">
                        <Clock className="h-4 w-4 text-gold" />
                        <span>Timeline Assessment</span>
                      </div>

                      {urgencyStatus ? (
                        <div>
                          <div
                            className={`text-sm font-semibold ${
                              urgencyStatus.isRush ? "text-amber-400" : "text-emerald-400"
                            }`}
                          >
                            {urgencyStatus.label}
                          </div>
                          <p className="text-xs text-taupe mt-1 leading-relaxed">
                            {urgencyStatus.desc}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs text-taupe italic">
                          Please select your event date to evaluate atelier construction timeline.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Fitting Preference */}
                  <div className="pt-4 border-t border-white/10">
                    <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-taupe mb-3">
                      Fitting Location Preference
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {fittingModes.map((mode) => {
                        const isSelected = formData.fittingMode === mode.id;
                        return (
                          <div
                            key={mode.id}
                            onClick={() => updateField("fittingMode", mode.id)}
                            className={`cursor-pointer rounded-2xl border p-4 transition ${
                              isSelected
                                ? "border-gold bg-gold/15"
                                : "border-white/10 bg-black/25 hover:border-gold/30"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-ivory flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5 text-gold" />
                                {mode.title}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-taupe">{mode.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Style & Silhouette Preferences */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Step 3 of 4
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory mt-1">
                      Aesthetic &amp; Silhouette Preferences
                    </h3>
                    <p className="text-xs sm:text-sm text-taupe mt-1">
                      Define the mood, shape, and embellishment style for your piece.
                    </p>
                  </div>

                  {/* Style Direction Tags */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-taupe mb-3">
                      Style Direction
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {silhouetteStyles.map((tag) => {
                        const isSelected = formData.styleTag === tag;
                        return (
                          <button
                            type="button"
                            key={tag}
                            onClick={() => updateField("styleTag", tag)}
                            className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition ${
                              isSelected
                                ? "bg-gold text-obsidian font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                : "border border-white/15 bg-white/5 text-taupe hover:border-gold/50 hover:text-ivory"
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Specific Silhouette or Lookbook Reference */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                      Silhouette Vision or Lookbook Piece
                    </label>
                    <input
                      type="text"
                      value={formData.silhouette}
                      onChange={(e) => updateField("silhouette", e.target.value)}
                      placeholder="e.g. Sculpted mermaid with dramatic gold crystals / The Signal Blazer"
                      className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-ivory outline-none focus:border-gold transition"
                    />
                    {errors.silhouette && (
                      <p className="text-xs text-red-400 mt-1">{errors.silhouette}</p>
                    )}
                  </div>

                  {/* Budget Guideline */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-taupe mb-2">
                      Estimated Investment Range (ZAR)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["R5k - R10k", "R10k - R25k", "R25k - R50k", "R50k+ Haute Couture"].map(
                        (b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => updateField("budgetRange", b)}
                            className={`rounded-xl border py-2.5 px-3 text-xs font-medium transition ${
                              formData.budgetRange === b
                                ? "border-gold bg-gold/15 text-gold"
                                : "border-white/10 text-taupe hover:border-white/20"
                            }`}
                          >
                            {b}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Client Contact & Notes */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Step 4 of 4
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory mt-1">
                      Client Contact &amp; Final Notes
                    </h3>
                    <p className="text-xs sm:text-sm text-taupe mt-1">
                      Provide your details so Denzil Pillay can prepare your bespoke quote and fitting schedule.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
                        <input
                          type="text"
                          value={formData.clientName}
                          onChange={(e) => updateField("clientName", e.target.value)}
                          placeholder="Lady Nomsa / John Doe"
                          className="w-full rounded-2xl border border-white/15 bg-black/40 py-3 pl-11 pr-4 text-sm text-ivory outline-none focus:border-gold transition"
                        />
                      </div>
                      {errors.clientName && (
                        <p className="text-xs text-red-400">{errors.clientName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="client@luxury.co.za"
                          className="w-full rounded-2xl border border-white/15 bg-black/40 py-3 pl-11 pr-4 text-sm text-ivory outline-none focus:border-gold transition"
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
                      WhatsApp / Mobile Number (with country code)
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+27 78 123 4567"
                        className="w-full rounded-2xl border border-white/15 bg-black/40 py-3 pl-11 pr-4 text-sm text-ivory outline-none focus:border-gold transition"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  {/* Creative Notes */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
                      Aesthetic Vision, Inclusivity Sizing, or Event Context
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder="Share your color palette, event dress code, measurements, or any personal styling requirements..."
                      className="w-full rounded-2xl border border-white/15 bg-black/40 p-4 text-sm text-ivory outline-none focus:border-gold transition"
                    />
                  </div>

                  {/* Transparent Consultation Note */}
                  <div className="rounded-2xl border border-gold/30 bg-gold/10 p-4 text-xs text-ivory/90 leading-relaxed">
                    <strong className="text-gold">Atelier Notice:</strong> Bespoke couture consultations commence from R1,500 (fully credited toward your commissioned garment). Your preliminary brief will be reviewed within 24 hours.
                  </div>
                </div>
              )}

              {/* Wizard Navigation Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    step === 1
                      ? "opacity-30 cursor-not-allowed text-taupe"
                      : "text-taupe hover:text-ivory hover:border-gold/50"
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition hover:bg-[#e6c45e]"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition hover:bg-[#e6c45e] disabled:opacity-50"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>{isSubmitting ? "Dispatching Brief..." : "Submit Bespoke Commission"}</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
