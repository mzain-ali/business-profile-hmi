// ServicesPage.tsx — page 4. Content: lib/content.ts → services
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { services } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <PageShell pageNumber={4}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{services.eyebrow}</span>
      <h2 className={styles.headline}>{services.headline}</h2>
      <p className={styles.sub}>{services.sub}</p>
      <div className={styles.row}>
        {services.items.map((s) => (
          <div
            className={`${styles.card} ${shapes.chamferLg}`}
            key={s.title}
            style={{ borderBottomColor: s.accent === "navy" ? "var(--navy)" : "var(--orange)" }}
          >
            <div className={`${styles.iconBox} ${s.accent === "navy" ? shapes.iconBoxNavy : shapes.iconBox}`}>
              <Icon name={s.icon} size={24} color={s.accent === "navy" ? "var(--navy)" : "var(--orange-deep)"} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
