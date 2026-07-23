// FaqPage.tsx — page 9. Content: lib/content.ts → faq
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { BackgroundBlueprintSVG } from "./SparePartsSVGs";
import { faq } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./FaqPage.module.css";

export default function FaqPage() {
  const half = Math.ceil(faq.items.length / 2);
  const col1 = faq.items.slice(0, half);
  const col2 = faq.items.slice(half);

  return (
    <PageShell pageNumber={9}>
      {/* Background blueprint watermark */}
      <div className={styles.bgWatermark}>
        <BackgroundBlueprintSVG color="var(--navy)" strokeWidth={0.7} />
      </div>

      <div className={styles.header}>
        <span className={shapes.eyebrow}>
          <span className={shapes.diamond} />
          {faq.eyebrow}
        </span>
        <h2 className={styles.headline}>{faq.headline}</h2>
        {faq.sub && <p className={styles.sub}>{faq.sub}</p>}
      </div>

      <div className={styles.cols}>
        {[col1, col2].map((col, ci) => (
          <div className={styles.col} key={ci}>
            {col.map((item) => (
              <div
                className={`${styles.itemCard} ${shapes.chamferMd}`}
                key={item.q}
                style={{
                  borderTopColor:
                    item.accent === "navy" ? "var(--navy)" : "var(--orange)",
                }}
              >
                <div
                  className={`${shapes.iconBox} ${
                    item.accent === "navy" ? shapes.iconBoxNavy : ""
                  }`}
                >
                  <Icon
                    name={item.icon}
                    size={20}
                    color={
                      item.accent === "navy"
                        ? "var(--navy)"
                        : "var(--orange-deep)"
                    }
                  />
                </div>
                <div className={styles.itemContent}>
                  <div className={styles.q}>{item.q}</div>
                  <div className={styles.a}>{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* WhatsApp Quick-Contact CTA Strip filling lower half */}
      {faq.ctaBanner && (
        <div className={`${styles.ctaStrip} ${shapes.chamferLg}`}>
          <div className={styles.ctaText}>
            <div className={styles.ctaTitle}>{faq.ctaBanner.title}</div>
            <div className={styles.ctaSub}>{faq.ctaBanner.sub}</div>
          </div>
          <div className={shapes.btnLike}>
            <Icon name="bolt" size={15} color="#1A1A1A" />
            {faq.ctaBanner.ctaLabel}
          </div>
        </div>
      )}
    </PageShell>
  );
}
