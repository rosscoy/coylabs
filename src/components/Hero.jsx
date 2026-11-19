const HEADLINE = [
  { text: "Let's" }, { text: 'build' }, { text: 'something' },
  { text: 'worth', accent: true }, { text: 'visiting.', accent: true },
]
const HEADLINE_TEXT = HEADLINE.map((w) => w.text).join(' ')
// Everything under the headline fades in just after the last word lands.
const after = (n) => ({ '--d': `${120 + HEADLINE.length * 55 + n * 90}ms` })

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <div aria-hidden="true" className="glow w-[900px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-3xl w-full text-center mx-auto">
        {/* Badge */}
        <div className="hero-fade inline-block mb-8" style={{ '--d': '0ms' }}>
          <span className="text-xs font-medium rounded-full px-[14px] py-1 bg-accent-tint text-accent">
            ✦ Dublin-based · Available for new projects
          </span>
        </div>

        {/* Headline: words rise in one by one; screen readers get the plain sentence. */}
        <h1
          aria-label={HEADLINE_TEXT}
          className="font-bold text-ink max-w-[780px] mx-auto text-[clamp(42px,6vw,76px)] leading-[1.1] tracking-[-0.03em]"
        >
          {HEADLINE.map((w, i) => (
            <span key={w.text} aria-hidden="true">
              <span className={`hero-word${w.accent ? ' text-accent' : ''}`} style={{ '--i': i }}>
                {w.text}
              </span>
              {i < HEADLINE.length - 1 && ' '}
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p
          className="hero-fade text-muted max-w-[560px] mx-auto mt-5 leading-[1.7] text-[clamp(16px,2vw,20px)]"
          style={after(0)}
        >
          Good websites don't come from briefs. They come from conversations.
          I build your site, you build your business.
        </p>

        {/* Buttons */}
        <div className="hero-fade flex flex-wrap justify-center gap-3 mt-8" style={after(1)}>
          <a
            href="#work"
            className="group bg-accent hover:bg-accent-hover text-warm font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            See my work{' '}
            <span aria-hidden="true" className="inline-block transition-transform duration-base ease-spring group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#quote"
            className="font-semibold rounded-lg px-6 py-3 text-ink border-[1.5px] border-border hover:border-accent hover:text-accent transition-colors"
          >
            Get a quote
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="hero-fade flex items-center justify-center flex-wrap gap-2 text-muted mt-12 text-[13px]"
          style={after(2)}
        >
          <span>Design-led development</span>
          <span aria-hidden="true">·</span>
          <span>Based in Dublin</span>
          <span aria-hidden="true">·</span>
          <span>Fast turnaround</span>
        </div>
      </div>
    </section>
  )
}
