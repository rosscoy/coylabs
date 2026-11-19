import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

// Each icon has its own small animation (see "Service icon micro-interactions"
// in index.css): the globe turns, the brackets push apart, the arrows spin once.
const iconProps = {
  width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true,
}

function GlobeIcon() {
  return (
    <svg {...iconProps} className="svc-icon svc-icon--globe text-accent">
      <circle cx="16" cy="16" r="13" />
      <ellipse className="meridian" cx="16" cy="16" rx="5.5" ry="13" />
      <line x1="3" y1="16" x2="29" y2="16" />
      <line x1="5" y1="10" x2="27" y2="10" />
      <line x1="5" y1="22" x2="27" y2="22" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg {...iconProps} className="svc-icon svc-icon--code text-accent">
      <polyline className="left" points="11 10 5 16 11 22" />
      <polyline className="right" points="21 10 27 16 21 22" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg {...iconProps} className="svc-icon svc-icon--refresh text-accent">
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
  },
  {
    icon: <CodeIcon />,
    heading: 'Web applications',
    copy: 'Custom tools, internal platforms, and interactive apps. Built with React and Firebase and ready to scale from the start.',
  },
  {
    icon: <RefreshIcon />,
    heading: 'Ongoing support',
    copy: 'Hosting management, content updates, and new features after launch. Available on a monthly retainer or ad hoc basis.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="What I build"
          title="From a landing page to a full web app."
          lede="Every project starts with a conversation."
        />

        {/* Desktop 3-col, mobile stacked */}
        <Reveal stagger step={100} className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.heading}
              className={[
                'svc h-full pt-12 pr-8',
                i < services.length - 1
                  ? 'md:border-r border-border md:border-b-0 border-b pb-12 md:pb-0'
                  : 'pb-0',
                i > 0 ? 'md:pl-8' : '',
              ].join(' ')}
            >
              <div className="mb-8">{s.icon}</div>
              <h3 className="font-bold text-ink text-lg">{s.heading}</h3>
              <p className="text-muted mt-3 text-base leading-relaxed">
                {s.copy}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
