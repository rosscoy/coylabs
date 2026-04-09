function DecorativeSVG() {
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-2xl"
      style={{ background: '#F5F4F0', minHeight: 320 }}
    >
      <svg
        width="240"
        height="200"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Browser chrome */}
        <rect x="20" y="20" width="200" height="160" rx="10" fill="#FFFFFF" stroke="#E7E5E0" strokeWidth="1.5" />
        {/* Top bar */}
        <rect x="20" y="20" width="200" height="32" rx="10" fill="#F5F4F0" />
        <rect x="20" y="40" width="200" height="12" fill="#F5F4F0" />
        {/* Traffic lights */}
        <circle cx="38" cy="36" r="5" fill="#C96A2A" />
        <circle cx="54" cy="36" r="5" fill="#E7E5E0" />
        <circle cx="70" cy="36" r="5" fill="#E7E5E0" />
        {/* URL bar */}
        <rect x="88" y="28" width="110" height="16" rx="4" fill="#FFFFFF" stroke="#E7E5E0" strokeWidth="1" />
        {/* Content blocks */}
        <rect x="36" y="68" width="80" height="8" rx="3" fill="#C96A2A" opacity="0.7" />
        <rect x="36" y="84" width="120" height="6" rx="3" fill="#E7E5E0" />
        <rect x="36" y="96" width="100" height="6" rx="3" fill="#E7E5E0" />
        <rect x="36" y="108" width="110" height="6" rx="3" fill="#E7E5E0" />
        {/* Image placeholder */}
        <rect x="152" y="68" width="52" height="52" rx="6" fill="#F5F4F0" stroke="#E7E5E0" strokeWidth="1" />
        <circle cx="178" cy="88" r="10" fill="#C96A2A" opacity="0.3" />
        <line x1="162" y1="108" x2="194" y2="108" stroke="#C96A2A" strokeWidth="1.5" opacity="0.5" />
        {/* CTA button */}
        <rect x="36" y="130" width="72" height="22" rx="5" fill="#C96A2A" />
        <rect x="36" y="130" width="72" height="22" rx="5" fill="#C96A2A" opacity="0.9" />
        {/* Bottom lines */}
        <rect x="36" y="162" width="168" height="4" rx="2" fill="#F5F4F0" />
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
            <p
              className="text-accent font-semibold uppercase"
              style={{ fontSize: 12, letterSpacing: '0.1em' }}
            >
              ABOUT
            </p>
            <h2
              className="font-bold text-ink mt-2"
              style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
            >
              A bit about me
            </h2>

            <p className="text-muted mt-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
              I'm Ross Coy, a Dublin-based developer who builds websites and web
              apps for businesses that want something better than a template. I
              use modern tools — React, Firebase, Vercel — to ship fast and keep
              things simple.
            </p>
            <p className="text-muted mt-4" style={{ fontSize: 15, lineHeight: 1.7 }}>
              I started Coylabs Development because I kept seeing businesses paying agency
              prices for sites that underdelivered. I keep my overheads low and
              pass that on — you get senior developer work at a freelancer's
              rate.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mt-8">
              <div>
                <p className="font-bold text-ink" style={{ fontSize: 28 }}>
                  Dublin
                </p>
                <p className="text-muted" style={{ fontSize: 13 }}>
                  based, available nationwide
                </p>
              </div>
            </div>
          </div>

          {/* Decorative graphic */}
          <div className="hidden md:block">
            <DecorativeSVG />
          </div>
        </div>
      </div>
    </section>
  )
}
