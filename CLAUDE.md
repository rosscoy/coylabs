# Coylabs — Claude Session Brief

## What this is
Production website for Ross Coy's freelance web development business.
Live at www.coylabsdevelopment.com.
Single-page React app, hosted on Cloudflare (Workers static assets) at www.coylabsdevelopment.com.

## Stack
- React 18 + Vite
- Tailwind CSS v3 (semantic brand tokens — see tailwind.config.js)
- Formspree for the intake form (endpoint in src/config.js)
- Deployed via Cloudflare Workers Builds from GitHub (see Deployment)

## Brand
- Business name: Coylabs
- Owner: Ross Coy, Dublin, Ireland
- Tagline: "Bespoke web design & development."
- Tone: warm, approachable, clearly competent. Local expert, not faceless agency.

## Colour tokens (tailwind.config.js)
| Token         | Hex       | Usage                          |
|---------------|-----------|--------------------------------|
| accent        | #00C8FF   | CTAs, highlights, icons        |
| accent-hover  | #33D4FF   | Hover state for accent         |
| surface       | #172534   | Cards, nav                     |
| warm          | #0E1B2A   | Page background                |
| border        | #223344   | Borders, dividers              |
| tagbg         | #1A2D40   | Tag pills                      |
| ink           | #E8F4FF   | Primary text, headings         |
| muted         | #7895A8   | Secondary text                 |

Footer bg: #091524 (deep navy), footer text: #7895A8

## Typography
Plus Jakarta Sans (Google Fonts), weights 400/500/600/700. Imported in index.html.
Extended in tailwind.config.js as `font-sans`.

## File structure
```
src/
  components/
    Nav.jsx          — Fixed nav, hamburger mobile menu
    Hero.jsx         — Full-height hero, badge, headline, CTA buttons, trust signals
    Work.jsx         — Portfolio grid, reads items from src/content/work.js
    Services.jsx     — 3-column service listing with SVG icons
    About.jsx        — 2-col layout, bio copy, stats, decorative SVG
    QuoteSection.jsx — Section wrapper for IntakeForm
    IntakeForm.jsx   — 4-step multi-step form, Formspree POST, validation
    Chip.jsx         — Reusable chip/tag component (single + multi select)
    Footer.jsx       — Dark footer, inverted logo, nav links, copyright
  content/
    work.js          — Recent Work items (Ross edits this directly)
  App.jsx
  main.jsx
  index.css          — Tailwind imports + html { scroll-behavior: smooth }
index.html           — Font import, page title
tailwind.config.js   — Brand tokens
vercel.json          — SPA rewrite rule
```

## Section IDs (anchor nav)
- #home — Hero
- #work — Portfolio grid
- #services — Service columns
- #about — About / bio
- #quote — Intake form

## Intake form
4-step form using React useState only (no external libs).
Submits to Formspree — update the URL in `src/components/IntakeForm.jsx`:
```
const FORMSPREE_URL = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID'
```
Formspree endpoint is live: https://formspree.io/f/xwvwappg

## Deployment
Hosted on Cloudflare Workers (static assets) since 2026-11-16, moved off Vercel because Vercel Hobby is non-commercial only.
- Worker `coylabs` in Ross's Cloudflare account, connected to GitHub `rosscoy/coylabs`; every push to `master` builds and deploys automatically.
- The `VITE_FIREBASE_*` values are set as **Build** variables in the Worker settings (Settings → Build → Variables and secrets), not runtime vars. Vite needs them at build time.
- SPA routes (e.g. /admin) fall back to index.html automatically.
- Live domain: www.coylabsdevelopment.com (apex redirects to www via a Cloudflare Redirect Rule). Test URL: coylabs.rosscoy95.workers.dev.
- The domain is still *registered* at Vercel; DNS is on Cloudflare. vercel.json is a leftover until the Vercel project is deleted.
- coylabs.dev is not a registered domain, never use it.

## Contact
hello@coylabsdevelopment.com (Cloudflare Email Routing on coylabsdevelopment.com; set in src/config.js). coylabs.dev is not a registered domain, never use it.

## Admin panel (/admin)
- Google sign-in, only rosscoy95@gmail.com is allowed (checked in AuthContext and enforced in firestore.rules)
- Firebase project: coylabs-dev. Firestore collection `work` holds Recent Work cards (title, description, tags, href, note, hidden, order)
- Public Work section shows src/content/work.js first, then swaps in Firestore items if any exist
- Admin page and Firebase Auth are lazy-loaded so they don't weigh down the public page
- Deploy rule changes with: firebase deploy --only firestore:rules
