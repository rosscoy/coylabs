function GlobeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C96A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="13" />
      <ellipse cx="16" cy="16" rx="5.5" ry="13" />
      <line x1="3" y1="16" x2="29" y2="16" />
      <line x1="5" y1="10" x2="27" y2="10" />
      <line x1="5" y1="22" x2="27" y2="22" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C96A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="11 10 5 16 11 22" />
      <polyline points="21 10 27 16 21 22" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C96A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M27 6v7h-7" />
      <path d="M5 26v-7h7" />
      <path d="M7.5 13A11 11 0 0 1 25 11l2 2" />
      <path d="M24.5 19A11 11 0 0 1 7 21l-2-2" />
    </svg>
  )
}

const services = [
  {
    icon: <GlobeIcon />,
    heading: 'Business websites',
    copy: 'Brochure sites, service pages, and landing pages built for Irish SMEs. Fast, mobile-friendly, and set up to rank on Google from day one.',
    price: 'From €800',
  },
  {
    icon: <CodeIcon />,
    heading: 'Web applications',
    copy: 'Custom tools, internal platforms, and interactive apps. Built with React and Firebase — scalable from the start.',
    price: 'From €1,500',
  },
  {
    icon: <RefreshIcon />,
    heading: 'Ongoing support',
    copy: 'Hosting management, content updates, and new features after launch. Available on a monthly retainer or ad hoc basis.',
    price: 'Flexible',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-warm py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-accent font-semibold uppercase"
          style={{ fontSize: 12, letterSpacing: '0.1em' }}
        >
          WHAT WE BUILD
        </p>
        <h2
          className="font-bold text-ink mt-2"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
        >
          From a landing page to a full web app.
        </h2>
        <p className="text-muted mt-2" style={{ fontSize: 16 }}>
          Every project starts with a conversation.
        </p>

        {/* Desktop 3-col, mobile stacked */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.heading}
              className={[
                'pt-12 pr-8',
                i < services.length - 1
                  ? 'md:border-r border-border md:border-b-0 border-b pb-12 md:pb-0'
                  : 'pb-0',
                i > 0 ? 'md:pl-8' : '',
              ].join(' ')}
            >
              <div style={{ marginBottom: 32 }}>{s.icon}</div>
              <h3 className="font-bold text-ink text-lg">{s.heading}</h3>
              <p className="text-muted mt-3" style={{ fontSize: 14, lineHeight: 1.7 }}>
                {s.copy}
              </p>
              <p
                className="font-semibold text-accent mt-3"
                style={{ fontSize: 13 }}
              >
                {s.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
