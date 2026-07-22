// app/page.tsx — simple index; the actual document lives at /print.
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 48, fontFamily: "sans-serif", maxWidth: 640 }}>
      <h1>HMI Parts — Business Profile</h1>
      <p>
        This project renders the business profile as a real Next.js page at{" "}
        <Link href="/print">/print</Link>, which is what gets exported to PDF
        (see <code>npm run pdf</code>).
      </p>
    </main>
  );
}
