// WhyUsPage.tsx — page 3. Content: lib/content.ts → whyUs
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { whyUs } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./WhyUsPage.module.css";

export default function WhyUsPage() {
  return (
    <PageShell pageNumber={3}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{whyUs.eyebrow}</span>
      <div className={styles.headWrap}>
        <h2>{whyUs.headline}</h2>
        <p className={styles.sub}>{whyUs.sub}</p>
      </div>
      <div className={styles.cards}>
        {whyUs.cards.map((c) => (
          <div className={`${styles.card} ${shapes.chamferMd}`} key={c.title}>
            <div className={`${shapes.iconBox} ${c.accent === "navy" ? shapes.iconBoxNavy : ""}`}>
              <Icon name={c.icon} color={c.accent === "navy" ? "var(--navy)" : "var(--orange-deep)"} />
            </div>
            <div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
