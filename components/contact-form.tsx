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
    <form className="grid gap-[22px]" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-[#536174]">Name</span>
          <Input className="h-[50px] rounded-lg border-[#d1dae5] bg-white text-base shadow-none focus-visible:border-primary focus-visible:ring-primary/10" name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-[#536174]">Email</span>
          <Input className="h-[50px] rounded-lg border-[#d1dae5] bg-white text-base shadow-none focus-visible:border-primary focus-visible:ring-primary/10" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-bold text-[#536174]">What are you looking to build?</span>
        <Input className="h-[50px] rounded-lg border-[#d1dae5] bg-white text-base shadow-none focus-visible:border-primary focus-visible:ring-primary/10" name="project" placeholder="Web app, dashboard, forecasting workflow…" required />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold text-[#536174]">Project details</span>
        <Textarea
          className="min-h-[172px] resize-y rounded-lg border-[#d1dae5] bg-white text-base shadow-none focus-visible:border-primary focus-visible:ring-primary/10"
          name="details"
          rows={7}
          placeholder="A short note about the problem, scope, timeline, and what success looks like."
          required
        />
      </label>
      <Button className="justify-self-start" type="submit" size="lg">
        Prepare email <Send aria-hidden="true" />
      </Button>
      <p className="-mt-2.5 text-xs text-muted-foreground">This form opens your email app. It does not store or send your data automatically.</p>
      {status ? <output className="-mt-2.5 text-xs text-blue-dark">{status}</output> : null}
    </form>
  );
}
