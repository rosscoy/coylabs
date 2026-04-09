import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'
import { BackgroundPaths } from './components/ui/background-paths'

export default function App() {
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
