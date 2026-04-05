const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Get a Quote', href: '#quote' },
]

function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: 34,
          height: 34,
          background: '#C96A2A',
          borderRadius: 8,
        }}
      >
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: '-0.5px' }}>
          CL
        </span>
      </div>
      <span style={{ fontWeight: 700, fontSize: 18, color: '#FAFAF8' }}>
        Coylabs Development
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <FooterLogo />
            <p className="mt-2" style={{ fontSize: 11, color: '#6B7280', letterSpacing: '0.02em' }}>
              Bespoke web design &amp; development.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors"
                style={{ fontSize: 14, color: '#6B7280' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FAFAF8' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6B7280' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 2 */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-5"
          style={{ borderTop: '1px solid #2A2A2A' }}
        >
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            © 2026 Coylabs Development · Dublin, Ireland
          </p>
          <a
            href="mailto:hello@coylabs.dev"
            className="transition-colors"
            style={{ fontSize: 13, color: '#6B7280' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FAFAF8' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6B7280' }}
          >
            hello@coylabs.dev
          </a>
        </div>
      </div>
    </footer>
  )
}
