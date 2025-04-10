import React from "react";
import { FiUsers, FiTrendingUp, FiSettings, FiBriefcase } from "react-icons/fi";
import Header from './Header';
import Footer from "./Footer"
const services = [
  {
    icon: <FiUsers className="text-blue-600" size={20} />,
    title: "Digital Adashe Savings",
    highlight: "Unique to Thundr",
    description:
      "Experience the power of communal savings in a digital format. Our Digital Adashe system lets you join, manage, or create savings groups with automation, transparency, and security. No other platform offers this feature with such ease.",
  },
  {
    icon: <FiBriefcase className="text-blue-600" size={20} />,
    title: "Crowdfunding for Business",
    highlight: "Raise Funds Fast",
    description:
      "Thundr empowers entrepreneurs and SMEs to raise capital through community-powered crowdfunding. Whether you're launching a product or expanding operations, mobilize support quickly and efficiently.",
  },
  {
    icon: <FiSettings className="text-blue-600" size={20} />,
    title: "Customizable Savings Plans",
    highlight: "Your Rules, Your Way",
    description:
      "Create savings plans tailored to your goals — daily, weekly, or monthly. Set targets, automate deposits, and track your progress. It's flexible, smart saving built around your lifestyle.",
  },
  {
    icon: <FiTrendingUp className="text-blue-600" size={20} />,
    title: "Investment Integration",
    highlight: "Grow Your Savings",
    description:
      "Put your money to work with seamless investment options. Link your savings to vetted investment products directly within the app to earn more while you save.",
  },
];

export default function Services() {
  return (
<div className="background">
    <Header />

    <section id="services" className="py-16  text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
        <p className="text-center text-gray-500 mb-12">
          Thundr Finance is redefining the way you save, raise, and grow your money.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="relative">
              {/* Shadow Layer to create "stacked" card look */}
              <div className="absolute top-2 left-2 w-full h-full bg-blue-100 rounded-2xl z-0"></div>

              <div className="relative z-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-600">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
</div>
  );
}
