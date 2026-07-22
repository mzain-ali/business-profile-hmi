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
  sub: "Beyond stocking spare parts, we help keep machines running with two services most parts-only suppliers don\u2019t offer.",
  items: [
    { icon: "gear" as const, accent: "orange" as const, title: "Spare Parts Supply", body: "Aftermarket parts for forklifts, excavators, wheel loaders, telehandlers, backhoes, cranes, tractors and road rollers \u2014 axles, transmissions, engines, hydraulics and more." },
    { icon: "bolt" as const, accent: "navy" as const, title: "Battery Regeneration", body: "Battery regeneration and maintenance services for electric forklifts \u2014 extending battery life and cutting replacement costs." },
    { icon: "shield" as const, accent: "orange" as const, title: "On-Site Glass Fixing", body: "Windscreen repair and replacement for construction, agriculture and industrial machinery \u2014 maintaining visibility and operator safety." },
  ],
};

export const products = {
  eyebrow: "Product categories",
  headline: "Every category. One shop.",
  sub: "The machine categories we stock parts for \u2014 message us your part number directly on WhatsApp.",
  items: [
    { title: "Forklift Parts", body: "Hydraulic, mast & drivetrain components for Toyota, Mitsubishi, Hyster, Yale, Doosan, Heli." },
    { title: "Excavator Parts", body: "Undercarriage, hydraulic and engine components for Komatsu, Hitachi, CAT and Volvo." },
    { title: "Wheel Loader Parts", body: "Axle, transmission and hydraulic parts for JCB, SDLG, XCMG and Zoomlion." },
    { title: "Backhoe Parts", body: "Volvo and CAT backhoe components \u2014 buckets, boom seals, axle assemblies." },
    { title: "Telehandler Parts", body: "Boom, hydraulic and drivetrain parts for Manitou and JCB telehandlers." },
    { title: "Front Road Roller Parts", body: "Drum, vibration and drivetrain components for Bomag, Dynapac and Hamm." },
    { title: "Crane Parts", body: "Hydraulic and structural components for mobile crane fleets." },
    { title: "Tractor Parts", body: "Axle, transmission and hydraulic parts for John Deere, Massey Ferguson, New Holland." },
  ],
};

// Illustrative stock-depth figures for the coverage chart.
// ← replace with real per-category SKU / stock-line counts before circulation.
export const coverage = {
  eyebrow: "Stock coverage",
  headline: "Where our inventory runs deepest",
  sub: "Relative stock-line depth by machine category across our Muscat and Salalah branches. Figures shown are illustrative \u2014 ask us for live availability on your part.",
  note: "Stock-line figures are illustrative placeholders. Replace with real per-category SKU counts before this document goes into circulation.",
  bars: [
    { label: "Forklift", value: 420 },
    { label: "Backhoe", value: 310 },
    { label: "Wheel Loader", value: 280 },
    { label: "Excavator", value: 260 },
    { label: "Telehandler", value: 190 },
    { label: "Tractor", value: 170 },
    { label: "Crane", value: 120 },
    { label: "Road Roller", value: 110 },
  ],
};

export const brands = {
  eyebrow: "Brands we deal in",
  headline: "30+ brands, one supplier",
  sub: "We are not affiliated with the brands below \u2014 names and logos are the property of their respective companies.",
  names: [
    "Dig & Lift", "Rotex", "Komatsu", "TKS", "Perkins", "Carraro", "Volvo", "ZF",
    "Toyota", "Mitsubishi", "Caterpillar", "Hyster", "TCM", "Yale", "Doosan",
    "Massey Ferguson", "Nissan", "SDLG", "JCB", "Hitachi", "Zoomlion", "XCMG",
    "Sany", "John Deere", "Bobcat", "Manitou", "Bomag", "Dynapac", "Hamm",
    "Still", "Jungheinrich", "Heli", "Linde",
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
  "coverage", "brands", "locations", "faq", "contact",
] as const;
