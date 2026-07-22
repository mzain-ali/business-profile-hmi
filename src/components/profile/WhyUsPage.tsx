// WhyUsPage.tsx — page 3. Content: lib/content.ts → whyUs
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { AudienceIcon } from "./AudienceIcons";
import { whyUs } from "@/lib/content";
import { BackgroundBlueprintSVG } from "./SparePartsSVGs";
import shapes from "./shapes.module.css";
import styles from "./WhyUsPage.module.css";

export default function WhyUsPage() {
  return (
    <PageShell pageNumber={3}>
      {/* Background blueprint line-art watermark */}
      <div className={styles.bgWatermark}>
        <BackgroundBlueprintSVG color="var(--navy)" strokeWidth={0.8} />
      </div>

      <span className={shapes.eyebrow}>
        <span className={shapes.diamond} />
        {whyUs.eyebrow}
      </span>

      <div className={styles.grid}>
        {/* Left Column: Headings & 2x2 Cards Grid */}
        <div className={styles.leftCol}>
          <div className={styles.headWrap}>
            <h2>{whyUs.headline}</h2>
            <p className={styles.sub}>{whyUs.sub}</p>
          </div>

          <div className={styles.cardsGrid}>
            {whyUs.cards.map((c, i) => (
              <div
                className={`${styles.card} ${shapes.chamferMd}`}
                key={c.title}
                style={{ borderTopColor: i % 2 === 0 ? "var(--orange)" : "var(--navy)" }}
              >
                <div
                  className={`${shapes.iconBox} ${
                    c.accent === "navy" ? shapes.iconBoxNavy : ""
                  }`}
                >
                  <Icon
                    name={c.icon}
                    color={c.accent === "navy" ? "var(--navy)" : "var(--orange-deep)"}
                  />
                </div>
                <div className={styles.cardText}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Supporting Photo & Audience Icons */}
        <div className={styles.rightCol}>
          <div className={styles.photoWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={whyUs.photo.src}
              alt="HMI Parts counter staff helping customer"
              className={styles.photoImg}
            />
          </div>
          {whyUs.photo.caption && (
            <div className={styles.photoCaption}>{whyUs.photo.caption}</div>
          )}

          {/* Audience Industry Strip */}
          {whyUs.audience && (
            <div className={styles.audienceSection}>
              <div className={styles.audienceTitle}>Built for Industry Professionals</div>
              <div className={styles.audienceStrip}>
                {whyUs.audience.map((a) => (
                  <div key={a.id} className={styles.audienceItem}>
                    <div className={styles.audienceIconBox}>
                      <AudienceIcon name={a.id} color="var(--navy)" size={26} strokeWidth={1.4} />
                    </div>
                    <span className={styles.audienceLabel}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
