"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/portfolio-data";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const project = String(data.get("project") ?? "");
    const details = String(data.get("details") ?? "");
    const subject = encodeURIComponent(`Project enquiry from ${name}: ${project}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject: ${project}\n\n${details}`);

    setStatus("Your email app should open with the project details filled in.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <Input name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <Input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label>
        <span>What are you looking to build?</span>
        <Input name="project" placeholder="Web app, dashboard, forecasting workflow…" required />
      </label>
      <label>
        <span>Project details</span>
        <Textarea
          name="details"
          rows={7}
          placeholder="A short note about the problem, scope, timeline, and what success looks like."
          required
        />
      </label>
      <Button type="submit" size="lg">
        Prepare email <Send aria-hidden="true" />
      </Button>
      <p className="form-help">This form opens your email app. It does not store or send your data automatically.</p>
      {status ? <output className="form-status">{status}</output> : null}
    </form>
  );
}
