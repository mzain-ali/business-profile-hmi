// BrandsPage.tsx — page 7. Content: lib/content.ts → brands
import PageShell from "./PageShell";
import { brands } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./BrandsPage.module.css";

export default function BrandsPage() {
  return (
    <PageShell pageNumber={7} showCornerMark={false}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{brands.eyebrow}</span>
      <h2 className={styles.headline}>{brands.headline}</h2>
      <p className={styles.sub}>{brands.sub}</p>
      <div className={styles.wall}>
        {brands.names.map((name, i) => (
          <span
            className={styles.chip}
            key={name}
            style={{ borderLeftColor: i % 2 ? "var(--navy)" : "var(--orange)" }}
          >
            {name}
          </span>
        ))}
      </div>
    </PageShell>
  );
}
