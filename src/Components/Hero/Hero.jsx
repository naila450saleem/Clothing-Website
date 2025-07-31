import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src="/model.jpg"
        alt="Jewelry Model"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

      {/* Text Content */}
      <div className="absolute top-1/2 left-40 transform -translate-y-1/2 text-white max-w-xl z-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-lg font-serif text-white">
          Jewelry That Will Make You Shine
        </h1>
        <p className="text-white text-base md:text-lg leading-relaxed mb-10 font-light tracking-wide max-w-md">
          Feel the beauty within. View the catalogue below!
        </p>

        {/* CTA Button */}
        <button className="bg-transparent text-white border border-gray-400 px-6 py-3 font-medium uppercase transition duration-300 hover:bg-white hover:text-black">
          View Prices
        </button>
      </div>
    </section>
  );
};

export default Hero;
