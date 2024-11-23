import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';  
import { BiSupport } from 'react-icons/bi';
import { FaLock } from 'react-icons/fa';  
import { AiOutlineClockCircle } from 'react-icons/ai';  

const servicesData = [
  {
    icon: <LiaShippingFastSolid size={36} />,
    title: 'Fast Delivery',
    description: 'We will deliver your order as soon as possible',
  },
  {
    icon: <BiSupport size={36} />,
    title: 'Support 24/7',
    description: 'We ensure your safety and security while delivering your order',
  },
  {
    icon: <FaLock size={36} />,  // Use FaLock for secure payment
    title: 'Secure Payment',
    description: 'We use secure payment methods to protect your sensitive data',
  },
  {
    icon: <AiOutlineClockCircle size={36} />,  // Use AiOutlineClockCircle for the clock icon
    title: '100% Money Back',
    description: 'You have 7 Days to Return',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
      {/* Updated flex container to display services in a row */}
      <div className="flex flex-wrap justify-center gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4 text-[#0099cc]">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
