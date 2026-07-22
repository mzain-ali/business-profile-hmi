// ProductsPage2.tsx — page 6. Content: lib/content.ts → productsPage2
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { productsPage2 } from "@/lib/content";
import { HeavyIndustrialGearSVG } from "./SparePartsSVGs";
import shapes from "./shapes.module.css";
import styles from "./ProductsPage.module.css";

export default function ProductsPage2() {
  return (
    <PageShell pageNumber={6}>
      {/* Top right gear watermark matching visual system */}
      <div className={styles.topRightWheel}>
        <HeavyIndustrialGearSVG color="var(--navy)" />
      </div>

      <span className={shapes.eyebrow}>
        <span className={shapes.diamond} />
        {productsPage2.eyebrow}
      </span>
      <h2 className={styles.headline}>{productsPage2.headline}</h2>
      <p className={styles.sub}>{productsPage2.sub}</p>

      <div className={styles.row}>
        {productsPage2.items.map((p, i) => (
          <div
            className={`${styles.card} ${shapes.chamferLg}`}
            key={p.title}
            style={{ borderBottomColor: i % 2 === 0 ? "var(--navy)" : "var(--orange)" }}
          >
            <div className={`${styles.imageFrame} ${shapes.chamferLg}`}>
              <div className={styles.iconBadge}>
                <Icon name="nut" size={14} color={i % 2 === 0 ? "var(--navy)" : "var(--orange-deep)"} />
              </div>
              <img src={p.img} alt={p.title} className={styles.cardPhoto} />
            </div>
            <div className={styles.cardContent}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
