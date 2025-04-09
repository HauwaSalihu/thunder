import React from 'react'

function About() {
  return (
 <div>
        {/* Empowering Journey Section */}
        <section className="flex flex-col md:flex-row container mx-auto items-center justify-between px-6 py-20 gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Empowering Your Digital Journey</h2>
            <p className="mb-6 text-gray-700">At Thunder Infotech, we specialize in providing tailored IT services, including web and app design, consultancy, and more, to help businesses thrive in the digital landscape.</p>
            <button className="px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition">Contact</button>
          </div>
          <div className="relative md:w-1/2">
            <img src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd?auto=format&fit=clip&w=328&q=100" alt="Laptop" className="rounded-xl w-full" />
            <div className="absolute bottom-4 left-4 bg-blue-800 text-white rounded px-6 py-4 flex gap-10 shadow-lg">
              <div>
                <p className="text-2xl font-bold">150+</p>
                <p className="text-sm">Proven Results</p>
              </div>
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm">Trusted by Clients</p>
              </div>
            </div>
          </div>
        </section>
  
     
 </div>
  )
}

export default About