import './App.css'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'

function App() {
  

  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="about"><About /></section>
        <section id="gallery"><Gallery /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  )
}

export default App
