// LocationsPage.tsx — page 8. Content: lib/content.ts → locations
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { locations } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./LocationsPage.module.css";

export default function LocationsPage() {
  return (
    <PageShell pageNumber={8}>
      <span className={shapes.eyebrow}><span className={shapes.diamond} />{locations.eyebrow}</span>
      <h2 className={styles.headline}>{locations.headline}</h2>
      <div className={styles.row}>
        {locations.branches.map((b) => (
          <div className={styles.card} key={b.name}>
            <div className={styles.imgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
                <div><b>Phone</b> &nbsp;{b.phone}</div>
                <div><b>Email</b> &nbsp;{b.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
