import IntakeForm from './IntakeForm'

export default function QuoteSection() {
  return (
    <section id="quote" className="py-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <p
          className="text-accent font-semibold uppercase"
          style={{ fontSize: 12, letterSpacing: '0.1em' }}
        >
          GET IN TOUCH
        </p>
        <h2
          className="font-bold text-ink mt-2"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
        >
          Let's start the conversation.
        </h2>
        <p className="text-muted mt-2 mb-10" style={{ fontSize: 16, lineHeight: 1.7 }}>
          Drop me a quick note and I'll get back to you as soon as possible.
          No pressure, just a conversation.
        </p>
        <IntakeForm />
      </div>
    </section>
  )
}
