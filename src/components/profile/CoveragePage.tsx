// CoveragePage.tsx — page 6. Data-viz: sorted horizontal bar chart, plain
// CSS (no chart library) for reliable, deterministic print/PDF rendering.
// Content: lib/content.ts → coverage
import PageShell from "./PageShell";
import { coverage } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./CoveragePage.module.css";

export default function CoveragePage() {
  const max = Math.max(...coverage.bars.map((b) => b.value));
  return (
    <PageShell pageNumber={6}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{coverage.eyebrow}</span>
      <h2 className={styles.headline}>{coverage.headline}</h2>
      <p className={styles.sub}>{coverage.sub}</p>

      <div className={`${styles.chartCard} ${shapes.chamferLg}`}>
        <div className={styles.chart}>
          {coverage.bars.map((b, i) => (
            <div className={styles.barRow} key={b.label}>
              <div className={styles.barLabel}>{b.label}</div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{
                    width: `${(b.value / max) * 100}%`,
                    background: i === 0 ? "var(--orange)" : "var(--navy)",
                  }}
                />
              </div>
              <div className={styles.barValue}>{b.value}</div>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.note}>{coverage.note}</p>
    </PageShell>
  );
}
