// AboutPage.tsx — page 2. Content: lib/content.ts → about
import PageShell from "./PageShell";
import { about } from "@/lib/content";
import { GearsAndBearingsSVG } from "./SparePartsSVGs";
import shapes from "./shapes.module.css";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  const statIcons = ['/icons/pin.svg', '/icons/tag.svg', '/icons/grid.svg'];
  return (
    <PageShell pageNumber={2}>
      {/* Low-opacity technical blueprint watermark matching Cover Page visual system */}
      <div className={styles.bgWatermark}>
        <GearsAndBearingsSVG color="var(--navy)" strokeWidth={0.8} />
      </div>

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
                <img src={statIcons[i]} alt="" className={styles.icon} />
                <div className={styles.num}>{s.num}</div>
                <div className={styles.lbl}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.photoContainer}>
          <div className={styles.photoWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.photo.src} alt="HMI Parts showroom" className={styles.photoImg} />
          </div>
          {about.photo.caption && (
            <div className={styles.photoCaption}>{about.photo.caption}</div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
