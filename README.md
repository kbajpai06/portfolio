# Kartik Bajpai — Portfolio

A dark, cinematic developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Includes a terminal-style boot-sequence intro, an animated particle/signal background (in place of video), and live GitHub stats fetched server-side.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

Almost everything — name, bio, experience, projects, skills, achievements, links — lives in one file:

```
lib/data.ts
```

Edit that file and the whole site updates. No need to touch component files unless you want to change layout or design.

## Adding your real photo

Right now the hero uses a placeholder "KB" monogram card (in `components/Hero.tsx`). To use your real photo:

1. Add your image to `public/`, e.g. `public/avatar.jpg`.
2. In `components/Hero.tsx`, replace the placeholder `<span>` block inside the avatar `<div>` with a Next.js `<Image>`:

```tsx
import Image from "next/image";
// ...
<Image src="/avatar.jpg" alt="Kartik Bajpai" fill className="object-cover" />
```

## GitHub stats

`app/api/github/route.ts` fetches your public GitHub profile and repo data live at request time (cached for 1 hour). It's already pointed at `kbajpai06`.

GitHub's public API allows 60 unauthenticated requests/hour per IP, which is enough for personal traffic. If you want higher limits, create a GitHub personal access token (no special scopes needed for public data) and add it as an environment variable:

```
GITHUB_TOKEN=your_token_here
```

Add this in a `.env.local` file locally, and in your hosting provider's environment variable settings in production.

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the creators of Next.js):

1. Push this project to a GitHub repository.
2. Import the repo at vercel.com/new.
3. Add the `GITHUB_TOKEN` environment variable if you're using one.
4. Deploy — Vercel auto-detects Next.js, no config needed.

You can also deploy to Netlify, Render, or any Node host that supports Next.js.

## Resume PDF

Add your resume PDF to `public/`, e.g. `public/Kartik_Bajpai_Resume.pdf`, then link it from `components/Nav.tsx` or `components/Hero.tsx`:

```tsx
<a href="/Kartik_Bajpai_Resume.pdf" target="_blank">Resume</a>
```

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (data/labels)
