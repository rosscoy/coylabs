import IntakeForm from './IntakeForm'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function QuoteSection() {
  return (
    <section id="quote" className="relative py-20 px-6">
      <div aria-hidden="true" className="glow w-[800px] h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-[720px] mx-auto">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's start the conversation."
          lede="Drop me a quick note and I'll get back to you as soon as possible. No pressure, just a conversation."
          className="mb-10"
        />
        <Reveal>
          <IntakeForm />
        </Reveal>
      </div>
    </section>
  )
}
