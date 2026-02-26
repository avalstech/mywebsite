# Victor Anene – Personal Website (Vite + React + Tailwind)

Production-ready personal brand website for Victor Anene.

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## What to edit

- **Brand + links:** `src/components/site-layout.tsx` (social links, email, WhatsApp, phone)
- **Content:**
  - Home: `src/pages/home.tsx`
  - About: `src/pages/about.tsx`
  - Projects: `src/pages/projects.tsx`
  - Speaking: `src/pages/speaking.tsx`
  - Contact: `src/pages/contact.tsx`
- **SEO:** `index.html` + `public/og.svg`

## Deployment

This is a standard Vite build. Deploy using AWS Amplify Hosting (or any static host):

- Build command: `npm ci && npm run build`
- Output directory: `dist`

