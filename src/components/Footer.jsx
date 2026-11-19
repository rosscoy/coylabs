import { Logo } from './Nav'
import { CONTACT_EMAIL } from '../config'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Get a Quote', href: '#quote' },
]

export default function Footer({ className = '' }) {
  return (
    <footer className={`bg-footer ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <Logo />
            <p className="mt-2 text-muted text-[11px] tracking-[0.02em]">
              Bespoke web design &amp; development.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-5 border-t border-footer-line">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Coylabs Development · Dublin, Ireland
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[13px] text-muted hover:text-ink transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
