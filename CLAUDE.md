# Coylabs — Claude Session Brief

## What this is
Production website for Ross Coy's freelance web development business.
Single-page React app, deployed to Vercel at coylabs.dev.

## Stack
- React 18 + Vite
- Tailwind CSS v3 (semantic brand tokens — see tailwind.config.js)
- Formspree for the intake form (replace REPLACE_WITH_YOUR_ID in IntakeForm.jsx)
- Deployed via Vercel (vercel.json SPA rewrite included)

## Brand
- Business name: Coylabs
- Owner: Ross Coy, Dublin, Ireland
- Tagline: "Bespoke web design & development."
- Tone: warm, approachable, clearly competent. Local expert, not faceless agency.

## Colour tokens (tailwind.config.js)
| Token         | Hex       | Usage                          |
|---------------|-----------|--------------------------------|
| accent        | #C96A2A   | CTAs, highlights, icons        |
| accent-hover  | #A3531F   | Hover state for accent         |
| surface       | #FFFFFF   | Cards, nav                     |
| warm          | #FAFAF8   | Page background                |
| border        | #E7E5E0   | Borders, dividers              |
| tagbg         | #F5F4F0   | Tag pills                      |
| ink           | #1A1A1A   | Primary text, headings         |
| muted         | #6B7280   | Secondary text                 |

Footer bg: #1A1A1A (ink), footer text: #FAFAF8

## Typography
Plus Jakarta Sans (Google Fonts), weights 400/500/600/700. Imported in index.html.
Extended in tailwind.config.js as `font-sans`.

## File structure
```
src/
  components/
    Nav.jsx          — Fixed nav, hamburger mobile menu
    Hero.jsx         — Full-height hero, badge, headline, CTA buttons, trust signals
    Work.jsx         — 2×2 portfolio grid (2 real + 2 placeholder cards)
    Services.jsx     — 3-column service listing with SVG icons
    About.jsx        — 2-col layout, bio copy, stats, decorative SVG
    QuoteSection.jsx — Section wrapper for IntakeForm
    IntakeForm.jsx   — 4-step multi-step form, Formspree POST, validation
    Chip.jsx         — Reusable chip/tag component (single + multi select)
    Footer.jsx       — Dark footer, inverted logo, nav links, copyright
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
Push to GitHub and connect to Vercel. The vercel.json handles SPA routing.
Set domain to coylabs.dev in the Vercel project settings.

## Contact
hello@coylabs.dev
