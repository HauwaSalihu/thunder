import React from 'react'
import { NavLink} from 'react-router'

function Header() {
  return (
    <nav className='h-40 text-gray-800  flex container mx-auto items-center justify-between px-2'>
        <img src="thnder.png" alt="Logo" className='h-100' />
        <ul className='flex gap-10 text-lg font-semibold'>
          <li className='hover:text-blue-600 cursor-pointer'><NavLink to='/'>Home</NavLink></li>
          <li className='hover:text-blue-600 cursor-pointer'>Services</li>
          <li className='hover:text-blue-600 cursor-pointer'><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
        <button className='rounded-full py-2 px-5 text-orange-700 border border-orange-600'>Request Demo</button>
    </nav>
  )
}

export default Header