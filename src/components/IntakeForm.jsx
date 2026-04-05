import { useState } from 'react'
import Chip from './Chip'

const FORMSPREE_URL = 'https://formspree.io/f/xwvwappg'

const initialState = {
  // Step 1
  businessName: '',
  industry: '',
  whatItDoes: '',
  primaryGoal: '',
  targetCustomer: '',
  // Step 2
  pagesNeeded: [],
  contentReady: '',
  lookAndFeel: '',
  inspirationUrls: '',
  // Step 3
  features: [],
  domain: '',
  selfUpdate: '',
  // Step 4
  budget: '',
  goLiveDate: '',
  yourName: '',
  yourEmail: '',
  anythingElse: '',
}

function FieldError({ msg }) {
  if (!msg) return null
  return <p className="mt-1 text-sm" style={{ color: '#DC2626' }}>{msg}</p>
}

function Label({ children, required }) {
  return (
    <label className="block text-sm font-medium text-ink mb-1.5">
      {children}
      {required && <span className="text-accent ml-0.5">*</span>}
    </label>
  )
}

function TextInput({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-surface"
    />
  )
}

function Step1({ form, setForm, errors }) {
  const goals = ['Generate leads', 'Sell products online', 'Showcase a portfolio', 'Take bookings', 'Provide information']
  return (
    <div className="space-y-5">
      <div>
        <Label required>Business / brand name</Label>
        <TextInput value={form.businessName} onChange={e => setForm(f => ({ ...f, businessName: e.target.value }))} placeholder="e.g. Murphy's Bakery" />
        <FieldError msg={errors.businessName} />
      </div>
      <div>
        <Label>Industry</Label>
        <TextInput value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value }))} placeholder="e.g. hospitality, legal, fitness" />
      </div>
      <div>
        <Label>What does your business do?</Label>
        <TextInput value={form.whatItDoes} onChange={e => setForm(f => ({ ...f, whatItDoes: e.target.value }))} placeholder="e.g. We sell artisan bread to Dublin cafés" />
      </div>
      <div>
        <Label required>Primary goal</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {goals.map(g => (
            <Chip key={g} label={g} active={form.primaryGoal === g} onClick={() => setForm(f => ({ ...f, primaryGoal: f.primaryGoal === g ? '' : g }))} />
          ))}
        </div>
        <FieldError msg={errors.primaryGoal} />
      </div>
      <div>
        <Label>Who is your target customer?</Label>
        <TextInput value={form.targetCustomer} onChange={e => setForm(f => ({ ...f, targetCustomer: e.target.value }))} placeholder="e.g. Dublin homeowners aged 30–55" />
      </div>
    </div>
  )
}

function Step2({ form, setForm }) {
  const pages = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact', 'FAQ', 'Shop', 'Booking', 'Login', 'Testimonials']
  const contentOptions = ['All ready', 'Some ready — rest is placeholder', 'None — use placeholders']
  const togglePage = (p) => setForm(f => ({
    ...f,
    pagesNeeded: f.pagesNeeded.includes(p) ? f.pagesNeeded.filter(x => x !== p) : [...f.pagesNeeded, p],
  }))
  return (
    <div className="space-y-5">
      <div>
        <Label>Pages needed</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {pages.map(p => (
            <Chip key={p} label={p} active={form.pagesNeeded.includes(p)} onClick={() => togglePage(p)} />
          ))}
        </div>
      </div>
      <div>
        <Label>Content ready?</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {contentOptions.map(o => (
            <Chip key={o} label={o} active={form.contentReady === o} onClick={() => setForm(f => ({ ...f, contentReady: f.contentReady === o ? '' : o }))} />
          ))}
        </div>
      </div>
      <div>
        <Label>Describe the look and feel you want</Label>
        <TextInput value={form.lookAndFeel} onChange={e => setForm(f => ({ ...f, lookAndFeel: e.target.value }))} placeholder="e.g. clean and modern, warm, dark and bold" />
      </div>
      <div>
        <Label>Any websites you like the look of?</Label>
        <TextInput value={form.inspirationUrls} onChange={e => setForm(f => ({ ...f, inspirationUrls: e.target.value }))} placeholder="Paste URLs here — any sites that inspire you" />
      </div>
    </div>
  )
}

function Step3({ form, setForm }) {
  const featureList = ['Contact form', 'Google Maps', 'Image gallery', 'E-commerce', 'Booking system', 'Blog / CMS', 'Newsletter signup', 'Google Analytics', 'Cookie banner', 'Social media links', 'Password-protected pages']
  const selfUpdateOpts = ['No — Coylabs handles updates', 'Yes — I need a CMS', 'Not sure yet']
  const toggleFeature = (f) => setForm(fm => ({
    ...fm,
    features: fm.features.includes(f) ? fm.features.filter(x => x !== f) : [...fm.features, f],
  }))
  return (
    <div className="space-y-5">
      <div>
        <Label>Features needed</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {featureList.map(f => (
            <Chip key={f} label={f} active={form.features.includes(f)} onClick={() => toggleFeature(f)} />
          ))}
        </div>
      </div>
      <div>
        <Label>Domain name</Label>
        <TextInput value={form.domain} onChange={e => setForm(f => ({ ...f, domain: e.target.value }))} placeholder="e.g. mybusiness.ie — or I need help getting one" />
      </div>
      <div>
        <Label>Will you need to update content yourself after launch?</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {selfUpdateOpts.map(o => (
            <Chip key={o} label={o} active={form.selfUpdate === o} onClick={() => setForm(f => ({ ...f, selfUpdate: f.selfUpdate === o ? '' : o }))} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Step4({ form, setForm, errors }) {
  const budgetRanges = ['Under €500', '€500–€1,500', '€1,500–€3,000', '€3,000–€5,000', '€5,000+']
  return (
    <div className="space-y-5">
      <div>
        <Label required>Budget range</Label>
        <select
          value={form.budget}
          onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent transition-colors bg-surface"
        >
          <option value="">— Select a range —</option>
          {budgetRanges.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <FieldError msg={errors.budget} />
      </div>
      <div>
        <Label>Ideal go-live date</Label>
        <TextInput value={form.goLiveDate} onChange={e => setForm(f => ({ ...f, goLiveDate: e.target.value }))} placeholder="e.g. end of June, ASAP, no fixed date" />
      </div>
      <div>
        <Label required>Your name</Label>
        <TextInput value={form.yourName} onChange={e => setForm(f => ({ ...f, yourName: e.target.value }))} placeholder="First and last name" />
        <FieldError msg={errors.yourName} />
      </div>
      <div>
        <Label required>Your email</Label>
        <TextInput type="email" value={form.yourEmail} onChange={e => setForm(f => ({ ...f, yourEmail: e.target.value }))} placeholder="you@example.com" />
        <FieldError msg={errors.yourEmail} />
      </div>
      <div>
        <Label>Anything else I should know?</Label>
        <textarea
          rows={4}
          value={form.anythingElse}
          onChange={e => setForm(f => ({ ...f, anythingElse: e.target.value }))}
          placeholder="Special requirements, existing branding, things you definitely don't want, accessibility needs..."
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-surface resize-none"
        />
      </div>
    </div>
  )
}

function SuccessCard({ name }) {
  return (
    <div className="bg-surface rounded-xl p-10 text-center border-2 border-accent mx-auto" style={{ maxWidth: 480 }}>
      <svg className="mx-auto mb-5" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C96A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" />
        <polyline points="16 24 21 29 32 18" />
      </svg>
      <h3 className="text-2xl font-bold text-ink">Thanks, {name}!</h3>
      <p className="text-muted mt-3" style={{ lineHeight: 1.6 }}>
        Your enquiry is on its way. I'll be back in touch within 24 hours.
      </p>
      <p className="text-muted mt-2" style={{ fontSize: 13 }}>
        In the meantime, feel free to email{' '}
        <a href="mailto:hello@coylabs.dev" className="text-accent hover:underline">
          hello@coylabs.dev
        </a>{' '}
        directly.
      </p>
    </div>
  )
}

function validate(step, form) {
  const errors = {}
  if (step === 1) {
    if (!form.businessName.trim()) errors.businessName = 'Please enter your business name.'
    if (!form.primaryGoal) errors.primaryGoal = 'Please select a primary goal.'
  }
  if (step === 4) {
    if (!form.budget) errors.budget = 'Please select a budget range.'
    if (!form.yourName.trim()) errors.yourName = 'Please enter your name.'
    if (!form.yourEmail.trim()) errors.yourEmail = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.yourEmail)) errors.yourEmail = 'Please enter a valid email address.'
  }
  return errors
}

export default function IntakeForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const progress = `${step * 25}%`

  const handleNext = () => {
    const errs = validate(step, form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStep(s => s + 1)
  }

  const handleBack = () => { setErrors({}); setStep(s => s - 1) }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(4, form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          pagesNeeded: form.pagesNeeded.join(', '),
          features: form.features.join(', '),
        }),
      })
      if (res.ok) { setSubmitted(true) } else { setSubmitError(true) }
    } catch {
      setSubmitError(true)
    }
  }

  if (submitted) return <SuccessCard name={form.yourName.split(' ')[0]} />

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Progress */}
      <div className="mb-8">
        <p className="text-muted font-medium" style={{ fontSize: 13 }}>Step {step} of 4</p>
        <div className="mt-2 w-full h-[3px] rounded-full" style={{ background: '#E7E5E0' }}>
          <div
            className="h-[3px] rounded-full bg-accent"
            style={{ width: progress, transition: 'width 300ms ease' }}
          />
        </div>
      </div>

      {step === 1 && <Step1 form={form} setForm={setForm} errors={errors} />}
      {step === 2 && <Step2 form={form} setForm={setForm} />}
      {step === 3 && <Step3 form={form} setForm={setForm} />}
      {step === 4 && <Step4 form={form} setForm={setForm} errors={errors} />}

      {/* Nav buttons */}
      <div className="flex items-center justify-between mt-8 gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors"
            style={{ border: '1.5px solid #C96A2A', color: '#C96A2A', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FEF3C7' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            ← Back
          </button>
        ) : <span />}
        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors"
          >
            Next →
          </button>
        ) : (
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors w-full sm:w-auto"
          >
            Send my enquiry →
          </button>
        )}
      </div>

      {submitError && (
        <p className="mt-4" style={{ color: '#DC2626', fontSize: 14 }}>
          Something went wrong — please email{' '}
          <a href="mailto:hello@coylabs.dev" className="underline">hello@coylabs.dev</a>{' '}
          directly.
        </p>
      )}
    </form>
  )
}
