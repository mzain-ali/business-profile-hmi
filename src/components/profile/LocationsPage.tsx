// LocationsPage.tsx — page 8. Content: lib/content.ts → locations
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { locations } from "@/lib/content";
import { HeavyIndustrialGearSVG } from "./SparePartsSVGs";
import shapes from "./shapes.module.css";
import styles from "./LocationsPage.module.css";

export default function LocationsPage() {
  return (
    <PageShell pageNumber={8}>
      {/* Top right gear watermark matching visual system */}
      <div className={styles.topRightWheel}>
        <HeavyIndustrialGearSVG color="var(--navy)" />
      </div>

      <span className={shapes.eyebrow}>
        <span className={shapes.diamond} />
        {locations.eyebrow}
      </span>
      <h2 className={styles.headline}>{locations.headline}</h2>

      <div className={styles.row}>
        {locations.branches.map((b, i) => (
          <div
            className={`${styles.card} ${shapes.chamferLg}`}
            key={b.name}
            style={{ borderBottomColor: i % 2 === 0 ? "var(--orange)" : "var(--navy)" }}
          >
            <div className={styles.imgWrap}>
              <img src={b.photo} alt={b.name} className={styles.photo} />
              <span className={styles.pin}>
                <Icon name="pin" size={11} color="#F5A623" />
                {b.pin}
              </span>
            </div>
            <div className={styles.body}>
              <h3>{b.name}</h3>
              <p className={styles.addr}>{b.address}</p>
              <div className={styles.meta}>
                <div><b>Phone:</b> &nbsp;{b.phone}</div>
                <div><b>Email:</b> &nbsp;{b.email}</div>
                {b.hours && <div><b>Hours:</b> &nbsp;{b.hours}</div>}
              </div>
              <div className={styles.actionRow}>
                {b.mapUrl && (
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.directionsBtn}
                  >
                    <Icon name="pin" size={12} color="var(--ink)" />
                    Get Directions
                  </a>
                )}
              </div>
              <div className={styles.mapPreview}>
                <Icon name="pin" size={14} color="var(--orange-deep)" />
                <span>Oman Branch Map Pin • {b.pin}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
