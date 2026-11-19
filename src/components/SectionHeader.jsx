import Reveal from './Reveal'

// Eyebrow → headline → supporting line, shared by every section.
export default function SectionHeader({ eyebrow, title, lede, className = '' }) {
  return (
    <Reveal className={className}>
      <p className="text-accent font-semibold uppercase text-xs tracking-[0.1em]">
        {eyebrow}
      </p>
      <h2 className="font-bold text-ink mt-2 tracking-[-0.02em] leading-[1.15] text-[clamp(28px,4vw,42px)]">
        {title}
      </h2>
      {lede && (
        <p className="text-muted mt-3 text-base leading-relaxed">
          {lede}
        </p>
      )}
    </Reveal>
  )
}
