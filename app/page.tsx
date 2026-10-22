import AmbientBackground from '@/components/AmbientBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Journey from '@/components/Journey'
import Voluntary from '@/components/Voluntary'
import Events from '@/components/Events'
import Awards from '@/components/Awards'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Portfolio() {
  return (
    <main>
      <AmbientBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Voluntary />
      <Events />
      <Awards />
      <Resources />
      <Contact />
      <Footer />
    </main>
  )
}