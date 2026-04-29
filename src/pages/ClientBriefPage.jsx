import { useState } from 'react'
import Chip from '../components/Chip'
import { Logo } from '../components/Nav'

const FORMSPREE_URL = 'https://formspree.io/f/xwvwappg'

const init = {
  name: '', email: '', phone: '', bizName: '',
  tagline: '', bizDescription: '', competitors: '', brandWords: '',
  hasLogo: '', brandColours: '', fontStyle: '', hasBrandGuidelines: '',
  primaryPurpose: [], mainAction: '', successMeasure: '',
  existingSite: '', existingLikes: '', existingDislikes: '',
  idealCustomer: '', problemSolved: '', bizType: '', geoReach: '',
  pagesNeeded: [], contentReady: '', hasPhotography: '', hasVideo: '',
  needsBlog: '', specificFeatures: '',
  needsEcommerce: '', productCount: '', needsBooking: '',
  contactFormDetails: '', needsLogin: '', needsLiveChat: '',
  needsNewsletter: '', emailPlatform: '', otherFunctionality: '',
  sitesILike: '', sitesIDislike: '', designFeeling: '',
  stylesToAvoid: '', imageStyle: '',
  domainName: '', domainStatus: '', existingHosting: '',
  toolIntegrations: '', needsMultilingual: '', accessibilityLevel: '', needsCMS: '',
  targetKeywords: '', hasAnalytics: '', runningAds: '',
  socialPlatforms: [], socialUrls: '',
  goLiveDate: '', deadlineType: '', budget: '',
  maintenanceNeeded: '', futurePhases: '',
  mainContact: '', approvalContact: '', preferredComms: [],
  updateFrequency: '', contentManager: '',
}

function Label({ children, required, hint }) {
  return (
    <label className="block text-sm font-medium text-ink mb-1.5">
      {children}
      {required && <span style={{ color: '#C96A2A' }} className="ml-0.5">*</span>}
      {hint && <span className="text-muted font-normal ml-2" style={{ fontSize: 12 }}>{hint}</span>}
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

function TextArea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-surface resize-none"
    />
  )
}

function Chips({ options, value, onChange, multi = false }) {
  const toggle = (opt) => {
    if (multi) {
      const arr = Array.isArray(value) ? value : []
      onChange(arr.includes(opt) ? arr.filter(x => x !== opt) : [...arr, opt])
    } else {
      onChange(value === opt ? '' : opt)
    }
  }
  const isActive = (opt) => multi ? (Array.isArray(value) && value.includes(opt)) : value === opt
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {options.map(opt => (
        <Chip key={opt} label={opt} active={isActive(opt)} onClick={() => toggle(opt)} />
      ))}
    </div>
  )
}

function Q({ label, required, hint, children }) {
  return (
    <div>
      <Label required={required} hint={hint}>{label}</Label>
      {children}
    </div>
  )
}

function Section({ number, title, description, children }) {
  return (
    <div className="bg-surface rounded-2xl border border-border p-6 md:p-8">
      <div className="flex items-start gap-4 mb-6">
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
          style={{ width: 32, height: 32, background: '#05AD98', fontSize: 14, fontWeight: 700, color: '#fff' }}
        >
          {number}
        </div>
        <div>
          <h2 className="text-lg font-bold text-ink leading-snug">{title}</h2>
          {description && <p className="text-muted text-sm mt-1" style={{ lineHeight: 1.6 }}>{description}</p>}
        </div>
      </div>
      <div className="space-y-5 ml-0 md:ml-12">
        {children}
      </div>
    </div>
  )
}

function Divider() {
  return <hr className="border-border" />
}

function SuccessCard({ name }) {
  return (
    <div className="min-h-screen bg-warm flex items-center justify-center px-6">
      <div className="bg-surface rounded-2xl border border-border p-10 text-center max-w-md w-full">
        <div
          className="mx-auto mb-5 flex items-center justify-center rounded-full"
          style={{ width: 56, height: 56, background: '#D9F5F2' }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#05AD98" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="14" cy="14" r="12" />
            <polyline points="9 14 12.5 17.5 19 11" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-ink">Thanks, {name}!</h2>
        <p className="text-muted mt-3" style={{ lineHeight: 1.7 }}>
          Your project brief has been received. Ross will review everything and be in touch shortly.
        </p>
        <p className="text-muted mt-3" style={{ fontSize: 13 }}>
          Questions in the meantime?{' '}
          <a href="mailto:hello@coylabs.dev" className="text-accent hover:underline">
            hello@coylabs.dev
          </a>
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Back to Coylabs →
        </a>
      </div>
    </div>
  )
}

export default function ClientBriefPage() {
  const [form, setForm] = useState(init)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))
  const setVal = (key) => (val) => setForm(f => ({ ...f, [key]: val }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true
    if (!form.bizName.trim()) e.bizName = true
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })
      return
    }
    setErrors({})
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Client Project Brief — ${form.bizName}`,
          form_type: 'client_brief',
          ...form,
          primaryPurpose: form.primaryPurpose.join(', '),
          pagesNeeded: form.pagesNeeded.join(', '),
          socialPlatforms: form.socialPlatforms.join(', '),
          preferredComms: form.preferredComms.join(', '),
        }),
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

  const inputClass = (key) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-surface ${errors[key] ? 'border-red-400' : 'border-border'}`

  return (
    <div className="min-h-screen bg-warm font-sans">
      {/* Header */}
      <header className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>
          <span className="text-muted text-sm hidden sm:block">Client Project Brief</span>
        </div>
      </header>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <p className="text-accent font-semibold uppercase" style={{ fontSize: 12, letterSpacing: '0.1em' }}>
          PROJECT BRIEF
        </p>
        <h1 className="font-bold text-ink mt-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          Tell me about your project.
        </h1>
        <p className="text-muted mt-3 max-w-xl" style={{ fontSize: 16, lineHeight: 1.7 }}>
          Fill in as much or as little as you like — every answer helps me give you a more accurate proposal.
          Skip anything you're unsure about and we can cover it in our first call.
        </p>
        <div
          className="mt-5 rounded-xl px-5 py-4 flex items-start gap-3"
          style={{ background: '#D9F5F2', border: '1px solid #A7E8E2' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5" stroke="#05AD98" strokeWidth="2" strokeLinecap="round">
            <circle cx="9" cy="9" r="7" />
            <line x1="9" y1="6" x2="9" y2="6.01" />
            <line x1="9" y1="9" x2="9" y2="13" />
          </svg>
          <p className="text-sm" style={{ color: '#076B5F', lineHeight: 1.6 }}>
            If you have a logo, existing brand assets, or inspiration images, email them to{' '}
            <a href="mailto:hello@coylabs.dev" className="underline font-medium">hello@coylabs.dev</a>{' '}
            alongside this form.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="max-w-3xl mx-auto px-6 pb-16 space-y-6">

          {/* Contact Info */}
          <div id="contact-section" className="bg-surface rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-bold text-ink mb-6">Your details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label required>Full name</Label>
                <input
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Jane Murphy"
                  className={inputClass('name')}
                />
                {errors.name && <p className="mt-1 text-xs" style={{ color: '#DC2626' }}>Please enter your name.</p>}
              </div>
              <div>
                <Label required>Email address</Label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="jane@example.com"
                  className={inputClass('email')}
                />
                {errors.email && <p className="mt-1 text-xs" style={{ color: '#DC2626' }}>Please enter a valid email.</p>}
              </div>
              <div>
                <Label>Phone number</Label>
                <TextInput value={form.phone} onChange={set('phone')} placeholder="+353 87 000 0000" />
              </div>
              <div>
                <Label required>Business / brand name</Label>
                <input
                  type="text"
                  value={form.bizName}
                  onChange={set('bizName')}
                  placeholder="Murphy's Bakery"
                  className={inputClass('bizName')}
                />
                {errors.bizName && <p className="mt-1 text-xs" style={{ color: '#DC2626' }}>Please enter your business name.</p>}
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <Section
            number="1"
            title="Business & Brand"
            description="Help me understand your brand before touching a single pixel."
          >
            <Q label="Tagline or strapline" hint="if you have one">
              <TextInput value={form.tagline} onChange={set('tagline')} placeholder="e.g. Fresh bread, baked daily" />
            </Q>
            <Q label="What does your business do?">
              <TextArea
                value={form.bizDescription}
                onChange={set('bizDescription')}
                placeholder="Describe it as if explaining to someone who has never heard of you."
              />
            </Q>
            <Q label="Who are your main competitors, and what makes you different?">
              <TextArea
                value={form.competitors}
                onChange={set('competitors')}
                placeholder="e.g. We compete with XYZ but we're different because..."
              />
            </Q>
            <Q label="3–5 words that describe your brand personality">
              <TextInput value={form.brandWords} onChange={set('brandWords')} placeholder="e.g. warm, trustworthy, premium, local, playful" />
            </Q>
            <Q label="Do you have an existing logo?">
              <Chips options={["Yes — I'll email it", 'No — I need one designed', 'Logo is in progress']} value={form.hasLogo} onChange={setVal('hasLogo')} />
            </Q>
            <Q label="Do you have established brand colours?" hint="hex codes, Pantone, or a description">
              <TextInput value={form.brandColours} onChange={set('brandColours')} placeholder="e.g. #2D4A8A and #F5A623, or 'deep navy and warm gold'" />
            </Q>
            <Q label="Do you have a font or typography preference?">
              <TextInput value={form.fontStyle} onChange={set('fontStyle')} placeholder="e.g. clean sans-serif, classic serif, I'm open to suggestions" />
            </Q>
            <Q label="Do you have brand guidelines or a style guide?">
              <Chips options={["Yes — I'll email it", 'Partial / in progress', 'No']} value={form.hasBrandGuidelines} onChange={setVal('hasBrandGuidelines')} />
            </Q>
          </Section>

          <Divider />

          {/* Section 2 */}
          <Section
            number="2"
            title="Goals & Purpose"
            description="A website without a clear goal is just a pretty brochure. Let's fix that."
          >
            <Q label="What is the primary purpose of this website?" hint="select all that apply">
              <Chips
                multi
                options={['Generate leads / enquiries', 'Sell products online', 'Showcase a portfolio', 'Take bookings / appointments', 'Provide information', 'Build brand awareness', 'Recruit / careers']}
                value={form.primaryPurpose}
                onChange={setVal('primaryPurpose')}
              />
            </Q>
            <Q label="What is the single most important action you want a visitor to take?">
              <TextInput value={form.mainAction} onChange={set('mainAction')} placeholder="e.g. Fill in the contact form, call us, buy a product" />
            </Q>
            <Q label="What does success look like for this website in 6 months?">
              <TextArea value={form.successMeasure} onChange={set('successMeasure')} placeholder="e.g. 20 enquiries a month, top 3 Google ranking for X, 50 online orders a week" />
            </Q>
            <Q label="Do you have an existing website?" hint="URL if yes">
              <TextInput value={form.existingSite} onChange={set('existingSite')} placeholder="https://yoursite.com or 'No existing site'" />
            </Q>
            <Q label="What do you like about your current site?" hint="skip if no existing site">
              <TextInput value={form.existingLikes} onChange={set('existingLikes')} placeholder="e.g. the layout, the colour scheme, the copy" />
            </Q>
            <Q label="What do you dislike, or what has it failed to do?">
              <TextInput value={form.existingDislikes} onChange={set('existingDislikes')} placeholder="e.g. looks outdated, hard to update, no enquiries coming through" />
            </Q>
          </Section>

          <Divider />

          {/* Section 3 */}
          <Section
            number="3"
            title="Target Audience"
            description="The more specific this is, the better the design decisions I can make."
          >
            <Q label="Describe your ideal customer">
              <TextArea value={form.idealCustomer} onChange={set('idealCustomer')} placeholder="e.g. Dublin homeowners aged 35–55, renovating their homes. They research online before calling and care about quality over price." />
            </Q>
            <Q label="What problem does your customer have that you solve?">
              <TextArea value={form.problemSolved} onChange={set('problemSolved')} placeholder="e.g. They struggle to find a reliable local tradesperson they can trust." />
            </Q>
            <Q label="Who are you primarily targeting?">
              <Chips options={['Consumers (B2C)', 'Other businesses (B2B)', 'Both']} value={form.bizType} onChange={setVal('bizType')} />
            </Q>
            <Q label="Where are your customers based?">
              <Chips options={['Local / city', 'National (Ireland)', 'UK', 'International', 'Mix']} value={form.geoReach} onChange={setVal('geoReach')} />
            </Q>
          </Section>

          <Divider />

          {/* Section 4 */}
          <Section
            number="4"
            title="Pages & Content"
            description="What's going on the site, and do you have it ready?"
          >
            <Q label="Which pages do you need?" hint="select all that apply">
              <Chips
                multi
                options={['Home', 'About', 'Services', 'Portfolio / Work', 'Pricing', 'Blog / News', 'Contact', 'FAQ', 'Shop', 'Booking', 'Testimonials', 'Team', 'Login / Account']}
                value={form.pagesNeeded}
                onChange={setVal('pagesNeeded')}
              />
            </Q>
            <Q label="Written content (copy) — where are you?">
              <Chips
                options={['All written and ready', 'Some ready, rest is placeholder', "Nothing yet — I need help writing it", "I'd like you to write everything"]}
                value={form.contentReady}
                onChange={setVal('contentReady')}
              />
            </Q>
            <Q label="Do you have photography or images?">
              <Chips
                options={['Yes — professional photography', 'Yes — my own photos', 'No — use stock imagery', 'Mix of mine and stock']}
                value={form.hasPhotography}
                onChange={setVal('hasPhotography')}
              />
            </Q>
            <Q label="Do you have video content to include?">
              <Chips options={['Yes', 'No', 'Planned for later']} value={form.hasVideo} onChange={setVal('hasVideo')} />
            </Q>
            <Q label="Do you need a blog or news section?">
              <Chips options={['Yes', 'No', 'Maybe later']} value={form.needsBlog} onChange={setVal('needsBlog')} />
            </Q>
            <Q label="Any specific sections or features you've seen elsewhere that you'd like?">
              <TextArea value={form.specificFeatures} onChange={set('specificFeatures')} placeholder="e.g. an interactive before/after slider, a team grid with hover effects, a sticky sidebar" />
            </Q>
          </Section>

          <Divider />

          {/* Section 5 */}
          <Section
            number="5"
            title="Functionality & Features"
            description="This is where scope (and budget) can grow — be specific about what you actually need."
          >
            <Q label="Do you need an online shop / e-commerce?">
              <Chips options={['Yes', 'No', 'Not sure']} value={form.needsEcommerce} onChange={setVal('needsEcommerce')} />
            </Q>
            {form.needsEcommerce === 'Yes' && (
              <Q label="Roughly how many products?">
                <TextInput value={form.productCount} onChange={set('productCount')} placeholder="e.g. 10, 50, 200+" />
              </Q>
            )}
            <Q label="Do you need a booking or appointment system?">
              <Chips options={['Yes', 'No']} value={form.needsBooking} onChange={setVal('needsBooking')} />
            </Q>
            <Q label="Do you need a contact form?" hint="what information should it collect?">
              <TextArea rows={2} value={form.contactFormDetails} onChange={set('contactFormDetails')} placeholder="e.g. Yes — name, email, phone, and a message. Or: No, just show our phone number." />
            </Q>
            <Q label="Do you need user accounts or a login area?">
              <Chips options={['Yes', 'No', 'Not sure']} value={form.needsLogin} onChange={setVal('needsLogin')} />
            </Q>
            <Q label="Do you need live chat or a chatbot?">
              <Chips options={['Yes', 'No', 'Maybe']} value={form.needsLiveChat} onChange={setVal('needsLiveChat')} />
            </Q>
            <Q label="Do you need a newsletter signup?">
              <Chips options={['Yes', 'No']} value={form.needsNewsletter} onChange={setVal('needsNewsletter')} />
            </Q>
            {form.needsNewsletter === 'Yes' && (
              <Q label="Which email platform do you use?" hint="e.g. Mailchimp, ConvertKit, Klaviyo">
                <TextInput value={form.emailPlatform} onChange={set('emailPlatform')} placeholder="e.g. Mailchimp" />
              </Q>
            )}
            <Q label="Any other functionality you need?">
              <TextArea rows={2} value={form.otherFunctionality} onChange={set('otherFunctionality')} placeholder="e.g. Google Maps embed, PDF downloads, calculators, job board, password-protected pages..." />
            </Q>
          </Section>

          <Divider />

          {/* Section 6 */}
          <Section
            number="6"
            title="Design Preferences"
            description="Help me understand your visual taste before I put pen to paper."
          >
            <Q label="Share 3–5 websites you like and what you like about each">
              <TextArea
                rows={4}
                value={form.sitesILike}
                onChange={set('sitesILike')}
                placeholder={'e.g.\nhttps://example.com — love the clean layout and bold typography\nhttps://example2.com — the photography and dark theme are exactly our vibe'}
              />
            </Q>
            <Q label="Any websites you dislike, and why?">
              <TextArea rows={2} value={form.sitesIDislike} onChange={set('sitesIDislike')} placeholder="e.g. https://example.com — too cluttered, too many animations, looks cheap" />
            </Q>
            <Q label="What feeling should the design convey?">
              <Chips
                options={['Modern & minimal', 'Bold & striking', 'Warm & friendly', 'Corporate & professional', 'Playful & creative', 'Luxurious & premium', 'Rustic & artisan']}
                value={form.designFeeling}
                onChange={setVal('designFeeling')}
              />
            </Q>
            <Q label="Any design styles, colours, or approaches to avoid?">
              <TextInput value={form.stylesToAvoid} onChange={set('stylesToAvoid')} placeholder="e.g. no dark backgrounds, avoid anything too trendy, no stock-photo-heavy layouts" />
            </Q>
            <Q label="Preferred image style">
              <Chips options={['Real photography', 'Illustration', 'Icons & graphics', 'Mix of photography + illustration', 'Minimal — few images']} value={form.imageStyle} onChange={setVal('imageStyle')} />
            </Q>
          </Section>

          <Divider />

          {/* Section 7 */}
          <Section
            number="7"
            title="Technical Requirements"
            description="The boring stuff that affects how we build, host, and hand over the site."
          >
            <Q label="Do you have a domain name?" hint="e.g. yourbusiness.ie">
              <TextInput value={form.domainName} onChange={set('domainName')} placeholder="e.g. murphysbakery.ie, or 'No — I need one'" />
            </Q>
            <Q label="Domain status">
              <Chips options={['Already registered — I own it', 'Registered but with old host', 'I need to buy one', 'Not sure']} value={form.domainStatus} onChange={setVal('domainStatus')} />
            </Q>
            <Q label="Do you have existing hosting?" hint="provider name if yes">
              <TextInput value={form.existingHosting} onChange={set('existingHosting')} placeholder="e.g. SiteGround, cPanel, WordPress.com, or 'No'" />
            </Q>
            <Q label="Does the site need to connect to any existing tools or platforms?">
              <TextArea rows={2} value={form.toolIntegrations} onChange={set('toolIntegrations')} placeholder="e.g. Salesforce CRM, Xero accounting, a POS system, an existing booking platform" />
            </Q>
            <Q label="Do you need multilingual / multi-language support?">
              <Chips options={['Yes', 'No']} value={form.needsMultilingual} onChange={setVal('needsMultilingual')} />
            </Q>
            <Q label="Accessibility requirements">
              <Chips options={['Standard best practice', 'WCAG AA compliance required', 'WCAG AAA compliance required', 'Not sure']} value={form.accessibilityLevel} onChange={setVal('accessibilityLevel')} />
            </Q>
            <Q label="Will you need to update content yourself after launch?">
              <Chips
                options={['Yes — I need a CMS (e.g. to edit blog posts, update text)', 'No — Coylabs handles updates', 'Not sure yet']}
                value={form.needsCMS}
                onChange={setVal('needsCMS')}
              />
            </Q>
          </Section>

          <Divider />

          {/* Section 8 */}
          <Section
            number="8"
            title="SEO & Marketing"
            description="How will people find the site, and how do you plan to promote it?"
          >
            <Q label="What search terms do you want to rank for on Google?">
              <TextArea rows={2} value={form.targetKeywords} onChange={set('targetKeywords')} placeholder="e.g. 'Dublin wedding photographer', 'accountant Cork', 'buy handmade candles Ireland'" />
            </Q>
            <Q label="Do you have Google Analytics or any tracking set up?">
              <Chips options={['Yes — existing GA4', 'No — please set it up', 'No — not needed']} value={form.hasAnalytics} onChange={setVal('hasAnalytics')} />
            </Q>
            <Q label="Are you running (or planning to run) paid ads?">
              <Chips options={['Google Ads', 'Meta / Facebook Ads', 'Both', 'Planning to', 'No']} value={form.runningAds} onChange={setVal('runningAds')} />
            </Q>
            <Q label="Which social platforms do you use?" hint="select all that apply">
              <Chips
                multi
                options={['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'X / Twitter', 'YouTube', 'Pinterest']}
                value={form.socialPlatforms}
                onChange={setVal('socialPlatforms')}
              />
            </Q>
            {form.socialPlatforms.length > 0 && (
              <Q label="Paste your social media profile URLs">
                <TextArea rows={2} value={form.socialUrls} onChange={set('socialUrls')} placeholder="e.g. https://instagram.com/yourbusiness" />
              </Q>
            )}
          </Section>

          <Divider />

          {/* Section 9 */}
          <Section
            number="9"
            title="Timeline & Budget"
            description="Realistic on both sides — no surprises."
          >
            <Q label="When do you need the site live?">
              <TextInput value={form.goLiveDate} onChange={set('goLiveDate')} placeholder="e.g. end of August, before Christmas, ASAP, no fixed date" />
            </Q>
            <Q label="Is that deadline…">
              <Chips options={["Hard — can't move it", 'Flexible', 'No fixed deadline']} value={form.deadlineType} onChange={setVal('deadlineType')} />
            </Q>
            <Q label="Budget range">
              <Chips
                options={['Under €1,000', '€1,000–€2,500', '€2,500–€5,000', '€5,000–€10,000', '€10,000+']}
                value={form.budget}
                onChange={setVal('budget')}
              />
            </Q>
            <Q label="Will you need ongoing support or maintenance after launch?">
              <Chips
                options={['Yes — full monthly retainer', 'Yes — occasional updates as needed', "No — once it's live, I'll manage it", 'Not sure yet']}
                value={form.maintenanceNeeded}
                onChange={setVal('maintenanceNeeded')}
              />
            </Q>
            <Q label="Are there planned future phases beyond the initial launch?">
              <TextArea rows={2} value={form.futurePhases} onChange={set('futurePhases')} placeholder="e.g. Phase 2 would add a members area and online store in Q1 next year" />
            </Q>
          </Section>

          <Divider />

          {/* Section 10 */}
          <Section
            number="10"
            title="Handover & Working Style"
            description="Knowing how you work helps me structure the project to fit your life."
          >
            <Q label="Who is the main point of contact for this project?">
              <TextInput value={form.mainContact} onChange={set('mainContact')} placeholder="Name and role, e.g. Jane Murphy — Owner" />
            </Q>
            <Q label="Who has final sign-off on design and content?" hint="if different from above">
              <TextInput value={form.approvalContact} onChange={set('approvalContact')} placeholder="e.g. Same as above, or: John Smith — Marketing Manager" />
            </Q>
            <Q label="How do you prefer to communicate?" hint="select all that apply">
              <Chips
                multi
                options={['Email', 'Phone call', 'Video call (Zoom / Teams)', 'WhatsApp', 'Slack']}
                value={form.preferredComms}
                onChange={setVal('preferredComms')}
              />
            </Q>
            <Q label="How often would you like progress updates?">
              <Chips options={['Daily', 'Weekly', 'Fortnightly', 'Milestone-based only']} value={form.updateFrequency} onChange={setVal('updateFrequency')} />
            </Q>
            <Q label="After launch, who keeps the content up to date?">
              <Chips options={['Me / my team', 'Coylabs on a retainer', 'To be decided']} value={form.contentManager} onChange={setVal('contentManager')} />
            </Q>
          </Section>

          {/* Submit */}
          <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 text-center">
            <h3 className="font-bold text-ink text-lg mb-2">That's everything!</h3>
            <p className="text-muted text-sm mb-6" style={{ lineHeight: 1.6 }}>
              Once you submit, Ross will review your brief and be in touch within 24 hours to
              discuss next steps and put together a proposal.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg px-8 py-3 text-sm transition-colors disabled:opacity-60"
            >
              {submitting ? 'Sending…' : 'Submit my project brief →'}
            </button>
            {submitError && (
              <p className="mt-4 text-sm" style={{ color: '#DC2626' }}>
                Something went wrong — please email{' '}
                <a href="mailto:hello@coylabs.dev" className="underline">hello@coylabs.dev</a> directly.
              </p>
            )}
            {Object.keys(errors).length > 0 && (
              <p className="mt-4 text-sm" style={{ color: '#DC2626' }}>
                Please fill in your name, email, and business name before submitting.
              </p>
            )}
          </div>

        </div>
      </form>
    </div>
  )
}
