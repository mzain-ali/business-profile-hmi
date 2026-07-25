// BrandsPage.tsx — page 7. Content: lib/content.ts → brands
import PageShell from "./PageShell";
import { brands } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./BrandsPage.module.css";

export default function BrandsPage() {
  return (
    <PageShell pageNumber={7} showCornerMark={false} className={styles.brandsShell}>
      {/* Background Visual Image */}
      <div className={styles.bgImageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/brands/brands-background.jpeg"
          alt="Brands background visual"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.eyebrowRow}>
        <div className={styles.eyebrowCard}>
          <span className={shapes.eyebrow}>
            <span className={shapes.diamond} />
            {brands.eyebrow}
          </span>
        </div>
      </div>
      <h2 className={styles.headline}>{brands.headline}</h2>
      <p className={styles.sub}>{brands.sub}</p>

      <div className={styles.grid}>
        {brands.items.map((b, i) => (
          <div
            className={`${styles.card} ${shapes.chamferSm}`}
            key={b.name}
            style={{ borderBottomColor: i % 2 === 0 ? "var(--orange)" : "var(--navy)" }}
          >
            <img src={b.logo} alt={b.name} className={styles.logoImg} />
          </div>
        ))}
      </div>
    </PageShell>
  );
}
