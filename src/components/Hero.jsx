export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl w-full text-center mx-auto">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span
            className="text-xs font-medium rounded-full px-[14px] py-1"
            style={{
              background: '#D9F5F2',
              color: '#047a6c',
              borderRadius: 999,
            }}
          >
            ✦ Dublin-based · Available for new projects
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-bold text-ink"
          style={{
            fontSize: 'clamp(42px, 6vw, 76px)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: 780,
            margin: '0 auto',
          }}
        >
          Let's build something{' '}
          <span className="text-accent">worth visiting.</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-muted"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            maxWidth: 560,
            lineHeight: 1.7,
            marginTop: 20,
            margin: '20px auto 0',
          }}
        >
          Good websites don't come from briefs — they come from conversations.
          We build your site, you build your business.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{ marginTop: 32 }}
        >
          <a
            href="#work"
            className="bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
            style={{ padding: '12px 24px' }}
          >
            See our work →
          </a>
          <a
            href="#quote"
            className="font-semibold rounded-lg transition-colors text-ink hover:text-accent"
            style={{
              padding: '12px 24px',
              border: '1.5px solid #E7E5E0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#05AD98'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E7E5E0'
            }}
          >
            Get a quote
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="flex items-center justify-center flex-wrap gap-2 text-muted"
          style={{ marginTop: 48, fontSize: 13 }}
        >
          <span>Design-led development</span>
          <span>·</span>
          <span>Based in Dublin</span>
          <span>·</span>
          <span>Fast turnaround</span>
        </div>
      </div>
    </section>
  )
}
