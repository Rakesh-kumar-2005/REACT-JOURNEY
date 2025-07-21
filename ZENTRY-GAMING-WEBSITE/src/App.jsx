import React from 'react'
import Hero from './components/hero'
import About from './components/About'
import NavBar from './components/NavBar'
import Feature from './components/Feature'
import Story from './components/Story'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Feature />
      <Story />
    </main>
  )
}

export default App
