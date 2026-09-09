# Junjie Liu — Software Engineering Portfolio

A responsive personal portfolio built with Next.js 16, React, TypeScript, Tailwind CSS,
and the App Router.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — introduction, selected work, engineering approach, and contact callout
- `/projects` — complete project index
- `/projects/[slug]` — reusable case studies generated from project data
- `/about` — personal background, interests, and working style
- `/background` — education, coursework, technical toolkit, and spoken languages
- `/resume` — web resume
- `/contact` — email and LinkedIn contact options

## Content

- Profile links and contact details live in `src/data/site.ts`.
- Project summaries and case studies live in `src/data/projects.ts`.
- Education, coursework, skills, and languages live in `src/data/background.ts`.
- About and resume narrative content lives in their respective page components.

The project data drives the homepage carousel, project index, static case-study routes,
page metadata, resume entries, and related-project links.

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Keep the detected Next.js defaults and deploy.
4. After the production URL is known, set `metadataBase` in `src/app/layout.tsx`.
