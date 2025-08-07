import React from "react";
import NavbarServices from "../Components/NavbarServices";
import ProductGrid from "../Components/ProductsGrid";

const Elementor = () => {
  return (
    <div className="m-0 p-0 overflow-x-hidden bg-white">
      {/* Navbar */}
      <NavbarServices />

      {/* Top Section below Navbar */}
      <section className="bg-black text-white min-h-[60vh] flex flex-col justify-center items-center px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
        <p className="text-base md:text-lg text-gray-400 mb-2">Home / Shop</p>
      </section>

      {/* Grid Layout with Products and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-20 px-8">
        {/* Product Grid */}
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-14">
          {/* Search Box */}
          <div className="h-[200px] bg-black p-4 text-white w-full max-w-xs ml-1 flex items-center justify-center">
            <div className="w-full">
              <h4 className="text-2xl font-semibold mb-4">Search</h4>
              <div className="flex items-center bg-white rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-3 py-2 text-white bg-[#2e2e2e] focus:outline-none text-lg"
                />
                <button className="bg-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Cart Box */}
          <div className="bg-[#f7f8fa] p-4 text-black w-full max-w-xs h-[200px] ml-1 flex items-center justify-center">
            <div className="p-2 text-black w-full max-w-sm mx-auto">
              <h4 className="text-lg font-semibold mb-2">Shopping Cart</h4>
              <p>No products in the cart.</p>
            </div>
          </div>

          {/* Categories Box */}
          <div className="bg-[#f7f8fa] p-4 text-white w-full max-w-xs h-[380px] ml-1">
            <div className="p-4 text-black w-full max-w-sm mx-auto bg-[#f7f8fa]">
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                {[
                  { label: "Affordable Watches", href: "/affordable-watches" },
                  { label: "Gold Watches", href: "/gold-watches" },
                  { label: "Jewelry", href: "/jewelry" },
                  { label: "Limited Edition Watches", href: "/limited-edition" },
                  { label: "Mechanical Watches", href: "/mechanical" },
                  { label: "Sailing Watches", href: "/sailing-watches" },
                  { label: "Swiss Watches", href: "/swiss-watches" },
                  { label: "Vintage Watches", href: "/vintage-watches" },
                  { label: "Watches with Gems", href: "/watches-with-gems" },
                ].map((item) => (
                  <li key={item.href} className="flex items-center">
                    <span className="text-brown-500 mr-2">--</span>
                    <a
                      href={item.href}
                      className="text-black-200 hover:text-[#a67c52] transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price Filter */}
          <div className="bg-[#f7f8fa] p-4 text-black w-full max-w-xs h-[200px] ml-1">
            <div className="p-4 rounded-md text-black w-full max-w-sm mx-auto bg-[#f7f8fa]">
              <h4 className="text-lg font-semibold mb-4">Price Filter</h4>
              <div className="relative flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-[#A0522D] rounded-sm shadow-md"></div>
                <div className="w-40 h-2 bg-[#A0522D] mx-1 rounded-full"></div>
                <div className="w-3 h-3 bg-[#A0522D] rounded-sm shadow-md"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Price: <span className="font-semibold">$31</span> — <span className="font-semibold">$430</span>
                </span>
                <button
                  type="button"
                  className="text-black px-3 py-1 border border-[#A0522D] hover:bg-[#A0522D]/10 transition"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-[#f7f8fa] p-4 text-white w-full max-w-xs h-[250px] ml-1">
            <div className="p-4 rounded-md text-black w-full max-w-sm mx-auto bg-[#f7f8fa]">
              <h4 className="text-lg font-semibold mb-4">Shop by Tag</h4>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Accessories</span>
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Bracelet</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Earrings</span>
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Gems</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Necklace</span>
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Quality</span>
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Ring</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Watches</span>
                  <span className="px-3 py-1 bg-transparent rounded border text-sm">Water-resistant</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Elementor;
