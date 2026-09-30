import Link from "next/link";
import { navItems, profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </span>
          </Link>
          <p className="footer-note">Built to turn complex product and data work into useful, dependable software.</p>
        </div>

        <div className="footer-links">
          <span className="footer-label">Explore</span>
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-links">
          <span className="footer-label">Connect</span>
          <Link href="/contact">Upwork</Link>
          <Link href="/contact">GitHub</Link>
          <Link href="/contact">LinkedIn</Link>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
