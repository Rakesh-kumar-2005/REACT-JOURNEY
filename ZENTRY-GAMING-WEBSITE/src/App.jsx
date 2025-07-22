import React from 'react'
import Hero from './components/hero'
import About from './components/About'
import NavBar from './components/NavBar'
import Feature from './components/Feature'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Feature />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
