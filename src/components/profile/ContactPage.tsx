// ContactPage.tsx — page 10, final CTA. Content: lib/content.ts → contact
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { contact } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <PageShell dark showCornerMark={false} className={styles.contact}>
      <div className={styles.shapeHexOut} />
      <div className={styles.top}>
        <span className={shapes.eyebrow} style={{ color: "var(--orange)" }}>
          <span className={shapes.diamond} style={{ background: "#F5A623" }} />
          {contact.eyebrow}
        </span>
        <h2 className={styles.headline}>{contact.headline}</h2>
        <p className={styles.sub}>{contact.sub}</p>
      </div>
      <div>
        <div className={styles.grid}>
          {contact.cols.map((c) => (
            <div className={styles.col} key={c.label}>
              <div className={styles.lbl}>{c.label}</div>
              <div className={styles.val}>{c.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <span className={shapes.btnLike}>
            <Icon name="bolt" size={15} color="#1A1A1A" />
            {contact.ctaLabel}
          </span>
          <span className={styles.footerLine}>{contact.footer}</span>
        </div>
      </div>
    </PageShell>
  );
}
