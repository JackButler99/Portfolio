import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { profile, skillGroups } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description: "About the full-stack developer and data/AI engineer behind the work.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="A builder who thinks in systems, users, and evidence."
        description={profile.shortBio}
      />

      <section className="about-intro shell">
        <div className="about-monogram" aria-hidden="true">{profile.initials}</div>
        <div className="about-story">
          <p className="lead">I work where product engineering and data meet.</p>
          <p>That means I can design a clear interface, reason about the backend behind it, and understand the analysis or model that makes the product valuable. Clients get fewer handoffs and a partner who can follow the problem across the stack.</p>
          <p>I care about maintainable choices, honest progress updates, and software that makes a real task easier. The goal is not to maximize complexity. It is to build the right thing, make it dependable, and leave it understandable.</p>
          <div className="about-facts">
            <div><span>Based in</span><strong>Indonesia</strong></div>
            <div><span>Working with</span><strong>Remote teams</strong></div>
            <div><span>Communication</span><strong>English · Indonesian</strong></div>
          </div>
        </div>
      </section>

      <section className="section skill-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Technical toolkit</p>
              <h2>Broad enough to connect the work. Focused enough to ship it well.</h2>
            </div>
            <p>Update this list to match the tools you can confidently discuss, demonstrate, and use on a client project.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles shell section">
        <div>
          <p className="eyebrow">Working principles</p>
          <h2>What you can expect.</h2>
        </div>
        <div className="principle-list">
          <article><span>01</span><h3>Clarity over theatre</h3><p>Direct communication, visible tradeoffs, and no jargon used to hide uncertainty.</p></article>
          <article><span>02</span><h3>Evidence over assumption</h3><p>Important decisions are tested against users, data, or the smallest useful experiment.</p></article>
          <article><span>03</span><h3>Progress over perfectionism</h3><p>Working increments create better feedback than a long invisible build.</p></article>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
