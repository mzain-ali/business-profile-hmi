// ProductsPage.tsx — page 5. Content: lib/content.ts → products
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { products } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./ProductsPage.module.css";

export default function ProductsPage() {
  return (
    <PageShell pageNumber={5}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{products.eyebrow}</span>
      <h2 className={styles.headline}>{products.headline}</h2>
      <p className={styles.sub}>{products.sub}</p>
      <div className={styles.grid}>
        {products.items.map((p, i) => (
          <div className={`${styles.tile} ${shapes.chamferSm}`} key={p.title}>
            <div className={styles.top}>
              <div className={`${styles.iconBox} ${i % 2 ? shapes.iconBoxNavy : shapes.iconBox}`}>
                <Icon name="nut" size={15} color={i % 2 ? "var(--navy)" : "var(--orange-deep)"} />
              </div>
              <h4>{p.title}</h4>
            </div>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
