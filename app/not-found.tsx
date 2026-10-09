import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="product-page">
        <div className="shell">
          <section className="page-not-found" aria-labelledby="not-found-title">
            <Search size={34} />
            <p className="eyebrow">Page unavailable</p>
            <h1 id="not-found-title">We could not find that page.</h1>
            <p>
              The page may still be in progress, or the link may no longer be
              available.
            </p>
            <Link className="button button-primary" href="/#shop">
              <ArrowLeft size={17} /> Back to supplies
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
