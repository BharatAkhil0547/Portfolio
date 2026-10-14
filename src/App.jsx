import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <section id='home'>
        <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='services'>
        <Services/>
      </section>
      
      <section id='contact'>
        <Contact/>
      </section>
      
      
      <Footer/>

      

    </div>
  )
}

export default App
