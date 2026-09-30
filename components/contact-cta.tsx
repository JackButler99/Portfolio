import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="cta-section shell">
      <div>
        <p className="eyebrow">Have a useful problem to solve?</p>
        <h2>Let’s turn it into a clear, shippable product.</h2>
      </div>
      <div className="cta-actions">
        <Button asChild size="lg">
          <Link href="/contact">Discuss your project</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/projects">See selected work</Link>
        </Button>
      </div>
    </section>
  );
}
