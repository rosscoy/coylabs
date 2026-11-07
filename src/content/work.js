// RECENT WORK (built-in defaults)
// ------------------------------------------------------------------
// The live cards are now managed at www.coylabsdevelopment.com/admin. This file is only
// used if the admin database is empty or can't be reached, and as the
// source for the "Import built-in cards" button in the admin panel.
//
// ------------------------------------------------------------------
// Each item in the list below is one card in the "Recent Work" section.
// Cards show on the site in the same order they appear here.
//
// To ADD a project: copy one of the { ... } blocks, paste it where you
//   want it in the list, and change the details.
// To REMOVE a project: delete its whole { ... } block (including the
//   comma after it).
// To HIDE a project without deleting it: set  hidden: true
//
// Fields:
//   title        Project name (required)
//   description  One or two sentences about the project (required)
//   tags         List of short labels, e.g. ['React', 'Vercel']
//   href         Link to the live site (required)
//   note         Small italic note under the card, or null for none
//   hidden       Optional. true = don't show this card on the site
//
// Save, commit and push. Vercel redeploys automatically.
// ------------------------------------------------------------------

const work = [
  {
    title: 'Adam Browne Creative',
    description:
      'Portfolio and services website for Dublin-based creative director Adam Browne. Clean, image-led design built to showcase his work and attract new clients.',
    tags: ['React', 'Vercel'],
    href: 'https://www.adambrownecreative.com/',
    note: null,
  },
  {
    title: 'Mandalas by Cheryl',
    description:
      'Showcase website for mandala artist Cheryl, presenting her handcrafted artwork in a warm, gallery-style layout designed to attract commissions and sales.',
    tags: ['React', 'Vercel'],
    href: 'https://mandalasbycheryl.com/',
    note: null,
  },
  {
    title: 'UtilityWatch',
    description:
      'A utility contract tracker that helps households monitor their energy and broadband deals, flag expiry dates, and avoid costly auto-renewals.',
    tags: ['React', 'Firebase', 'Vercel'],
    href: 'https://utilitywatch.vercel.app/',
    note: 'Register free to explore',
  },
  {
    title: 'RC Food Planner',
    description:
      'A personal meal planning app for organising weekly dinners, managing ingredients, and cutting down on food waste.',
    tags: ['React', 'Vercel'],
    href: 'https://rc-food-planner.vercel.app/',
    note: null,
  },
]

export default work
