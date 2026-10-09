import Link from "next/link";
import { Button } from "@/components/ui/button";
import { eyebrow, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main id="main-content" className={cn(shell, "grid min-h-[72vh] content-center justify-items-start py-24")}>
      <p className={eyebrow}>404 · Page not found</p>
      <h1 className="mt-4 max-w-[900px] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">This page wandered off the map.</h1>
      <p className="my-7 text-ink-soft">The link may be outdated, or the page may have moved.</p>
      <Button asChild><Link href="/">Return home</Link></Button>
    </main>
  );
}
