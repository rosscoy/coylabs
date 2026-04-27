const realCards = [
  {
    title: 'Adam Browne Creative',
    description:
      'Portfolio and services website for Dublin-based creative director Adam Browne. Clean, image-led design built to showcase his work and attract new clients.',
    tags: ['React', 'Vercel'],
    href: 'https://adambrowne.creative',
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

function TagPill({ label }) {
  return (
    <span
      className="text-muted font-medium"
      style={{
        background: '#EAEBEB',
        border: '1px solid #BBBFBF',
        borderRadius: 999,
        padding: '3px 10px',
        fontSize: 11,
      }}
    >
      {label}
    </span>
  )
}

function RealCard({ title, description, tags, href, note }) {
  return (
    <div
      className="bg-surface rounded-xl p-6 border border-border transition-colors duration-200 hover:border-accent flex flex-col"
      style={{ borderRadius: 12 }}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <h3 className="font-bold text-ink" style={{ fontSize: 18 }}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
      </div>
      <p className="text-muted mt-2.5 flex-1" style={{ fontSize: 14, lineHeight: 1.6 }}>
        {description}
      </p>
      <div className="flex items-end justify-between mt-4 gap-2 flex-wrap">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline"
          style={{ fontSize: 14 }}
        >
          View site →
        </a>
        {note && (
          <span className="text-muted italic" style={{ fontSize: 11 }}>
            {note}
          </span>
        )}
      </div>
    </div>
  )
}


export default function Work() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-accent font-semibold uppercase"
          style={{ fontSize: 12, letterSpacing: '0.1em' }}
        >
          RECENT WORK
        </p>
        <h2
          className="font-bold text-ink mt-2"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
        >
          Built by Coylabs Development
        </h2>
        <p className="text-muted mt-2" style={{ fontSize: 16 }}>
          A selection of sites and apps we've shipped.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {realCards.map((card) => (
            <RealCard key={card.title} {...card} />
          ))}
        </div>

        <p className="text-center text-muted mt-10" style={{ fontSize: 14 }}>
          More work available on request — get in touch to see examples relevant
          to your sector.
        </p>
      </div>
    </section>
  )
}
