import { useState } from 'react'

function Logo({ inverted = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center justify-center rounded-lg flex-shrink-0"
        style={{
          width: 34,
          height: 34,
          background: '#C96A2A',
          borderRadius: 8,
        }}
      >
        <span
          style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '-0.5px',
          }}
        >
          CL
        </span>
      </div>
      <span
        style={{
          fontWeight: 700,
          fontSize: 18,
          color: inverted ? '#FAFAF8' : '#1A1A1A',
        }}
      >
        Coylabs Development
      </span>
    </div>
  )
}

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Get a Quote', href: '#quote' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center">
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
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-[18px] py-2 rounded-lg transition-colors"
          >
            Start a project →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-ink" />
          <span className="block w-5 h-0.5 bg-ink" />
          <span className="block w-5 h-0.5 bg-ink" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-0">
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
            className="mt-4 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-[18px] py-3 rounded-lg transition-colors text-center"
          >
            Start a project →
          </a>
        </div>
      )}
    </header>
  )
}

export { Logo }
