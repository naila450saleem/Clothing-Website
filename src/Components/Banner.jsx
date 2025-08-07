import React, { useEffect, useState } from "react";

const slides = [
  { id: 1, image: "/banner1.jpg" },
  { id: 2, image: "/banner2.jpg" },
  { id: 3, image: "/banner3.jpg" },
  { id: 4, image: "/banner4.jpg" },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[40vh] sm:h-[40vh] md:h-[60vh] lg:h-[90vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 h-full relative">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Text Overlay */}
  <div className="absolute bottom-3 sm:bottom-4 md:bottom-16 left-3 sm:left-6 md:left-16 z-20 text-white max-w-[90%] sm:max-w-md md:max-w-xl pl-16">

  <p className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose font-light mb-4">
    Feel the beauty within. View the catalogue below!
  </p>
  <button className="bg-brand-midnight text-white border border-gray-400 px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium uppercase transition duration-300 hover:bg-brand-blue hover:text-white">
    View Prices
  </button>
</div>


    </section>
  );
};

export default Banner;
