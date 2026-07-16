# ACT Decks

A Next.js rebuild of [actdecks.com.au](https://actdecks.com.au) — a Canberra deck,
pergola and outdoor-living builder. Marketing site with a services catalogue, project
showcase, and a working contact form.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server (HMR) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

> **Tip:** don't run `npm run build` while `npm run dev` is running — they share the
> `.next` folder and will clash. Stop the dev server first.

## Environment variables

The contact form emails enquiries via [Resend](https://resend.com). Copy the example
file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (to send mail) | Resend API key (`re_…`) |
| `CONTACT_TO_EMAIL` | No | Where enquiries are delivered (default `info@actdecks.com.au`) |
| `CONTACT_FROM_EMAIL` | No | Sender address; use a domain verified in Resend |

Without a key, the form validates but does not send: it soft-succeeds in development
and returns a clear "not configured" message in production. `.env.local` is gitignored —
set these as environment variables in your host, never commit them.

## Project structure

```
app/
  page.tsx                     Home (video hero, services, projects)
  about-us/                    About + Get in touch video
  outdoor-living/              Outdoor living overview
  decking-canberra/            Service: Decks
  pergolas-canberra/           Service: Pergolas
  handrails-stairs-canberra/   Service: Handrails & Stairs
  pool-fencing-and-privacy-screens-canberra/
  windows-and-doors-canberra/  Service: Windows & Doors
  showcase/                    All 17 projects (alternating rows)
  portfolio/[slug]/            Individual project pages + galleries
  contact/                     Contact form + map
  privacy-policy/
  api/contact/route.ts         Contact form handler (Resend)
components/                    Navbar, Footer, PageHero, GetInTouch, ContactForm, cards
lib/
  data.ts                      Services, projects and project galleries
  rate-limit.ts                In-memory rate limiter for the contact API
public/images/                 Logo, hero videos, service and project photos
```

Site content (services and projects) lives in [`lib/data.ts`](lib/data.ts) — edit there
to change copy, add projects, or update galleries.

## Security

- **CSP + security headers** (`next.config.mjs`): Content-Security-Policy locked to
  same-origin plus the Google Maps embed and self-hosted video; HSTS, `X-Frame-Options`,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`. `X-Powered-By` removed.
- **Contact form**: server-side validation, HTML escaping, a honeypot field, and
  per-IP rate limiting (`lib/rate-limit.ts`).
- **Dependabot** (`.github/dependabot.yml`): weekly dependency updates.

## Deploying to Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new) — the framework is
   auto-detected as Next.js; no build config needed.
2. Add the environment variables (`RESEND_API_KEY`, and optionally `CONTACT_TO_EMAIL` /
   `CONTACT_FROM_EMAIL`) in **Project → Settings → Environment Variables**.
3. Deploy. HSTS and `upgrade-insecure-requests` take effect automatically over Vercel's HTTPS.

### Notes before going live

- **Sending domain**: verify a domain in Resend and set `CONTACT_FROM_EMAIL` to an
  address on it (the default uses Resend's shared onboarding sender, for testing only).
- **Media weight**: the hero videos (~116 MB total) and project photos are full-resolution.
  Consider compressing them or moving the videos to a CDN / Git LFS for faster loads.
- **Rate limiting** is per-instance (in-memory). For a global guarantee on serverless,
  back it with a shared store such as Upstash Redis.

---

Rebuild of the original site; all imagery and copy belong to ACT Decks.
