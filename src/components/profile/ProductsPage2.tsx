// ProductsPage2.tsx — page 6. Content: lib/content.ts → productsPage2
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { productsPage2 } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./ProductsPage.module.css";

export default function ProductsPage2() {
  return (
    <PageShell pageNumber={6} className={styles.productsShell}>
      {/* Background Visual Image */}
      <div className={styles.bgImageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/products/products-background.jpeg"
          alt="Products background visual"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.eyebrowRow}>
        <div className={styles.eyebrowCard}>
          <span className={shapes.eyebrow}>
            <span className={shapes.diamond} />
            {productsPage2.eyebrow}
          </span>
        </div>
      </div>
      <h2 className={styles.headline}>
        <span className={styles.accent}>{productsPage2.headline.accent}</span>
        {productsPage2.headline.plain}
      </h2>
      <p className={styles.sub}>{productsPage2.sub}</p>

      <div className={styles.row}>
        {productsPage2.items.map((p, i) => {
          const isOrange = i % 2 === 1;
          const numStr = `0${i + 5} / `;
          return (
            <div
              className={`${styles.card} ${isOrange ? styles.cardOrange : styles.cardNavy}`}
              key={p.title}
            >
              <div className={styles.imageFrame}>
                <div className={styles.iconBadge}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOrange ? "#d98812" : "#14669e"}
                    strokeWidth="2.2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" fill={isOrange ? "#d98812" : "#14669e"} />
                  </svg>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} className={styles.cardPhoto} />
              </div>
              <div className={styles.cardContent}>
                <h3>
                  <span className={isOrange ? styles.numOrange : styles.numNavy}>{numStr}</span>
                  {p.title}
                </h3>
                <p>{p.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
