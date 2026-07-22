// FaqPage.tsx — page 9. Content: lib/content.ts → faq
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { faq } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./FaqPage.module.css";

export default function FaqPage() {
  const half = Math.ceil(faq.items.length / 2);
  const col1 = faq.items.slice(0, half);
  const col2 = faq.items.slice(half);

  return (
    <PageShell pageNumber={9}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{faq.eyebrow}</span>
      <h2 className={styles.headline}>{faq.headline}</h2>
      <div className={styles.cols}>
        {[col1, col2].map((col, ci) => (
          <div className={styles.col} key={ci}>
            {col.map((item) => (
              <div className={styles.item} key={item.q}>
                <Icon name="chev" size={18} color="#D98812" strokeWidth={1.6} />
                <div>
                  <div className={styles.q}>{item.q}</div>
                  <div className={styles.a}>{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
