// PageShell.tsx — fixed-dimension landscape page wrapper (13.333in x 7.5in).
// Every profile page component wraps its content in <PageShell>. Handles the
// page-break-after rule and optional corner mark + page-number footer.
import styles from "./PageShell.module.css";

type PageShellProps = {
  children: React.ReactNode;
  dark?: boolean;
  pageNumber?: number;
  totalPages?: number;
  showCornerMark?: boolean;
  className?: string;
};

function LeftTechnicalBorder({ dark }: { dark: boolean }) {
  return (
    <div className={styles.leftBorderContainer}>
      <div className={styles.borderLineNavy} />
      <div className={styles.borderLineOrange} />
      <div className={styles.tickContainer}>
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.tick} ${i % 2 === 0 ? styles.tickNavy : styles.tickOrange}`}
            style={{ top: `${(i * 3.33).toFixed(2)}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function PageShell({
  children,
  dark = false,
  pageNumber,
  totalPages = 10,
  showCornerMark = true,
  className = "",
}: PageShellProps) {
  return (
    <section className={`${styles.page} ${dark ? styles.dark : ""} ${className}`}>
      <LeftTechnicalBorder dark={dark} />
      {children}
      {showCornerMark && <span className={styles.cornerMark} />}
      {pageNumber != null && (
        <span className={styles.pageNum}>
          <b>{String(pageNumber).padStart(2, "0")}</b> / {totalPages}
        </span>
      )}
    </section>
  );
}
