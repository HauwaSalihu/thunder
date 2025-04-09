import React from 'react'
import { NavLink } from 'react-router'

function Header() {
      const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }
  return (
    
     <nav className="text-sm font-medium justify-between fixed w-full  shadow-sm bg-white flex items-center lg:pr-20 lg:h-30  h-20 text-gray-800">
          <NavLink to="/">
          <img src="/thnder.png" alt="" className='lg:w-100 w-70 -ml-[30px] lg:ml-0 left-10' />
          </NavLink>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 text-lg font-semibold">
            <li className="hover:border-b-2 hover:text-black border-black pb-1 cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-black hover:border-b-2 cursor-pointer">
                <NavLink to="#">
              Services
                </NavLink>
            </li>
            <li  className="hover:text-black hover:border-b-2 cursor-pointer">
                <NavLink to="/thunder">
                Our Products
                </NavLink>
            </li>
            <li className="hover:text-black hover:border-b-2 cursor-pointer">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          {/* Mobile Hamburger */}
          <div className="md:hidden m-4">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="absolute top-full  left-0 w-full bg-white shadow-md md:hidden">
              <ul className="flex flex-col gap-4 p-4 text-lg font-semibold">
                <li onClick={() => setIsMenuOpen(false)} className="hover:text-black hover:border-b-2 cursor-pointer">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={() => setIsMenuOpen(false)} className="hover:text-black hover:border-b-2 cursor-pointer">
                  Services
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <NavLink to="/thunder">
                   Our Products
                  </NavLink>
                </li>
                <li onClick={() => setIsMenuOpen(false)} className="hover:text-black hover:border-b-2 cursor-pointer">
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          )}
        </nav>

  )
}

export default Header