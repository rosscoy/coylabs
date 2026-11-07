import { lazy, Suspense, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'
import { BackgroundPaths } from './components/ui/background-paths'
import ClientBriefPage from './pages/ClientBriefPage'

const AdminPage = lazy(() => import('./pages/AdminPage'))

// Treat "/brief/" the same as "/brief".
const path = window.location.pathname.replace(/\/+$/, '') || '/'

function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | Coylabs Development'
  }, [])
  return (
    <div className="min-h-screen bg-warm font-sans text-ink flex items-center justify-center px-6">
      <meta name="robots" content="noindex" />
      <div className="text-center max-w-md">
        <p className="text-accent font-semibold uppercase" style={{ fontSize: 12, letterSpacing: '0.1em' }}>404</p>
        <h1 className="font-bold mt-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>This page doesn't exist.</h1>
        <p className="text-muted mt-3">The link may be old or mistyped.</p>
        <a href="/" className="mt-6 inline-block bg-accent hover:bg-accent-hover text-warm text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
          Back to Coylabs →
        </a>
      </div>
    </div>
  )
}

export default function App() {
  if (path === '/admin') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-warm" />}>
        <AdminPage />
      </Suspense>
    )
  }

  if (path === '/brief') {
    return <ClientBriefPage />
  }

  if (path !== '/' && path !== '/index.html') {
    return <NotFound />
  }

  return (
    <div className="font-sans bg-warm text-ink">
      <BackgroundPaths />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Services />
        <About />
        <QuoteSection />
      </main>
      <Footer className="relative z-10" />
    </div>
  )
}
