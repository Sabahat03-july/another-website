import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 px-4 py-12 mx-auto">
      {/* Left side: Text Content */}
      <div className="flex flex-col justify-center items-start gap-4 sm:gap-6">
        <p className="text-[#0099cc] text-xl mt-8 sm:mt-0 font-semibold">
          SHOP OUR FRESHEST!
        </p>
        <h2 className="sm:text-5xl text-3xl font-bold leading-tight">
          FRESH HAND-PICKED
        </h2>
        <h2 className="sm:text-5xl text-3xl font-bold leading-tight">
          VEGETABLES <span className="text-red-600">EVERYDAY</span>
        </h2>
        <button className="bg-accent hover:bg-accentDark px-8 py-4 rounded-md text-white w-fit mt-4 transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>

      <div className="grid place-items-center">
        {/* image here */}
        <Image
          src="/Hero.webp"  // Replace with your image path
          alt="Fresh Vegetables"
          width={400} height={400}
          className='rounded'
        />
      </div>
    </section>
  );
};

export default Hero;
