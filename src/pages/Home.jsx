import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

function Home() {
  return (
    <div className="font-sans text-gray-900 ">
      <Hero />
      <About />
      <Services />
      </div>
  )
}

export default Home