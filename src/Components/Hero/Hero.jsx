import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start px-6 md:px-10 lg:px-20 xl:px-32 py-12 bg-white mt-16 mb-16">
      {/* Left Side Heading */}
      <div className="lg:w-1/5 w-full pr-6 pt-10 mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold font-['Playfair_Display'] uppercase leading-tight text-gray-800 whitespace-nowrap">
          What's <br />New
        </h2>
      </div>

      {/* Right Side: 6 Circles */}
      <div className="lg:w-4/5 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[
          { image: "/t1.jpg", label: "T-Shirts" },
          { image: "/tex.png", label: "Textile" },
          { image: "/j1.jpg", label: "Jeans" },
          { image: "/jec5.jpg", label: "Leather Wear" },
          { image: "/g3.jpg", label: "HandWear" },
          { image: "/b3.jpg", label: "Accessories" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-300 shadow-sm transform transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-contain object-center"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-black">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
