export type CollectionCategory =
  | "Dramatic Womenswear"
  | "The Amory Men's Collection"
  | "Bridal & Matric Couture"
  | "Editorial MUA & Runway";

export interface CoutureItem {
  id: string;
  slug: string;
  title: string;
  collection: string;
  category: CollectionCategory;
  year: number;
  imageSrc: string;
  fallbackSrc: string;
  tagline: string;
  silhouetteNotes: string;
  fabricDetails: string;
  inclusivityFitNote: string;
  accentColor?: string;
  featured?: boolean;
}

export interface InstagramPost {
  id: string;
  imageSrc: string;
  caption: string;
  likes: string;
  link: string;
}

export const coutureCollection: CoutureItem[] = [
  {
    id: "item-01",
    slug: "night-bloom-gown",
    title: "Night Bloom Obsidian Gown",
    collection: "Velvet Reverie Couture",
    category: "Dramatic Womenswear",
    year: 2025,
    imageSrc: "/images/hero-couture.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Sculpted liquid velvet with hand-sewn metallic gold crystal filigree.",
    silhouetteNotes:
      "A statuesque column silhouette engineered with an exaggerated high slit and internal boned corsetry. Designed to elongate the posture while celebrating every natural curve with fearless command.",
    fabricDetails:
      "Heavyweight Italian silk satin, midnight velvet paneling, gold crystal beadwork along the décolletage, and four-way stretch lining for effortless fluid movement.",
    inclusivityFitNote:
      "Radical body inclusivity: Custom pattern grading specifically calibrated for petite through plus-size silhouettes (UK 6 to 28+). Zero compression distortion—only radiant celebration.",
    featured: true,
  },
  {
    id: "item-02",
    slug: "saffron-noir-ensemble",
    title: "Saffron Gold Sovereign Gown",
    collection: "After Dark Cape Town Atelier",
    category: "Dramatic Womenswear",
    year: 2025,
    imageSrc: "/images/runway-lookinlens-02.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Cascading amber jacquard with architectural shoulder draping.",
    silhouetteNotes:
      "An asymmetric one-shoulder evening drape with a contoured hourglass waist and sweeping train. Balances high-fashion sculptural drama with modern gala movement.",
    fabricDetails:
      "Molten gold jacquard weave, double-faced silk crepe, hand-tucked pleats, and invisible reinforced corset stays.",
    inclusivityFitNote:
      "Engineered with adaptable fit points at the ribcage and hips to complement both curvaceous silhouettes and athletic frames.",
    featured: true,
  },
  {
    id: "item-03",
    slug: "amory-signal-tuxedo",
    title: "The Signal Architecture Blazer",
    collection: "The Amory Men's Collection",
    category: "The Amory Men's Collection",
    year: 2025,
    imageSrc: "/images/armory-mens-01.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    tagline: "Sharp roped shoulders and bespoke gold embroidery for the modern patriarch.",
    silhouetteNotes:
      "Hyper-structured bespoke tailoring featuring Pagoda roped shoulders, a cinched modern waistline, and elongated lapels that evoke timeless African royalty and modern Milanese sharpness.",
    fabricDetails:
      "Super 150s Merino wool, champagne satin peak lapels, gold bullion thread embroidery, and pure cupro lining.",
    inclusivityFitNote:
      "Cut and measured for all body types: broad-shouldered, athletic, and generous profiles receive custom rise and chest pitch adjustments.",
    featured: true,
  },
  {
    id: "item-04",
    slug: "amory-noir-utility-suit",
    title: "Noir Vanguard Cape Suit",
    collection: "The Amory Men's Collection",
    category: "The Amory Men's Collection",
    year: 2024,
    imageSrc: "/images/armory-mens-02.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    tagline: "High-waisted pleated utility trouser paired with a structured evening cutaway.",
    silhouetteNotes:
      "Deconstructed tailored menswear featuring an optional detachable single-shoulder cape and tapered double-pleated trousers with high-rise waistbands.",
    fabricDetails:
      "Matte poly-wool barathea, brushed gunmetal hardware, and subtle gold satin inner trim.",
    inclusivityFitNote:
      "Custom inseam, seat, and thigh grading ensures commanding comfort whether walking red carpets or sitting at VIP tables.",
  },
  {
    id: "item-05",
    slug: "afro-opulence-bridal-gown",
    title: "Afro-Opulence Cathedral Bridal",
    collection: "Bespoke Bridal & Matrimonial",
    category: "Bridal & Matric Couture",
    year: 2025,
    imageSrc: "/images/bridal-matric-01.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1200&q=80",
    tagline: "A majestic bridal masterpiece with hand-beaded pearls and sculpted corsetry.",
    silhouetteNotes:
      "A dramatic royal A-line with a 3-meter sweeping cathedral train, plunge sweetheart illusion neckline, and sculpted waist that commands the room.",
    fabricDetails:
      "Ivory Duchess satin, French Chantilly lace, over 3,000 hand-sewn freshwater seed pearls and Swarovski crystals.",
    inclusivityFitNote:
      "Personal fitting sessions in Cape Town or virtual concierge measurements ensure full cup support and weightless comfort for the entire celebration.",
    featured: true,
  },
  {
    id: "item-06",
    slug: "matric-farewell-monarch",
    title: "The Monarch Matric Farewell Gown",
    collection: "Youth Haute Couture & Gala",
    category: "Bridal & Matric Couture",
    year: 2025,
    imageSrc: "/images/runway-lookinlens-01.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    tagline: "Showstopping crystal mesh over liquid bronze lamé for the graduating queen.",
    silhouetteNotes:
      "Mermaid silhouette featuring a dramatic feathered or ruffled tiered hem and crystal harness overlay that catches spotlight illumination from all angles.",
    fabricDetails:
      "Metallic liquid lamé, illusion sheer tulle, hand-applied gold crystal rhinestones, and structured horsehair braid hem.",
    inclusivityFitNote:
      "Every young woman deserves to feel like runway royalty—tailored with adaptive inner corsetry and zero restrictive pinch points.",
  },
  {
    id: "item-07",
    slug: "gilded-goddess-editorial-mua",
    title: "Gilded Goddess Editorial Artistry",
    collection: "Editorial MUA & Runway",
    category: "Editorial MUA & Runway",
    year: 2025,
    imageSrc: "/images/mua-editorial-01.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Luminous glass skin with 24K gold leaf eye accents and sculpted bronze contour.",
    silhouetteNotes:
      "Signature high-fashion make-up concept blending South African sun-kissed warmth with sharp avant-garde editorial precision.",
    fabricDetails:
      "24K cosmetic gold leafing, waterproof HD setting bases, bespoke pigment blends tailored to melanated and diverse skin tones.",
    inclusivityFitNote:
      "Master-level artistry honoring every undertone, bone structure, and age with skin-first formulas that photograph flawlessly.",
    featured: true,
  },
  {
    id: "item-08",
    slug: "look-in-lens-runway-finale",
    title: "Look In Lens Runway Finale",
    collection: "Cape Town Runway Showcase",
    category: "Editorial MUA & Runway",
    year: 2024,
    imageSrc: "/images/designer-denzil.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Head-to-toe couture synergy: garments, makeup, and runway poise.",
    silhouetteNotes:
      "The quintessential expression of Denzil Pillay's philosophy: clothing and facial artistry designed as one cohesive, unforgettable fashion experience.",
    fabricDetails:
      "Embossed velvet, molten bronze metallic hardware, and custom-styled beauty concepts for the runway lights.",
    inclusivityFitNote:
      "Models and clients of all body shapes walk with unbroken confidence—the true definition of 'Just Own It'.",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    imageSrc: "/images/insta-01.jpg",
    caption: "Backstage fittings at Cape Town Fashion Week. Every curve honored, every stitch deliberate. ✨",
    likes: "2.4k",
    link: "https://www.instagram.com/denzilpillay703",
  },
  {
    id: "ig-2",
    imageSrc: "/images/insta-02.jpg",
    caption: "The Night Bloom gown in motion under the runway lights. Confident. Sexy. Fierce. 🖤",
    likes: "3.1k",
    link: "https://www.instagram.com/denzilpillay703",
  },
  {
    id: "ig-3",
    imageSrc: "/images/insta-03.jpg",
    caption: "Atelier details: 48 hours of hand-placed gold crystal beadwork in progress.",
    likes: "1.8k",
    link: "https://www.instagram.com/denzilpillay703",
  },
  {
    id: "ig-4",
    imageSrc: "/images/insta-04.jpg",
    caption: "Editorial MUA session with our muse. Glowing complexion and metallic bronze eyes.",
    likes: "4.2k",
    link: "https://www.instagram.com/denzilpillay703",
  },
  {
    id: "ig-5",
    imageSrc: "/images/insta-05.jpg",
    caption: "The Amory Men's collection: Redefining modern South African tailoring. ✂️",
    likes: "2.9k",
    link: "https://www.instagram.com/denzilpillay703",
  },
  {
    id: "ig-6",
    imageSrc: "/images/insta-06.jpg",
    caption: "Matric farewell dreams realized. Made for queens who own their spotlight. 👑",
    likes: "3.7k",
    link: "https://www.instagram.com/denzilpillay703",
  },
];

export const pressFeatures = [
  "SABC 3 AFTERNOON EXPRESS",
  "BEAUTIFUL NEWS SOUTH AFRICA",
  "NORTHERN CAPE AWARDS WINNER",
  "STYLE AFRICA FASHION NETWORK",
  "PPMC MAGAZINE",
  "LOOK IN LENS CAPE TOWN",
];
