// ServicesPage.tsx — page 4. Content: lib/content.ts → services
import PageShell from "./PageShell";
import { services } from "@/lib/content";
import { GearsAndBearingsSVG } from "./SparePartsSVGs";
import shapes from "./shapes.module.css";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <PageShell pageNumber={4}>
      {/* Top right gear/wheel watermark icon */}
      <div className={styles.topRightWheel}>
        <GearsAndBearingsSVG color="var(--navy)" strokeWidth={0.8} />
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

