import React, { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import ViewToggle from "./ViewToggle"; // Make sure casing matches

const products = [
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-1.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-2.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-3.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-4.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-5.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-6.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-7.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
  {
    name: "White Gold Earrings in White Diamonds",
    image: "/product-8.webp",
    originalPrice: 450,
    currentPrice: 430,
    discount: "-4%",
  },
];

export default function ProductsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="lg:col-span-3 pl-24">
      {/* View Toggle Icons */}
      <div className="flex items-center justify-between mb-4 px-4">
        <ViewToggle />
        <div className="flex justify-end mb-4 pl-4">
          <select
            name="orderby"
            aria-label="Shop order"
            className="border border-gray-300 rounded bg-white text-gray-700 text-sm shadow-sm px-4 py-2 focus:outline-none w-60"
            defaultValue="date"
          >
            <option value="popularity">Sort by latest</option>
            <option value="rating">Sort by average rating</option>
            <option value="date">Sort by latest</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        {currentProducts.map((product, i) => (
          <div
            key={i}
            className="border p-4 rounded-md hover:shadow-md transition relative bg-[#f7f8fa]"
          >
            {product.discount && (
              <span className="absolute top-2 right-2 bg-amber-800 text-white text-sm px-3 py-1.5">
                {product.discount}
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[500px] aspect-square object-cover mx-auto mb-4 rounded-md"
            />

            <h3 className="text-base font-medium text-gray-700 mb-1 text-center">
              {product.name}
            </h3>

            <div className="text-sm text-center">
              <span className="text-gray-500 line-through mr-2">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-red-600 font-semibold">
                ${product.currentPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 mb-24 gap-2">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            ←
          </button>
        )}

        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            className={`border px-3 py-1 rounded hover:bg-gray-100 ${
              currentPage === page + 1 ? "bg-black text-white" : ""
            }`}
          >
            {page + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
