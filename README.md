# Full-Stack + Data Portfolio

A multi-page Next.js portfolio template for a freelance full-stack web developer and data science engineer.

## Pages

- `/` — landing page
- `/projects` — all portfolio projects
- `/projects/[slug]` — individual case studies
- `/services` — service offers and working process
- `/about` — profile, skills, and principles
- `/contact` — project enquiry guidance with a direct link to the Upwork profile

## Edit the content

Start with `lib/portfolio-data.ts`. It contains the name, bio, Upwork profile URL, contact button label, services, skills, and project case-study templates used throughout the site.

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

- Keep the name, initials, and Upwork profile URL in `lib/portfolio-data.ts` current.
- Replace every demo case study with verified work and outcomes.
- Keep only tools you can confidently discuss and use.
- Add real screenshots only when you own them or have permission to use them.
- Test the Upwork contact links and all navigation routes.

Project enquiries go through Upwork. The navigation, homepage, shared contact section, footer, and `/contact` page all link to the same Upwork profile. The site does not display a personal email address or provide an enquiry form. Keep personal contact details and links to external messaging or scheduling tools out of the public portfolio.
