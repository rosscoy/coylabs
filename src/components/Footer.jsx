import { Logo } from './Nav'
import { CONTACT_EMAIL } from '../config'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Get a Quote', href: '#quote' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#091524' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <Logo />
            <p className="mt-2" style={{ fontSize: 11, color: '#7895A8', letterSpacing: '0.02em' }}>
              Bespoke web design &amp; development.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors"
                style={{ fontSize: 14, color: '#7895A8' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#E8F4FF' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#7895A8' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 2 */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-5"
          style={{ borderTop: '1px solid #152233' }}
        >
          <p style={{ fontSize: 13, color: '#7895A8' }}>
            © {new Date().getFullYear()} Coylabs Development · Dublin, Ireland
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors"
            style={{ fontSize: 13, color: '#7895A8' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#E8F4FF' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7895A8' }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
