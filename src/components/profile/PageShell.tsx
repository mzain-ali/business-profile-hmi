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
