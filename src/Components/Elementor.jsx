import React from 'react';

const Elementor = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* Section 1: Jewelry Repairs Services */}
  <section className="flex flex-col lg:flex-row items-center pt-16 px-6 md:px-10 lg:px-20 xl:px-32">
  <div className="w-full lg:w-1/2 bg-gray-100 hover:bg-gray-400 transition duration-300 p-4">
    <img
      src="/t2.png"
      alt="Jewelry Service"
      className="w-full h-auto block"
    />
  </div>
  <div className="w-full lg:w-1/2 mt-6 mb-6 px-4 lg:pl-16">
  <h2 className="text-xl md:text-4xl font-serif font-semibold mb-4">
    T-Shirt Customization Services
  </h2>
  <p className="text-gray-600 text-sm md:text-base mb-4">
    With proper care and high-quality customization, your t-shirts can reflect your personal style...
  </p>
  <button className="bg-brand-midnight text-white border border-transparent px-6 py-2 hover:bg-brand-blue transition text-sm md:text-base">
    LEARN MORE
  </button>
</div>

</section>

<section className="flex flex-col-reverse lg:flex-row items-center pb-16 px-6 md:px-10 lg:px-20 xl:px-32">
  <div className="w-full lg:w-1/2 mt-6 mb-6 px-4 lg:pl-16">
  <h2 className="text-xl md:text-4xl font-serif font-semibold mb-4">
    T-Shirt Customization Services
  </h2>
  <p className="text-gray-600 text-sm md:text-base mb-4">
    With proper care and high-quality customization, your t-shirts can reflect your personal style...
  </p>
  <button className="bg-brand-midnight text-white border border-transparent px-6 py-2 hover:bg-brand-blue transition text-sm md:text-base">
    LEARN MORE
  </button>
</div>

  <div className="w-full lg:w-1/2 bg-gray-100 hover:bg-gray-400 transition duration-300 p-4">
    <img
      src="/t2.png"
      alt="Jewelry Service"
      className="w-full h-auto block"
    />
  </div>
</section>







      

      {/* Section 2: Jewelry & Watch Repairs */}
      <section className="text-center py-16 px-6 md:px-10 lg:px-20 xl:px-32">
  <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
    Clothing & Fashion Accessories
  </h2>
  <p className="text-gray-600 max-w-3xl mx-auto mb-10">
    Our store brings you high-quality fashion essentials including stylish bags, premium jackets, and perfectly paired jeans and shirts. Whether you're looking to enhance your wardrobe or find the perfect statement piece, our collection blends comfort, durability, and contemporary design.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Product 1 */}
    <div className="text-center relative bg-white p-4 shadow-md rounded-md">
      <span className="absolute top-2 right-2 bg-brand-midnight text-white text-xs font-bold px-2 py-1 rounded">-29%</span>
      <img
        src="/t2.png"
        alt="Jeans Shirt Combo"
        className="mx-auto mb-4 transition duration-500 ease-in-out transform hover:scale-110"
      />
      <p className="text-sm text-gray-600 line-through">$450.00</p>
      <p className="text-lg font-medium text-gray-800">Classic Blue Jeans with Cotton Shirt Combo</p>
      <p className="text-black font-semibold">$430.00</p>
    </div>

    {/* Product 2 */}
    <div className="text-center relative bg-white p-4 shadow-md rounded-md">
      <span className="absolute top-2 right-2 bg-brand-midnight text-white text-xs font-bold px-2 py-1 rounded">-29%</span>
      <img
        src="/t2.png"
        alt="Leather Handbag"
        className="mx-auto mb-4 transition duration-500 ease-in-out transform hover:scale-110"
      />
      <p className="text-sm text-gray-600 line-through">$45.00</p>
      <p className="text-lg font-medium text-gray-800">Stylish Leather Handbag</p>
      <p className="text-black font-semibold">$31.99</p>
    </div>

    {/* Product 3 */}
    <div className="text-center relative bg-white p-4 shadow-md rounded-md">
      <span className="absolute top-2 right-2 bg-brand-midnight text-white text-xs font-bold px-2 py-1 rounded">-29%</span>
      <img
        src="/t2.png"
        alt="Denim Jacket"
        className="mx-auto mb-4 transition duration-500 ease-in-out transform hover:scale-110"
      />
      <p className="text-lg font-medium text-gray-800">Premium Winter Denim Jacket</p>
      <p className="text-black font-semibold">$290.00</p>
    </div>
  </div>
</section>


      {/* Section 3: Swiss Essence */}
      <section className="flex flex-col lg:flex-row items-center py-16 px-6 md:px-10 lg:px-20 xl:px-32 bg-gray-50">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
  src="/t2.png"
  alt="Swiss Essence"
  className="w-full h-auto transform transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-1 hover:shadow-xl ta-under-strips"
/>

        </div>
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Swiss Essence
          </h2>
          <p className="text-gray-600 mb-6">
            Here go three good news. First: some things will never get old. Second: we believe that a good watch is a great opportunity to complement the look. Third: watches have come in fashion again. Doesn’t matter retro or modern, watches now are essential elements of a great look.
          </p>
          <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
            READ OUR STORY
          </button>
        </div>
      </section>

     

    </div>
  );
};

export default Elementor;
