import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page wandered off the map.</h1>
      <p>The link may be outdated, or the page may have moved.</p>
      <Button asChild><Link href="/">Return home</Link></Button>
    </main>
  );
}
