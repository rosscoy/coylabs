import { useState } from 'react'
import Chip from './Chip'

const FORMSPREE_URL = 'https://formspree.io/f/xwvwappg'

const projectTypes = ['New website', 'Redesign', 'E-commerce', 'Landing page', 'Not sure yet']
const timelines = ['ASAP', '1–2 weeks', '2–4 weeks', '4–8 weeks', 'No rush']
const budgets = ['Under €1,000', '€1,000–€2,500', '€2,500–€5,000', '€5,000–€10,000', '€10,000+']

function Label({ children, required }) {
  return (
    <label className="block text-sm font-medium text-ink mb-1.5">
      {children}
      {required && <span style={{ color: '#C96A2A' }} className="ml-0.5">*</span>}
    </label>
  )
}

function FieldError({ msg }) {
  if (!msg) return null
  return <p className="mt-1 text-sm" style={{ color: '#DC2626' }}>{msg}</p>
}

function SuccessCard({ name }) {
  return (
    <div className="bg-surface rounded-xl p-10 text-center border border-border">
      <div
        className="mx-auto mb-5 flex items-center justify-center rounded-full"
        style={{ width: 52, height: 52, background: '#D9F5F2' }}
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#05AD98" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13" cy="13" r="11" />
          <polyline points="8 13 11.5 16.5 18 10" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-ink">Thanks, {name}!</h3>
      <p className="text-muted mt-3" style={{ lineHeight: 1.6 }}>
        Got it — I'll be in touch within 24 hours.
      </p>
      <p className="text-muted mt-2" style={{ fontSize: 13 }}>
        Or email me directly at{' '}
        <a href="mailto:hello@coylabs.dev" className="text-accent hover:underline">
          hello@coylabs.dev
        </a>
      </p>
    </div>
  )
}

export default function IntakeForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    projectType: '', timeline: '', budget: '', description: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))
  const setChip = (key) => (val) => setForm(f => ({ ...f, [key]: f[key] === val ? '' : val }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: `New enquiry — ${form.name}`, form_type: 'contact', ...form }),
      })
      if (res.ok) setSubmitted(true)
      else setSubmitError(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) return <SuccessCard name={form.name.split(' ')[0]} />

  const inputCls = (key) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-surface ${errors[key] ? 'border-red-400' : 'border-border'}`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label required>Your name</Label>
          <input type="text" value={form.name} onChange={set('name')} placeholder="Jane Murphy" className={inputCls('name')} />
          <FieldError msg={errors.name} />
        </div>
        <div>
          <Label required>Email address</Label>
          <input type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" className={inputCls('email')} />
          <FieldError msg={errors.email} />
        </div>
        <div className="sm:col-span-2">
          <Label>Phone number <span className="text-muted font-normal" style={{ fontSize: 12 }}>(optional)</span></Label>
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+353 87 000 0000" className={inputCls('phone')} />
        </div>
      </div>

      <hr className="border-border" />

      {/* Project type */}
      <div>
        <Label>What kind of project is it?</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {projectTypes.map(t => (
            <Chip key={t} label={t} active={form.projectType === t} onClick={() => setChip('projectType')(t)} />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <Label>When do you need it?</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {timelines.map(t => (
            <Chip key={t} label={t} active={form.timeline === t} onClick={() => setChip('timeline')(t)} />
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <Label>Rough budget</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {budgets.map(b => (
            <Chip key={b} label={b} active={form.budget === b} onClick={() => setChip('budget')(b)} />
          ))}
        </div>
      </div>

      <hr className="border-border" />

      {/* Description */}
      <div>
        <Label>Tell me what you're after</Label>
        <textarea
          rows={3}
          value={form.description}
          onChange={set('description')}
          placeholder="A sentence or two about your business and what you need. No need for detail here — we'll cover everything in a call."
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-surface resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors w-full sm:w-auto disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Send my enquiry →'}
      </button>

      {submitError && (
        <p className="mt-2 text-sm" style={{ color: '#DC2626' }}>
          Something went wrong — email{' '}
          <a href="mailto:hello@coylabs.dev" className="underline">hello@coylabs.dev</a> directly.
        </p>
      )}
    </form>
  )
}
