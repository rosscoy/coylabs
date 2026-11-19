import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function DecorativeSVG() {
  return (
    <div className="w-full h-full min-h-[320px] flex items-center justify-center rounded-card bg-surface border border-border shadow-card">
      <svg
        width="240"
        height="200"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Browser chrome */}
        <rect x="20" y="20" width="200" height="160" rx="10" fill="#0E1B2A" stroke="#223344" strokeWidth="1.5" />
        {/* Top bar */}
        <rect x="20" y="20" width="200" height="32" rx="10" fill="#162433" />
        <rect x="20" y="40" width="200" height="12" fill="#162433" />
        {/* Traffic lights */}
        <circle cx="38" cy="36" r="5" fill="#00C8FF" />
        <circle cx="54" cy="36" r="5" fill="#223344" />
        <circle cx="70" cy="36" r="5" fill="#223344" />
        {/* URL bar */}
        <rect x="88" y="28" width="110" height="16" rx="4" fill="#0E1B2A" stroke="#223344" strokeWidth="1" />
        {/* Content blocks */}
        <rect x="36" y="68" width="80" height="8" rx="3" fill="#00C8FF" opacity="0.7" />
        <rect x="36" y="84" width="120" height="6" rx="3" fill="#223344" />
        <rect x="36" y="96" width="100" height="6" rx="3" fill="#223344" />
        <rect x="36" y="108" width="110" height="6" rx="3" fill="#223344" />
        {/* Image placeholder */}
        <rect x="152" y="68" width="52" height="52" rx="6" fill="#0E1B2A" stroke="#223344" strokeWidth="1" />
        <circle cx="178" cy="88" r="10" fill="#00C8FF" opacity="0.25" />
        <line x1="162" y1="108" x2="194" y2="108" stroke="#00C8FF" strokeWidth="1.5" opacity="0.4" />
        {/* CTA button */}
        <rect x="36" y="130" width="72" height="22" rx="5" fill="#00C8FF" opacity="0.85" />
        {/* Bottom lines */}
        <rect x="36" y="162" width="168" height="4" rx="2" fill="#1A2D40" />
      </svg>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <SectionHeader eyebrow="About" title="A bit about me" />

            <Reveal>
              <p className="text-muted mt-6 text-base leading-[1.7]">
                I'm Ross Coy, a Dublin-based developer with a strong design eye.
                I build websites and web apps for businesses that want something
                better than a template, where the look is just as considered as
                the code underneath it.
              </p>
              <p className="text-muted mt-4 text-base leading-[1.7]">
                I started Coylabs Development because I kept seeing businesses paying agency
                prices for sites that underdelivered on both design and performance.
                You get senior-level craft, visually and technically, at a
                freelancer's rate.
              </p>
  
              {/* Stats */}
              <div className="flex gap-10 mt-8">
                <div>
                  <p className="font-bold text-ink text-[28px] tracking-[-0.02em]">
                    Dublin
                  </p>
                  <p className="text-muted text-[13px]">
                    based, available nationwide
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Decorative graphic */}
          <Reveal className="hidden md:block">
            <DecorativeSVG />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
