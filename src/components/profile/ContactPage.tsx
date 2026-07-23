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

      <div className={styles.top}>
        <span className={shapes.eyebrow} style={{ color: "var(--orange)" }}>
          <span className={shapes.diamond} style={{ background: "#F5A623" }} />
          {contact.eyebrow}
        </span>
        <h2 className={styles.headline}>{contact.headline}</h2>
        <p className={styles.sub}>{contact.sub}</p>
      </div>

      {/* Center Visual: WhatsApp QR Code Card framing the dead middle space */}
      <div className={styles.centerVisual}>
        <div className={`${styles.qrCard} ${shapes.chamferLg}`}>
          <div className={styles.qrBox}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/qr-code.png"
              alt="WhatsApp QR Code (+968 7733 0777)"
              className={styles.qrImg}
            />
          </div>
          <div className={styles.qrInfo}>
            <div className={styles.qrTitle}>{contact.qrCard.title}</div>
            <div className={styles.qrSub}>{contact.qrCard.sub}</div>
            <p className={styles.qrDesc}>
              Scan with your smartphone camera to launch WhatsApp and send your part numbers directly to our counter team.
            </p>
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
                    size={14}
                    color={c.accent === "navy" ? "#FFFFFF" : "var(--orange)"}
                  />
                </div>
                <div className={styles.lbl}>{c.label}</div>
              </div>
              <div className={styles.val}>{c.value}</div>
            </div>
          ))}
        </div>

        <div className={styles.ctaArea}>
          <div className={styles.heroBtn}>
            <Icon name="bolt" size={16} color="#1A1A1A" />
            {contact.ctaLabel}
          </div>
          <span className={styles.footerLine}>{contact.footer}</span>
        </div>
      </div>
    </PageShell>
  );
}
