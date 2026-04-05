import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans bg-warm text-ink">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  )
}
