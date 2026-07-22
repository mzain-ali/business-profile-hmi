// CoverPage.tsx — page 1. Content: lib/content.ts → cover, site
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { cover, site } from "@/lib/content";
import { BackgroundBlueprintSVG } from "./SparePartsSVGs";
import shapes from "./shapes.module.css";
import styles from "./CoverPage.module.css";

const TwoToneTechnicalConnector = () => (
  <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.connector}>
    {/* Center lines/grid */}
    <line x1="0" y1="12" x2="48" y2="12" stroke="var(--line)" strokeWidth="0.8" strokeDasharray="2 2" />
    <line x1="12" y1="0" x2="12" y2="24" stroke="var(--line)" strokeWidth="0.8" strokeDasharray="2 2" />
    <line x1="36" y1="0" x2="36" y2="24" stroke="var(--line)" strokeWidth="0.8" strokeDasharray="2 2" />
    
    {/* Left element: Navy Circle/Gear */}
    <circle cx="12" cy="12" r="8" stroke="var(--navy)" strokeWidth="1" />
    <circle cx="12" cy="12" r="5" stroke="var(--navy)" strokeWidth="0.8" strokeDasharray="2 1" />
    <circle cx="12" cy="12" r="2" fill="var(--navy)" />
    
    {/* Right element: Orange/Yellow Hex/Nut */}
    <path d="M 36 6 L 41.2 9 L 41.2 15 L 36 18 L 30.8 15 L 30.8 9 Z" stroke="var(--orange-deep)" strokeWidth="1" />
    <circle cx="36" cy="12" r="3.5" stroke="var(--orange-deep)" strokeWidth="0.8" />
    <circle cx="36" cy="12" r="1" fill="var(--orange-deep)" />

    {/* Connecting line */}
    <line x1="20" y1="12" x2="28" y2="12" stroke="var(--ink)" strokeWidth="1.2" />
  </svg>
);

export default function CoverPage() {
  return (
    <PageShell showCornerMark={false} className={styles.cover}>
      {/* Background Technical Watermark (Navy/Blue) */}
      <div className={styles.bgWatermark}>
        <BackgroundBlueprintSVG color="var(--navy)" strokeWidth={0.8} />
      </div>

      {/* Top Right Shape with Yellow Spare Parts Blueprint Texture Image */}
      <div className={styles.shapeHex}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/spare-parts-bg.png"
          alt="Spare parts yellow blueprint texture"
          className={styles.shapeBgImg}
        />
      </div>

      {/* Bottom Right Shape with Navy Spare Parts Blueprint Texture Image */}
      <div className={styles.shapeCircle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/spare-parts-navy.png"
          alt="Spare parts navy blueprint texture"
          className={styles.shapeBgImg}
        />
      </div>

      <div className={styles.dotgrid} />

      {/* Main Profile Layout — Highly Organized Hierarchy */}
      <div className={styles.contentColumn}>
        {/* 1. Header Logo */}
        <div className={styles.logoRow}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt={`${site.legalName} logo`} className={styles.logo} />
        </div>

        {/* 2. Main Title Block */}
        <div className={styles.titleBlock}>
          {/* Eyebrow Label */}
          <div className={styles.eyebrowBox}>
            <span className={shapes.eyebrow}>
              <span className={shapes.diamond} />
              {cover.eyebrow}
            </span>
          </div>

          {/* Accent Line */}
          <div className={styles.rule} />

          {/* Main Headline */}
          <h1 className={styles.headline}>
            {cover.headline.plain}
            <br />
            {cover.headline.accentTail}
            <span className={styles.accent}>{cover.headline.accent}</span>
          </h1>

          {/* Description Paragraph */}
          <p className={styles.sub}>{cover.sub}</p>

          {/* Key Badges */}
          <div className={styles.badgeRow}>
            {cover.badges.map((b) => (
              <span key={b.label} className={`${shapes.badge} ${b.accent === "orange" ? shapes.badgeAlt : ""}`}>
                <Icon name={b.icon} size={13} color={b.accent === "orange" ? "#D98812" : "#14669E"} />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Footer Contact Information */}
        <div className={styles.contactContainer}>
          <div className={styles.connectorWrapper}>
            <TwoToneTechnicalConnector />
          </div>
          <div className={styles.contactRow}>
            {cover.contact.map((c) => (
              <span key={c.label}>
                <strong>{c.label}</strong> &nbsp;{c.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
