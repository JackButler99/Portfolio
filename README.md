# Full-Stack + Data Portfolio

A multi-page Next.js portfolio template for a freelance full-stack web developer and data science engineer.

## Pages

- `/` — landing page
- `/projects` — all portfolio projects
- `/projects/[slug]` — individual case studies
- `/services` — service offers and working process
- `/about` — profile, skills, and principles
- `/contact` — contact details and email enquiry form

## Edit the content

Start with `lib/portfolio-data.ts`. It contains the name, bio, contact details, services, skills, and project case-study templates used throughout the site.

The main styles are in `app/globals.css`. Shared sections and navigation live in `components/`.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open the localhost address shown in the terminal.

To confirm that the production build succeeds:

```bash
npm run build
```

## Important before publishing

- Replace `YOUR NAME`, initials, email, and profile URLs in `lib/portfolio-data.ts`.
- Replace every demo case study with verified work and outcomes.
- Keep only tools you can confidently discuss and use.
- Add real screenshots only when you own them or have permission to use them.
- Test the email link and all navigation routes.

The contact form does not store visitor data. It prepares a message and opens the visitor's email application.
