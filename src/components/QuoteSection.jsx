import IntakeForm from './IntakeForm'

export default function QuoteSection() {
  return (
    <section id="quote" className="py-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <p
          className="text-accent font-semibold uppercase"
          style={{ fontSize: 12, letterSpacing: '0.1em' }}
        >
          START A PROJECT
        </p>
        <h2
          className="font-bold text-ink mt-2"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
        >
          Tell us about your website.
        </h2>
        <p className="text-muted mt-2 mb-10" style={{ fontSize: 16 }}>
          Fill in the form and we'll come back to you within 24 hours with a
          no-obligation quote.
        </p>
        <IntakeForm />
      </div>
    </section>
  )
}
