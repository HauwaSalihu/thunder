import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white rounded-t-3xl py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-xl font-bold mb-2">Services</h4>
        <p className="text-sm">Custom IT solutions for your business needs.</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook text-white"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram text-white"></i>
          </a>
          <a href="#" aria-label="TikTok">
            <i className="fab fa-tiktok text-white"></i>
          </a>
          <a href="#" aria-label="X">
            <i className="fab fa-twitter text-white"></i>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">Reach Us</h4>
        <p className="text-sm">+234 806 542 3599</p>
        <p className="text-sm">contact@thunderinfotech.cloud</p>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">Design</h4>
        <p className="text-sm mb-2">Enter your email address</p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-2 rounded-md border border-white text-white mb-3"
        />
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit 
        </button>
      </div>
    </div>
    <div className="text-center text-sm text-white mt-10">© 2025. Thunder Infotech Concept All rights reserved.</div>
  </footer>
  )
}

export default Footer