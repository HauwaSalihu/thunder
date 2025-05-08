import React from 'react'
import { NavLink } from 'react-router'

function Hero() {
  return (
    <div className='mb-60 p-3 flex flex-col items-center justify-center mt-20'>
      <h1 className='text-center text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug max-w-4xl'>
        Digitizing <span className='text-[#A020F0] '>Nigeria’s Traditional Savings Culture</span>
      </h1>
      <p className='text-center text-lg md:text-xl text-gray-600 mt-6 max-w-2xl'>
        We’re a fintech startup building smart tools for digital savings, business crowdfunding, and simple investment options—rooted in the trusted Adashe model.
      </p>
      <p className='text-center text-base md:text-lg text-gray-500 mt-4 max-w-xl'>
        Our mission is to drive financial inclusion, boost transparency, and create real opportunities for wealth building.
      </p>
      <div className='mt-8 flex gap-4'>
        <NavLink to={"https://forms.gle/JnSNWv9WQdM8Fzbn6"} target='_blank'>
          <button className='bg-[#A020F0]  text-white py-3 px-6 rounded-full text-sm lg:text-lg font-medium hover:bg-orange-700 transition'>
            Join the Waitlist
          </button>
        </NavLink>
        <NavLink to={"/thunder-contact"}>
          <button className='border border-[#A020F0]  text-[#A020F0]  py-3 px-6 rounded-full text-sm lg:text-lg font-medium hover:bg-orange-100 transition'>
            Partner With Us
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Hero