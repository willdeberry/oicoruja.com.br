import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
