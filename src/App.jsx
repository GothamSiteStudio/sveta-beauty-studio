import { useReveal } from './lib/useReveal.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Process from './components/Process.jsx'
import Hygiene from './components/Hygiene.jsx'
import Reviews from './components/Reviews.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsappFloat from './components/WhatsappFloat.jsx'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <About />
        <Process />
        <Hygiene />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
