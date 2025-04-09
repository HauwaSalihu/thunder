import React from 'react'
import { NavLink } from 'react-router'
function Footer() {
  return (
    <footer className='w-full  bg-gray-900 text-white py-4 flex items-center justify-center'>
      <NavLink to="/">

      <p className='text-sm'>
        Powered by <span className='font-bold text-orange-500'>Thunder Infotech Concept</span>
      </p>
      </NavLink>
    </footer>
  )
}

export default Footer