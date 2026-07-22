// AboutPage.tsx — page 2. Content: lib/content.ts → about
import PageShell from "./PageShell";
import { about } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <PageShell pageNumber={2}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{about.eyebrow}</span>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h2>{about.headline}</h2>
          {about.paragraphs.map((p) => (
            <p className={styles.lead} key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className={styles.statsRow}>
            {about.stats.map((s, i) => (
              <div className={styles.stat} key={s.label} style={{ borderTopColor: i % 2 ? "var(--navy)" : "var(--orange)" }}>
                <div className={styles.num}>{s.num}</div>
                <div className={styles.lbl}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.photo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={about.photo.src} alt="HMI Parts showroom" />
          <span className={styles.tag}>{about.photo.tag}</span>
        </div>
      </div>
    </PageShell>
  );
}
