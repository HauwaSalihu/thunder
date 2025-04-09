import React from 'react'
import { NavLink } from 'react-router'
function Hero() {
  return (
    <div className=' mb-60 p-3 flex flex-col items-center justify-center mt-20'>
        <h1 className='text-center text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug max-w-4xl'>
          Smart, <span className='text-orange-600'>customizable saving plans</span> that help users set goals and automate deposits
        </h1>
        <p className='text-center text-lg md:text-xl text-gray-600 mt-6 max-w-2xl'>
          Start saving smarter today with our easy-to-use platform. Set your goals, automate your deposits, and watch your savings grow effortlessly.
        </p>
        <div className='mt-8 flex gap-4'>
           <NavLink to={"https://forms.gle/JnSNWv9WQdM8Fzbn6"} target='_blank'>
          <button className='bg-orange-600 text-white py-3 px-6 rounded-full text-sm lg:text-lg font-medium hover:bg-orange-700 transition'>

            Join the waitlist
          </button>
           </NavLink>
          <NavLink to={"/contact"}>
          
          <button className='border border-orange-600 text-orange-600 py-3 px-6 rounded-full text-sm lg:text-lg font-medium hover:bg-orange-100 transition'>
            Partner With Us
          </button>
          </NavLink>
        </div>
    </div>
  )
}

export default Hero