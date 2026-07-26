// WhyUsPage.tsx — page 3. Content: lib/content.ts → whyUs
import PageShell from "./PageShell";
import { Icon } from "./Icons";
import { AudienceIcon } from "./AudienceIcons";
import { whyUs } from "@/lib/content";
import shapes from "./shapes.module.css";
import styles from "./WhyUsPage.module.css";

export default function WhyUsPage() {
  return (
    <PageShell pageNumber={3} className={styles.whyUsShell}>
      {/* Background Visual Image */}
      <div className={styles.bgImageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/whyus/whyus-background.jpg"
          alt="Why Us background visual"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.eyebrowRow}>
        <div className={styles.eyebrowCard}>
          <span className={shapes.eyebrow}>
            <span className={shapes.diamond} />
            {whyUs.eyebrow}
          </span>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Left Column: Headings & 2x2 Cards Grid */}
        <div className={styles.leftCol}>
          <div className={styles.headWrap}>
            <h2>
              {whyUs.headline.plain}
              <span className={styles.accent}>{whyUs.headline.accent}</span>
            </h2>
            <p className={styles.sub}>{whyUs.sub}</p>
          </div>

          <div className={styles.cardsGridWrapper}>
            {/* Single Vertical Connector Line running through the middle */}
            <div className={styles.centralVertLine} />
            {/* Central Horizontal Spine & Diamond Node */}
            <div className={styles.centralHorizSpine} />
            <div className={styles.centerDiamond} />

            <div className={styles.cardsGrid}>
              {whyUs.cards.map((c, i) => (
                <div
                  className={`${styles.card} ${c.accent === "navy" ? styles.cardNavy : styles.cardOrange}`}
                  key={c.title}
                >
                  {/* Clean, Symmetrical Connector Nodes & Attached Lines */}
                  {i === 0 && (
                    <>
                      <div
                        className={`${styles.cardDot} ${styles.dotBottom} ${styles.dotOrange}`}
                      />
                      <div
                        className={`${styles.cardDot} ${styles.dotRight} ${styles.dotOrange}`}
                      />
                      <div className={styles.cardVertLineLeft} />
                      <div className={styles.cardHorizBranchLeft} />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <div
                        className={`${styles.cardDot} ${styles.dotLeft} ${styles.dotNavy}`}
                      />
                      <div
                        className={`${styles.cardDot} ${styles.dotBottom} ${styles.dotNavy}`}
                      />
                      <div className={styles.cardVertLineRight} />
                      <div className={styles.cardHorizBranchRight} />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <div
                        className={`${styles.cardDot} ${styles.dotTop} ${styles.dotOrange}`}
                      />
                      <div
                        className={`${styles.cardDot} ${styles.dotRight} ${styles.dotOrange}`}
                      />
                      <div className={styles.cardHorizBranchLeft} />
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <div
                        className={`${styles.cardDot} ${styles.dotTop} ${styles.dotNavy}`}
                      />
                      <div
                        className={`${styles.cardDot} ${styles.dotLeft} ${styles.dotNavy}`}
                      />
                      <div className={styles.cardHorizBranchRight} />
                    </>
                  )}
                  {/* Circuit Vector Watermark */}
                  <svg
                    className={styles.cardCircuitBg}
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M 0,90 L 25,90 L 40,75 L 75,75"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M 0,70 L 15,70 L 30,55 L 60,55"
                      strokeWidth="1.2"
                    />
                    <circle cx="75" cy="75" r="2.5" fill="currentColor" />
                    <circle cx="60" cy="55" r="2.5" fill="currentColor" />
                  </svg>

                  {/* Corner Accent Diagonal Stripes (Bottom Right) */}
                  <svg
                    className={styles.cardCornerStripes}
                    viewBox="0 0 40 20"
                    fill="none"
                  >
                    <line
                      x1="10"
                      y1="18"
                      x2="16"
                      y2="10"
                      stroke={c.accent === "navy" ? "#14669e" : "#d98812"}
                      strokeWidth="1.8"
                      opacity="0.45"
                      strokeLinecap="round"
                    />
                    <line
                      x1="17"
                      y1="18"
                      x2="23"
                      y2="10"
                      stroke={c.accent === "navy" ? "#14669e" : "#d98812"}
                      strokeWidth="1.8"
                      opacity="0.45"
                      strokeLinecap="round"
                    />
                    <line
                      x1="24"
                      y1="18"
                      x2="30"
                      y2="10"
                      stroke={c.accent === "navy" ? "#14669e" : "#d98812"}
                      strokeWidth="1.8"
                      opacity="0.45"
                      strokeLinecap="round"
                    />
                    <line
                      x1="31"
                      y1="18"
                      x2="37"
                      y2="10"
                      stroke={c.accent === "navy" ? "#14669e" : "#d98812"}
                      strokeWidth="1.8"
                      opacity="0.45"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className={styles.cardHeader}>
                    <div
                      className={`${styles.iconBox} ${
                        c.accent === "navy"
                          ? styles.iconBoxNavy
                          : styles.iconBoxOrange
                      }`}
                    >
                      <Icon
                        name={c.icon}
                        color={c.accent === "navy" ? "#14669e" : "#d98812"}
                      />
                    </div>
                    <h3>{c.title}</h3>
                  </div>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Audience Industry Header + Photo with Glass Overlay Title */}
        <div className={styles.rightCol}>
          {/* Audience Industry Strip */}
          {whyUs.audience && (
            <div className={styles.audienceSection}>
              <div className={styles.audienceTitle}>
                Built for Industry Professionals
              </div>
              <div className={styles.audienceStrip}>
                {whyUs.audience.map((a) => (
                  <div key={a.id} className={styles.audienceItem}>
                    <div className={styles.audiencePillBox}>
                      {a.img ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={a.img}
                          alt={a.label}
                          className={styles.audienceImg}
                        />
                      ) : (
                        <AudienceIcon
                          name={a.id}
                          color="var(--navy)"
                          size={24}
                          strokeWidth={1.4}
                        />
                      )}
                    </div>
                    <span className={styles.audienceLabel}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Photo with Glass Overlay Title */}
          <div className={styles.photoContainer}>
            <div className={styles.photoWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={whyUs.photo.src}
                alt="HMI Parts counter staff helping customer"
                className={styles.photoImg}
              />
              {whyUs.photo.caption && (
                <div className={styles.imageOverlayCard}>
                  <span>{whyUs.photo.caption}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
