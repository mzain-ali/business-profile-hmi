// ============================================================================
// content.ts — THE SINGLE SOURCE OF ALL COPY, LINKS, AND DATA for the
// business profile. Edit this file to change any text, number, phone number,
// or list. Never edit page components to change content.
// ============================================================================

export const site = {
  legalName: "Hassan Mushtaq International SPC",
  brandName: "HMI Parts",
  website: "www.hmi-parts.com",
  email: "hassan.mushtaq@hmi-parts.com",
  profileYear: "2026",
};

export const cover = {
  eyebrow: "Business Profile · 2026",
  headline: { plain: "Heavy Equipment", accentTail: "Spare Parts", accent: ", Ready Now." },
  sub: "Quality aftermarket spare parts for forklifts, excavators, wheel loaders, backhoes, telehandlers, cranes, tractors and road rollers — stocked across Muscat and Salalah, Oman.",
  badges: [
    { icon: "gear" as const, label: "30+ Brands Stocked", accent: "navy" as const },
    { icon: "pin" as const, label: "2 Branches — Muscat & Salalah", accent: "orange" as const },
  ],
  contact: [
    { label: "Web", value: "www.hmi-parts.com" },
    { label: "Phone", value: "+968 7733 0777" },
    { label: "Email", value: "hassan.mushtaq@hmi-parts.com" },
  ],
};

export const about = {
  eyebrow: "Who we are",
  headline: "Oman\u2019s aftermarket parts specialist for heavy machinery",
  paragraphs: [
    "HMI Parts supplies quality\u2011checked aftermarket spare parts for forklifts, excavators, wheel loaders, backhoes, telehandlers, cranes, tractors and road rollers \u2014 sourced from trusted manufacturers, not gray\u2011market stock.",
    "We operate two branches, Muscat and Salalah, with live local inventory for same\u2011day parts availability.",
  ],
  photo: { src: "/assets/about/interior.jpg", caption: "Parts showroom — Muscat" },
  stats: [
    { num: "2", label: "Branches across Oman" },
    { num: "30+", label: "Brands stocked" },
    { num: "8+", label: "Machine categories" },
  ],
  machineTypes: [
    { id: "forklift", label: "Forklift", img: "/assets/machines/forklift.png" },
    { id: "loader", label: "Wheel Loader", img: "/assets/machines/loader.png" },
    { id: "backhoe", label: "Backhoe", img: "/assets/machines/backhoe.png" },
    { id: "roller", label: "Road Roller", img: "/assets/machines/roller.png" },
    { id: "crane", label: "Crane", img: "/assets/machines/crane.png" },
    { id: "excavator", label: "Excavator", img: "/assets/machines/excavator.png" },
  ],
};

export const whyUs = {
  eyebrow: "Why HMI Parts",
  headline: "Built for people who can\u2019t afford downtime",
  sub: "Contractors, fleet managers and workshop owners choose HMI Parts for four reasons.",
  cards: [
    { icon: "pin" as const, accent: "orange" as const, title: "Two branches, live stock", body: "Ghala (Muscat) and Salalah both hold live inventory \u2014 not a single warehouse hours away. Most local parts move same day." },
    { icon: "shield" as const, accent: "navy" as const, title: "Quality aftermarket parts", body: "Quality-checked aftermarket parts from trusted manufacturers \u2014 not gray-market stock. The right fit at a fair price." },
    { icon: "bolt" as const, accent: "orange" as const, title: "Battery & glass services", body: "Battery regeneration for electric forklifts and on-site glass fitting alongside parts supply \u2014 cutting machine downtime." },
    { icon: "gear" as const, accent: "navy" as const, title: "Direct sourcing network", body: "Sourced directly from trusted global component manufacturers \u2014 ensuring fair pricing, warranty support, and long-term reliability." },
  ],
  photo: {
    src: "/assets/interior-shelves.jpg",
    caption: "Organized inventory & parts counter support",
  },
  audience: [
    { id: "contractor", label: "Contractors" },
    { id: "fleet", label: "Fleet Managers" },
    { id: "workshop", label: "Workshop Owners" },
  ],
};

export const services = {
  eyebrow: "What we do",
  headline: "Parts supply and uptime services, in one place",
  sub: "Our core business is spare parts supply — alongside that, we offer two services most parts-only suppliers don't.",
  items: [
    {
      img: "/assets/services/parts-supply.jpeg",
      fallbackImg: "/assets/interior-shelves.jpg",
      accent: "orange" as const,
      title: "Spare Parts Supply",
      body: "Aftermarket spare parts for forklifts, excavators, wheel loaders, telehandlers, backhoes, cranes, tractors & road rollers — axles, transmissions, hydraulics and engine components.",
    },
    {
      img: "/assets/services/battery-regeneration.jpeg",
      fallbackImg: "/assets/whyUs/parts-counter.jpg",
      accent: "navy" as const,
      title: "Battery Regeneration",
      body: "Battery regeneration and maintenance services for electric forklifts — extending battery life and cutting replacement costs.",
    },
    {
      img: "/assets/services/glass-fixing.jpeg",
      fallbackImg: "/assets/about/interior.jpg",
      accent: "orange" as const,
      title: "On-Site Glass Fixing",
      body: "Windscreen repair and replacement for construction, agriculture and industrial machinery — maintaining visibility and operator safety.",
    },
  ],
};

export const productsPage1 = {
  eyebrow: "Product categories",
  headline: "Every category. One shop.",
  sub: "The machine categories we stock parts for — message us your part number directly on WhatsApp.",
  items: [
    { title: "Forklift Parts", img: "/assets/products/forklift-spare-parts-xray-image-min.png", body: "Hydraulic, mast & drivetrain components for Toyota, Mitsubishi, Hyster, Yale, Doosan, Heli." },
    { title: "Excavator Parts", img: "/assets/products/excavator.png", body: "Undercarriage, hydraulic and engine components for Komatsu, Hitachi, CAT and Volvo." },
    { title: "Wheel Loader Parts", img: "/assets/products/wheel-loader-parts-xray-image-min.png", body: "Axle, transmission and hydraulic parts for JCB, SDLG, XCMG and Zoomlion." },
    { title: "Backhoe Parts", img: "/assets/products/backhoe-spare-parts-xray-image-min.png", body: "Volvo and CAT backhoe components — buckets, boom seals, axle assemblies." },
  ],
};

export const productsPage2 = {
  eyebrow: "Product categories",
  headline: "Extended Machinery Lineup",
  sub: "Additional heavy equipment categories stocked across our Muscat and Salalah branches.",
  items: [
    { title: "Telehandler Parts", img: "/assets/products/telehandler.png", body: "Boom, hydraulic and drivetrain parts for Manitou and JCB telehandlers." },
    { title: "Front Road Roller Parts", img: "/assets/products/road-roller.png", body: "Drum, vibration and drivetrain components for Bomag, Dynapac and Hamm." },
    { title: "Crane Parts", img: "/assets/products/crane.png", body: "Hydraulic and structural components for mobile crane fleets." },
    { title: "Tractor Parts", img: "/assets/products/tractor.png", body: "Axle, transmission and hydraulic parts for John Deere, Massey Ferguson, New Holland." },
  ],
};

export const brands = {
  eyebrow: "Brands we deal in",
  headline: "30+ brands, one supplier",
  sub: "We are not affiliated with the brands below — names, logos and trademarks are the property of their respective companies.",
  items: [
    { name: "Dig & Lift", logo: "/assets/brands/dig-and-lift.jpeg" },
    { name: "Rotex", logo: "/assets/brands/rotex.jpeg" },
    { name: "Komatsu", logo: "/assets/brands/komatsu.jpeg" },
    { name: "TKS", logo: "/assets/brands/tks.jpeg" },
    { name: "Perkins", logo: "/assets/brands/perkins.jpeg" },
    { name: "Carraro", logo: "/assets/brands/carraro.jpeg" },
    { name: "Volvo", logo: "/assets/brands/volvo.jpeg" },
    { name: "ZF", logo: "/assets/brands/zf.jpeg" },
    { name: "Toyota", logo: "/assets/brands/toyota.jpeg" },
    { name: "Mitsubishi", logo: "/assets/brands/mitsubishi.jpeg" },
    { name: "Caterpillar", logo: "/assets/brands/caterpillar.jpeg" },
    { name: "Hyster", logo: "/assets/brands/hyster.jpeg" },
    { name: "TCM", logo: "/assets/brands/tcm.jpeg" },
    { name: "Yale", logo: "/assets/brands/yale.jpeg" },
    { name: "Doosan", logo: "/assets/brands/doosan.jpeg" },
    { name: "Massey Ferguson", logo: "/assets/brands/massey-ferguson.jpeg" },
    { name: "Nissan", logo: "/assets/brands/nissan.jpeg" },
    { name: "SDLG", logo: "/assets/brands/sdlg.jpeg" },
    { name: "JCB", logo: "/assets/brands/jcb.jpeg" },
    { name: "Hitachi", logo: "/assets/brands/hitachi.jpeg" },
    { name: "Zoomlion", logo: "/assets/brands/zoomlion.jpeg" },
    { name: "XCMG", logo: "/assets/brands/xcmg.jpeg" },
    { name: "Sany", logo: "/assets/brands/sany.jpeg" },
    { name: "John Deere", logo: "/assets/brands/john-deere.jpeg" },
    { name: "Bobcat", logo: "/assets/brands/bobcat.jpeg" },
    { name: "Manitou", logo: "/assets/brands/manitou.jpeg" },
    { name: "Bomag", logo: "/assets/brands/bomag.jpeg" },
    { name: "Dynapac", logo: "/assets/brands/dynapac.jpeg" },
    { name: "Hamm", logo: "/assets/brands/hamm.jpeg" },
    { name: "Still", logo: "/assets/brands/still.jpeg" },
    { name: "Jungheinrich", logo: "/assets/brands/jungheinrich.jpeg" },
    { name: "Heli", logo: "/assets/brands/heli.jpeg" },
    { name: "Linde", logo: "/assets/brands/linde.jpeg" },
  ],
};

// NOTE: Salalah currently uses an interior photo, not a storefront shot —
// the only Salalah-labeled photo available showed a different company's
// signage (Gulf National Company LLC) and was deliberately excluded.
// Swap in a real Salalah storefront photo when available.
export const locations = {
  eyebrow: "Visit us",
  headline: "Two branches, ready to help",
  branches: [
    {
      name: "Muscat Branch",
      photo: "/assets/muscat-branch.jpg",
      pin: "Ghala, Muscat",
      address: "Al Amkeen Building, Shop #7, Way #5258, Building #1/4521, Ghala Saniya Street, Ghala Industrial Area, Muscat, Oman",
      phone: "+968 7733 0777",
      email: "hassan.mushtaq@hmi-parts.com",
    },
    {
      name: "Salalah Branch",
      photo: "/assets/interior-shelves.jpg", // ← replace with a real Salalah storefront photo
      pin: "Salalah",
      address: "Salalah, Oman",
      phone: "+968 9701 8824",
      email: "hassan.mushtaq@hmi-parts.com",
    },
  ],
};

export const faq = {
  eyebrow: "Questions",
  headline: "Before you get in touch",
  items: [
    { q: "Are these genuine (OEM) or aftermarket parts?", a: "Quality-checked aftermarket spare parts sourced from trusted manufacturers \u2014 fast availability and fair pricing without OEM lead times or markups." },
    { q: "Is HMI Parts a registered supplier?", a: "Yes \u2014 JSRS registered, making us eligible for contractor, logistics and industrial procurement processes across Oman." },
    { q: "How fast can I get a part?", a: "Local stock at Ghala or Salalah typically dispatches same day. Special-order items depend on supplier lead time \u2014 quoted upfront." },
    { q: "Do you deliver, or do I collect?", a: "Both \u2014 collect from either branch, or ask about delivery coverage for your site when you enquire." },
    { q: "Can you support an ongoing maintenance contract?", a: "Yes. Alongside parts supply we offer battery regeneration and on-site glass fitting, and can discuss AMC-style arrangements for fleets." },
    { q: "Which brands do you stock parts for?", a: "30+ brands including JCB, Komatsu, Volvo, Caterpillar, Carraro, ZF, Toyota, Hyster, Yale, Doosan, John Deere and more." },
  ],
};

export const contact = {
  eyebrow: "Get in touch",
  headline: "Need a part today?",
  sub: "Message us your machine and part details \u2014 Muscat or Salalah, we\u2019ll confirm stock and price fast.",
  cols: [
    { label: "WhatsApp / Phone", value: "+968 7733 0777" },
    { label: "Salalah Branch", value: "+968 9701 8824" },
    { label: "Email", value: "hassan.mushtaq@hmi-parts.com" },
    { label: "Website", value: "www.hmi-parts.com" },
  ],
  ctaLabel: "Chat on WhatsApp",
  footer: "Hassan Mushtaq International SPC \u00b7 JSRS Registered Supplier",
};

// Master page order — the print route (app/print/page.tsx) maps over this.
export const pageOrder = [
  "cover", "about", "whyUs", "services", "products",
  "products2", "brands", "locations", "faq", "contact",
] as const;
