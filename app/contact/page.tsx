import type { Metadata } from "next";
import { Clock3, Globe2, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss a full-stack web development or data science project.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Start a conversation"
        title="Tell me what you’re trying to improve."
        description="Share the problem, where the work stands today, and what a useful outcome looks like. I’ll respond with the clearest next step."
      />
      <section className="contact-layout shell">
        <div className="contact-aside">
          <div className="contact-card">
            <Mail aria-hidden="true" />
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-card">
            <Globe2 aria-hidden="true" />
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
          <div className="contact-card">
            <Clock3 aria-hidden="true" />
            <span>Availability</span>
            <strong>{profile.availability}</strong>
          </div>
          <div className="template-reminder">
            <strong>Before publishing</strong>
            <p>Replace the email and profile links in <code>lib/portfolio-data.ts</code>.</p>
          </div>
        </div>
        <div>
          <h2>Project enquiry</h2>
          <p className="contact-form-intro">A few useful details are enough to begin. Please don’t include passwords or sensitive data.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
