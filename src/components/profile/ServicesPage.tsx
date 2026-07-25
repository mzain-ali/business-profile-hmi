// ServicesPage.tsx — page 4. Content: lib/content.ts → services
import PageShell from "./PageShell";
import { services } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <PageShell pageNumber={4} className={styles.servicesShell}>
      {/* Background Visual Image */}
      <div className={styles.bgImageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/services/services-background.jpeg"
          alt="Services background visual"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.eyebrowRow}>
        <div className={styles.eyebrowCard}>
          <span className={shapes.eyebrow}>
            <span className={shapes.diamond} />
            {services.eyebrow}
          </span>
        </div>
      </div>
      <h2 className={styles.headline}>{services.headline}</h2>
      <p className={styles.sub}>{services.sub}</p>

      <div className={styles.row}>
        {services.items.map((s) => (
          <div className={styles.card} key={s.title}>
            <div className={styles.imageFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
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

