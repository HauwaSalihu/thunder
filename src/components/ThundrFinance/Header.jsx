import React, { useState } from 'react'
import { NavLink } from 'react-router'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container mx-auto'>

    <nav className="relative flex items-center justify-between m-5 h-40 text-gray-800">
      <NavLink to="/thundr" className="w-50 ">
       <h1 className='text-3xl w-80 font-bold text-orange-600'>Thundr Finance</h1>
      </NavLink>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 text-lg font-semibold">
        <li className="hover:text-orange-600  cursor-pointer">
          <NavLink to="/thundr">Home</NavLink>
        </li>
        <li className="hover:text-orange-600  cursor-pointer">
          <NavLink to="/services">
          Services
          </NavLink>
        </li>
        <li className="hover:text-orange-600  cursor-pointer">
          <NavLink to="/thunder-contact">Contact Us</NavLink>
        </li>
      </ul>
      {/* Desktop Request Demo Button */}
      <div className="hidden md:block">
        <NavLink to="/thunder-contact">
          <button className="rounded-full py-2 px-5 hover:bg-orange-500  text-orange-700  border border-orange-500 hover:text-white ">
            Request Demo
          </button>
        </NavLink>
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-4 text-lg font-semibold">
            <li onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600  cursor-pointer">
              <NavLink to="/thundr">Home</NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600  cursor-pointer">
              <NavLink to="/services">

              Services
              </NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600  cursor-pointer">
              <NavLink to="/thunder-contact">Contact Us</NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <NavLink to="/thunder-contact">
                <button className="w-full rounded-full py-2 px-5 hover:bg-orange-500  text-orange-600  border border-orange-500 ">
                  Request Demo
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Header