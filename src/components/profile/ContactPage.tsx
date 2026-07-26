// ContactPage.tsx — page 10, final CTA. Content: lib/content.ts → contact
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { BackgroundBlueprintSVG } from "./SparePartsSVGs";
import { contact } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <PageShell dark showCornerMark={false} className={styles.contact}>
      <div className={styles.shapeHexOut} />

      {/* Background blueprint watermark overlay for closing bookend */}
      <div className={styles.bgWatermark}>
        <BackgroundBlueprintSVG color="#FFFFFF" strokeWidth={0.7} />
      </div>

      {/* Main 2-Column Section */}
      <div className={styles.mainLayout}>
        {/* Left Content Column */}
        <div className={styles.leftCol}>
          <span className={shapes.eyebrow} style={{ color: "var(--orange)" }}>
            <span className={shapes.diamond} style={{ background: "#F5A623" }} />
            {contact.eyebrow}
          </span>
          <h2 className={styles.headline}>{contact.headline}</h2>
          <p className={styles.sub}>{contact.sub}</p>

          <div className={styles.divider} />

          {/* Highlights Row */}
          <div className={styles.highlightsRow}>
            {contact.highlights.map((h, i) => (
              <div key={i} className={styles.highlightItem}>
                <div className={styles.highlightTitle}>{h.title}</div>
                <div className={styles.highlightLabel}>{h.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.divider} />

          {/* WhatsApp Scan Box */}
          <div className={`${styles.qrCard} ${shapes.chamferLg}`}>
            <div className={styles.qrInfo}>
              <div className={styles.qrTitle}>{contact.qrCard.title}</div>
              <div className={styles.qrSub}>{contact.qrCard.sub}</div>
              <p className={styles.qrDesc}>
                Scan with your smartphone camera to launch WhatsApp and send your part numbers directly to our counter team.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual Column: Mobile Smartphone Mockup */}
        <div className={styles.rightCol}>
          <div className={styles.mockupWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/qr-whatsapp-mockup.png"
              alt="WhatsApp Mobile Mockup QR Code"
              className={styles.mockupImg}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: 4-Column Info Grid + Prominent Hero CTA Banner */}
      <div className={styles.bottomSection}>
        <div className={styles.grid}>
          {contact.cols.map((c) => (
            <div
              className={`${styles.col} ${
                c.accent === "navy" ? styles.colNavy : ""
              }`}
              key={c.label}
            >
              <div className={styles.colHeader}>
                <div
                  className={`${styles.colIconBox} ${
                    c.accent === "navy" ? styles.colIconBoxNavy : ""
                  }`}
                >
                  <Icon
                    name={c.icon}
                    size={13}
                    color={c.accent === "navy" ? "#FFFFFF" : "var(--orange)"}
                  />
                </div>
                <div className={styles.lbl}>{c.label} —</div>
              </div>
              <div className={styles.val}>{c.value}</div>
            </div>
          ))}
        </div>

        <div className={styles.ctaArea}>
          <div className={styles.heroBtn}>
            <Icon name="bolt" size={15} color="#1A1A1A" />
            {contact.ctaLabel}
          </div>
          <span className={styles.footerLine}>{contact.footer}</span>
        </div>
      </div>
    </PageShell>
  );
}
