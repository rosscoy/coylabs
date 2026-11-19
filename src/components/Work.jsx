import { useEffect, useState } from 'react'
import fallbackWork from '../content/work'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function TagPill({ label }) {
  return (
    <span className="text-muted font-medium bg-warm border border-border rounded-full px-2.5 py-0.5 text-xs">
      {label}
    </span>
  )
}

function RealCard({ title, description, tags, href, note }) {
  return (
    <div className="group h-full bg-surface rounded-card p-6 border border-border shadow-card flex flex-col transition-[transform,box-shadow,border-color] duration-base hover:-translate-y-1 hover:shadow-card-hover hover:border-accent/40">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <h3 className="font-bold text-ink text-lg">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
      </div>
      <p className="text-muted mt-2.5 flex-1 text-base leading-relaxed">
        {description}
      </p>
      <div className="flex items-end justify-between mt-4 gap-2 flex-wrap">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold text-sm hover:text-accent-hover transition-colors"
        >
          View site{' '}
          <span aria-hidden="true" className="inline-block transition-transform duration-base ease-spring group-hover:translate-x-1">→</span>
        </a>
        {note && (
          <span className="text-muted italic text-xs">
            {note}
          </span>
        )}
      </div>
    </div>
  )
}


export default function Work() {
  // Show the built-in cards straight away, then swap in the live ones from
  // the admin panel. If the database is empty or unreachable, keep the built-in ones.
  const [work, setWork] = useState(fallbackWork)

  useEffect(() => {
    let cancelled = false
    import('../lib/workStore')
      .then((m) => m.fetchWork())
      .then((items) => { if (!cancelled && items.length) setWork(items) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Recent work"
          title="Built by Coylabs Development"
          lede="A selection of sites and apps I've built."
        />

        <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {work.filter((card) => !card.hidden).map((card) => (
            <RealCard key={card.id || card.title} {...card} />
          ))}
        </Reveal>

        <p className="text-center text-muted mt-10 text-sm">
          More work available on request. Get in touch to see examples relevant
          to your sector.
        </p>
      </div>
    </section>
  )
}
