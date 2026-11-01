import { useEffect, useState } from 'react'
import { Logo } from '../components/Nav'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { fetchWork, addWork, updateWork, deleteWork, saveOrder, importItems } from '../lib/workStore'
import fallbackWork from '../content/work'

const inputCls =
  'w-full rounded-lg border border-border px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-warm'
const btnPrimary =
  'bg-accent hover:bg-accent-hover text-warm font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors disabled:opacity-60'
const btnGhost =
  'border border-border hover:border-accent text-ink rounded-lg px-4 py-2 text-sm transition-colors disabled:opacity-40'

const emptyForm = { title: '', description: '', tags: '', href: '', note: '', hidden: false }

function Shell({ children, right }) {
  return (
    <div className="min-h-screen bg-warm font-sans text-ink">
      <header className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/"><Logo /></a>
          {right}
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-10">{children}</main>
    </div>
  )
}

function Centered({ children }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-10 text-center max-w-md mx-auto mt-10">
      {children}
    </div>
  )
}

function SignIn() {
  const { signIn } = useAuth()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const go = async () => {
    setBusy(true)
    setError('')
    try {
      await signIn()
    } catch (e) {
      if (e.code !== 'auth/popup-closed-by-user') setError('Sign-in failed. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <Shell>
      <Centered>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="text-muted mt-2 text-sm">Sign in to manage your Recent Work.</p>
        <button onClick={go} disabled={busy} className={`${btnPrimary} mt-6`}>
          {busy ? 'Signing in…' : 'Sign in with Google'}
        </button>
        {error && <p className="mt-4 text-sm" style={{ color: '#FF6B6B' }}>{error}</p>}
      </Centered>
    </Shell>
  )
}

function ItemForm({ initial, onSave, onCancel, saving }) {
  const [f, setF] = useState(initial)
  const [error, setError] = useState('')
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!f.title.trim()) return setError('Please add a title.')
    if (!/^https?:\/\//i.test(f.href.trim())) return setError('Link must start with https://')
    setError('')
    onSave({ ...f, tags: f.tags.split(',') })
  }

  return (
    <form onSubmit={submit} className="bg-surface border border-accent rounded-xl p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1.5">Title</label>
        <input className={inputCls} value={f.title} onChange={set('title')} placeholder="e.g. Murphy's Bakery" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Description</label>
        <textarea rows={3} className={`${inputCls} resize-none`} value={f.description} onChange={set('description')} placeholder="One or two sentences about the project." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Link</label>
          <input className={inputCls} value={f.href} onChange={set('href')} placeholder="https://example.ie" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Tags <span className="text-muted font-normal text-xs">(comma separated)</span></label>
          <input className={inputCls} value={f.tags} onChange={set('tags')} placeholder="React, Vercel" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Note <span className="text-muted font-normal text-xs">(optional, small italic text)</span></label>
        <input className={inputCls} value={f.note} onChange={set('note')} placeholder="e.g. Register free to explore" />
      </div>
      <label className="flex items-center gap-2 text-sm text-muted cursor-pointer">
        <input type="checkbox" checked={f.hidden} onChange={set('hidden')} className="accent-accent" />
        Hide from the website
      </label>
      {error && <p className="text-sm" style={{ color: '#FF6B6B' }}>{error}</p>}
      <div className="flex gap-3">
        <button type="submit" disabled={saving} className={btnPrimary}>{saving ? 'Saving…' : 'Save'}</button>
        <button type="button" onClick={onCancel} className={btnGhost}>Cancel</button>
      </div>
    </form>
  )
}

function Dashboard() {
  const { user, signOut } = useAuth()
  const [items, setItems] = useState(null)
  const [editing, setEditing] = useState(null) // item id, 'new', or null
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const load = () => fetchWork().then(setItems).catch(() => setError('Could not load items.'))
  useEffect(() => { load() }, [])

  const run = async (fn) => {
    setSaving(true)
    setError('')
    try {
      await fn()
      setEditing(null)
      await load()
    } catch {
      setError('Something went wrong saving that. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const move = (i, dir) => {
    const next = [...items]
    ;[next[i], next[i + dir]] = [next[i + dir], next[i]]
    setItems(next)
    run(() => saveOrder(next))
  }

  const toForm = (it) => ({
    title: it.title, description: it.description, tags: (it.tags || []).join(', '),
    href: it.href, note: it.note || '', hidden: !!it.hidden,
  })

  return (
    <Shell
      right={
        <div className="flex items-center gap-3">
          <span className="text-muted text-xs hidden sm:block">{user.email}</span>
          <button onClick={signOut} className={btnGhost}>Sign out</button>
        </div>
      }
    >
      <p className="text-accent font-semibold uppercase" style={{ fontSize: 12, letterSpacing: '0.1em' }}>ADMIN</p>
      <div className="flex items-end justify-between gap-4 flex-wrap mt-2">
        <h1 className="font-bold" style={{ fontSize: 'clamp(26px, 4vw, 34px)' }}>Recent Work</h1>
        {items && editing !== 'new' && (
          <button onClick={() => setEditing('new')} className={btnPrimary}>+ Add project</button>
        )}
      </div>
      <p className="text-muted mt-2 text-sm">Changes show on coylabs.dev straight away. Use the arrows to reorder.</p>

      {error && <p className="mt-4 text-sm" style={{ color: '#FF6B6B' }}>{error}</p>}

      <div className="mt-8 space-y-4">
        {editing === 'new' && (
          <ItemForm
            initial={emptyForm}
            saving={saving}
            onCancel={() => setEditing(null)}
            onSave={(f) => run(() => addWork({ ...f, order: items.length ? Math.max(...items.map((i) => i.order)) + 1 : 0 }))}
          />
        )}

        {items === null && <p className="text-muted text-sm">Loading…</p>}

        {items?.length === 0 && editing !== 'new' && (
          <div className="bg-surface border border-border rounded-xl p-6">
            <p className="text-sm">
              No projects in the database yet, so the site is showing the {fallbackWork.length} built-in cards.
            </p>
            <button disabled={saving} onClick={() => run(() => importItems(fallbackWork))} className={`${btnPrimary} mt-4`}>
              {saving ? 'Importing…' : 'Import built-in cards'}
            </button>
          </div>
        )}

        {items?.map((it, i) =>
          editing === it.id ? (
            <ItemForm
              key={it.id}
              initial={toForm(it)}
              saving={saving}
              onCancel={() => setEditing(null)}
              onSave={(f) => run(() => updateWork(it.id, { ...f, order: it.order }))}
            />
          ) : (
            <div key={it.id} className={`bg-surface border border-border rounded-xl p-5 flex gap-4 items-start ${it.hidden ? 'opacity-50' : ''}`}>
              <div className="flex flex-col gap-1">
                <button aria-label="Move up" disabled={i === 0 || saving} onClick={() => move(i, -1)} className={`${btnGhost} px-2 py-1`}>↑</button>
                <button aria-label="Move down" disabled={i === items.length - 1 || saving} onClick={() => move(i, 1)} className={`${btnGhost} px-2 py-1`}>↓</button>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold">{it.title}</h3>
                  {it.hidden && <span className="text-xs text-muted border border-border rounded-full px-2 py-0.5">Hidden</span>}
                </div>
                <p className="text-muted text-sm mt-1 line-clamp-2">{it.description}</p>
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline break-all">{it.href}</a>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button disabled={saving} onClick={() => setEditing(it.id)} className={btnGhost}>Edit</button>
                <button
                  disabled={saving}
                  onClick={() => window.confirm(`Delete "${it.title}"? This can't be undone.`) && run(() => deleteWork(it.id))}
                  className={btnGhost}
                  style={{ color: '#FF6B6B' }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </Shell>
  )
}

function Gate() {
  const { user, loading, isAdmin, signOut } = useAuth()

  if (loading) return <Shell><p className="text-muted text-sm">Loading…</p></Shell>
  if (!user) return <SignIn />
  if (!isAdmin) {
    return (
      <Shell>
        <Centered>
          <h1 className="text-xl font-bold">No access</h1>
          <p className="text-muted mt-2 text-sm">{user.email} isn't an admin account.</p>
          <button onClick={signOut} className={`${btnGhost} mt-6`}>Sign out</button>
        </Centered>
      </Shell>
    )
  }
  return <Dashboard />
}

export default function AdminPage() {
  useEffect(() => {
    document.title = 'Admin | Coylabs'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <AuthProvider>
      <Gate />
    </AuthProvider>
  )
}
