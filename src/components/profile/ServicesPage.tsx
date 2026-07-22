// ServicesPage.tsx — page 4. Content: lib/content.ts → services
import PageShell from "./PageShell";
import { services } from "@/lib/content";
import { HeavyIndustrialGearSVG } from "./SparePartsSVGs";
import shapes from "./shapes.module.css";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <PageShell pageNumber={4}>
      {/* Heavy industrial mechanical gear icon in top right corner (half hidden, half shown) */}
      <div className={styles.topRightWheel}>
        <HeavyIndustrialGearSVG color="var(--navy)" />
      </div>

      <span className={shapes.eyebrow}>
        <span className={shapes.diamond} />
        {services.eyebrow}
      </span>
      <h2 className={styles.headline}>{services.headline}</h2>
      <p className={styles.sub}>{services.sub}</p>

      <div className={styles.row}>
        {services.items.map((s) => (
          <div
            className={`${styles.card} ${shapes.chamferLg}`}
            key={s.title}
            style={{ borderBottomColor: s.accent === "navy" ? "var(--navy)" : "var(--orange)" }}
          >
            <div className={`${styles.imageFrame} ${shapes.chamferLg}`}>
              <img
                src={s.img}
                alt={s.title}
                className={styles.cardPhoto}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

