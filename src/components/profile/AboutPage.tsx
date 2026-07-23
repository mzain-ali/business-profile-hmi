// AboutPage.tsx — page 2. Content: lib/content.ts → about
import PageShell from "./PageShell";
import { about } from "@/lib/content";
import { Icon } from "./Icons";
import shapes from "./shapes.module.css";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  const statIcons = ["/icons/pin.svg", "/icons/tag.svg", "/icons/grid.svg"];

  return (
    <PageShell pageNumber={2} className={styles.aboutShell}>
      {/* Background Visual Image */}
      <div className={styles.bgImageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/about/about-background.jpeg"
          alt="About page background visual"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.contentLayout}>
        <div className={styles.eyebrowRow}>
          <div className={styles.eyebrowCard}>
            <span className={shapes.eyebrow}>
              <span className={shapes.diamond} />
              {about.eyebrow}
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Headline, Paragraphs & Hexagonal Stats */}
          <div className={styles.copy}>
            <h2>{about.headline}</h2>
            {about.paragraphs.map((p) => (
              <p className={styles.lead} key={p.slice(0, 20)}>
                {p}
              </p>
            ))}

            {/* Hexagonal Stats Cards */}
            <div className={styles.statsRow}>
              {about.stats.map((s, i) => (
                <div className={styles.statHex} key={s.label}>
                  <div className={styles.statInner}>
                    <img src={statIcons[i]} alt="" className={styles.icon} />
                    <div className={styles.num}>{s.num}</div>
                    <div className={styles.lbl}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Interior Showroom Photo */}
          <div className={styles.photoContainer}>
            <div className={styles.photoWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.photo.src}
                alt="HMI Parts showroom"
                className={styles.photoImg}
              />
            </div>
          </div>
        </div>

        {/* All 8 Machine Categories in Single Horizontal Row */}
        {about.machineTypes && (
          <div className={styles.machineStrip}>
            {about.machineTypes.map((m) => (
              <div key={m.id} className={styles.circleMachineCard}>
                <div className={styles.circleBox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.img}
                    alt={m.label}
                    className={styles.machineTexture}
                  />
                </div>
                <span className={styles.machineLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
