import React from 'react'

function Services() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-100 py-20">
         {/* Tailored IT Solutions Subsection */}
         <section className="text-center px-6 pb-20">
          <h2 className="text-3xl font-bold mb-4">Tailored IT Solutions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Expert services in web design, app design, and consultancy tailored to your business needs.</p>
        </section>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        {/* App Development */}
        <div className="bg-gradient-to-br from-cyan-100 to-pink-100 p-6 mb-30 rounded-2xl shadow-xl h-80 flex flex-col">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">App Development</h3>
            <p className="text-gray-700 mb-6">
              Innovative app design and development services to bring your ideas to life and engage users.
            </p>
          </div>
          <div className="mt-auto">
            <img
              src="https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?auto=format&fit=clip&w=861"
              alt="Design workflows #withMake"
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Web Design Services */}
        <div className="bg-gradient-to-br from-cyan-100 to-pink-100 mb-30 p-6 rounded-2xl shadow-xl h-80 flex flex-col">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Design Services</h3>
            <p className="text-gray-700 mb-6">
              Custom web design solutions that enhance user experience and drive engagement for your business.
            </p>
          </div>
          <div className="mt-auto">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="I design and develop experiences that make people's lives simple"
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
        
          <img
            src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58?auto=format&fit=clip&w=861"
            alt="Turn your data into beautiful, powerful mobile apps"
            className="rounded-xl shadow-md"
          />
       

        <div className="bg-blue-800 text-white p-8 rounded-2xl shadow-xl text-center">
          <p className="text-2xl mb-4">★★★★★</p>
          <p className="text-lg">
            Thunder Infotech transformed our online presence with stunning web design and exceptional app solutions. Highly recommend!
          </p>
          <p className="mt-4 font-bold">MK. Abba</p>
        </div>
      </div>

      {/* Our Projects Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-gray-600 text-lg">
          Explore our diverse portfolio of bespoke IT service solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/img1.png"
            alt="Project web design on phone"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/img2.png"
            alt="App wireframe and user flow sketches"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="md:flex md:justify-between mt-6 md:text-left text-center mb-16">
       <div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8">Web Design</h3>
        <p className="text-gray-600 mb-4">
          Custom websites tailored to your business needs and goals.
        </p>
       </div>
        <button className="h-12 px-15 border border-gray-400 rounded-full hover:bg-gray-100 transition">
          Learn
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/img3.png"
            alt="App design and coding interface"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
          src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt="Instagram-like mobile app preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className=" md:flex md:justify-between md:text-left text-center mb-20">
        <div>
        <h3 className="text-2xl font-bold text-gray-900">App Design</h3>
        <p className="text-gray-600 mb-4">
          Innovative applications designed for seamless user experiences.
        </p>

        </div>
        <button className="h-12 px-15 border border-gray-400 rounded-full hover:bg-gray-100 transition">
          Discover
        </button>
      </div>

    
    </div>
  </div>
  )
}

export default Services