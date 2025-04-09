import React from 'react'

function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-900 px-4 py-16">
      <section className="text-white text-center max-w-5xl mx-auto py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Tailored IT Solutions<br />for Your Business
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8">
          Expert web and app design services to elevate your brand.
        </p>
        <button className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition">
          Get Started
        </button>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <div className="bg-white/10 p-4 sm:p-6 rounded text-white backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-2">Web Design</h3>
            <p className="text-sm">
              We craft modern, responsive websites tailored to your brand identity. From user-focused UI/UX to smooth animations, our designs don't just look good—they convert. Whether it's a portfolio, landing page, or full-scale business site, we bring your digital vision to life with clarity and style.
            </p>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded text-white backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-2">IT Project Management & Consultancy</h3>
            <p className="text-sm">
              We help businesses bring their tech ideas to life—on time and within budget. From app development planning to full-cycle project delivery, we provide expert guidance and hands-on support. Our approach ensures seamless execution, risk management, and agile development tailored to your goals.
            </p>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded text-white backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-2">IT Strategy</h3>
            <p className="text-sm">
              Align your technology with your business goals. We develop forward-thinking IT strategies that fuel growth, boost efficiency, and future-proof your operations. From digital transformation roadmaps to tech stack evaluation, we provide insights that make tech your strongest asset.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero