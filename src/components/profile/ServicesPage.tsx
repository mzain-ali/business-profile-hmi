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
        {services.items.map((s, i) => (
          <div className={styles.card} key={s.title}>
            <div className={styles.imageFrame}>
              {i === 0 && (
                <>
                  <div className={styles.coreBadge}>CORE OFFERING</div>
                  <div className={styles.shieldBadge}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </>
              )}
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

