import { useState } from 'react'

function FlaskIcon({ width = 28, height = 32 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent" aria-hidden="true">
      <rect x="16" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 18 L4 44 A4 4 0 0 0 7.5 50 L40.5 50 A4 4 0 0 0 44 44 L32 18 Z"
            stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
            fill="currentColor" fillOpacity="0.12"/>
      <polyline points="18,29 11,35 18,41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="30,29 37,35 30,41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18" y1="45" x2="30" y2="45" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
    </svg>
  )
}

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <FlaskIcon />
      <div className="flex flex-col leading-none">
        <span className="text-ink font-extrabold text-base tracking-[0.06em]">
          COY LABS
        </span>
        <span className="text-accent font-semibold text-[9px] tracking-[0.18em] mt-0.5">
          DEVELOPMENT
        </span>
      </div>
    </div>
  )
}

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Get a Quote', href: '#quote' },
]

// Label slides up and an identical copy rolls in from below on hover.
function RollLabel({ children }) {
  return (
    <span className="navroll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-surface supports-[backdrop-filter]:bg-surface/70 supports-[backdrop-filter]:backdrop-blur-md supports-[backdrop-filter]:backdrop-saturate-150">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center" aria-label="Coylabs Development, back to top">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              <RollLabel>{l.label}</RollLabel>
            </a>
          ))}
          <a
            href="#quote"
            className="group bg-accent hover:bg-accent-hover text-warm text-sm font-semibold px-[18px] py-2 rounded-lg transition-colors"
          >
            Start a project{' '}
            <span aria-hidden="true" className="inline-block transition-transform duration-base ease-spring group-hover:translate-x-1">→</span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="block w-5 h-0.5 bg-ink" />
          <span className="block w-5 h-0.5 bg-ink" />
          <span className="block w-5 h-0.5 bg-ink" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-surface border-t border-white/10 px-6 py-4 flex flex-col gap-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted hover:text-ink py-4 border-b border-border transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-4 bg-accent hover:bg-accent-hover text-warm text-sm font-semibold px-[18px] py-3 rounded-lg transition-colors text-center"
          >
            Start a project →
          </a>
        </div>
      )}
    </header>
  )
}
