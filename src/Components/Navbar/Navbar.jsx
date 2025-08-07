import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, ChevronDown, X, Search } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items || []);
  const cartCount = cartItems.length;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false); // NEW

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
  const toggleSearchBar = () => setShowSearchBar(!showSearchBar); // NEW

  const hideNavbarPaths = ["/checkout"];
  if (hideNavbarPaths.includes(location.pathname)) return null;

  const navLinks = [
    { name: "home", to: "/" },
    { name: "about", to: "/about" },
    { name: "blog", to: "/blog" },
    { name: "shop", to: "/shop" },
    { name: "our services", to: "/features" },
    { name: "faqs", to: "/faqs" },
    { name: "privacy policy", to: "/privacy-policy" },
    { name: "contact", to: "/contact" },
  ];

  const categories = ["Men", "Women", "Kids", "Accessories"];

  return (
    <>
      {/* Top Strip */}
      <div className="w-full sticky top-0 z-[60] bg-brand-midnight text-white text-xs sm:text-sm py-2 text-center px-2 sm:px-0">
        FREE SHIPPING ON ORDERS OVER $50 | CALL US: 1-800-CORE-WEAR
      </div>

      {/* Navbar */}
      <header className="fixed top-[32px] w-full z-50 bg-white shadow-md h-[64px] sm:h-[72px] flex items-center justify-between px-4 sm:px-6 md:px-12 pt-4 sm:pt-0">
        {/* Logo + Links */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Link to="/">
            <img src="/logo1.png" alt="Logo" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-5 lg:gap-8 text-gray-600 font-medium items-center">
            {navLinks.map(({ name, to }) => (
              <Link key={name} to={to} className="hover:text-black capitalize">
                {name}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-gray-700 hover:text-black cursor-pointer capitalize">
                <span>categories</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 bg-white border mt-2 shadow-lg p-2 w-48 z-50 rounded invisible group-hover:visible group-hover:opacity-100 opacity-0 transition ease-in-out duration-200">
                {categories.map((cat, index) => (
                  <React.Fragment key={cat}>
                    <Link
                      to={`/categories/${cat.toLowerCase()}`}
                      className="block px-4 py-2 rounded hover:bg-brand-midnight hover:text-white text-sm text-gray-700"
                    >
                      {cat}
                    </Link>
                    {index !== categories.length - 1 && (
                      <hr className="border-t border-gray-200 my-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Instant Price Button (Desktop only) */}
          <button className="hidden md:block text-sm font-semibold border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            Instant Price
          </button>

          {/* Search Icon */}
          <button onClick={toggleSearchBar}>
            <Search className="w-6 h-6 text-gray-700 hover:text-black" />
          </button>

          {/* Desktop: Show Cart */}
          <Link to="/cart" className="hidden md:block relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      {showSearchBar && (
        <div className="fixed top-[96px] sm:top-[104px] left-0 w-full z-40 bg-white px-4 py-3 shadow-md border-b">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-2xl mx-auto block border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[96px] sm:top-[104px] left-0 w-full bg-white shadow-lg z-40 px-6 py-4 md:hidden">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button onClick={toggleMenu}>
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-gray-700">
            {navLinks.map(({ name, to }, idx) => (
              <Link
                key={name}
                to={to}
                className={`capitalize hover:text-black ${idx === 0 ? 'mt-2' : ''}`}
                onClick={toggleMenu}
              >
                {name}
              </Link>
            ))}

            {/* Collapsible Categories */}
            <div className="pt-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleSubMenu}
              >
                <span className="font-semibold text-sm">Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isSubMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {isSubMenuOpen && (
                <div className="flex flex-col gap-2 mt-2 pl-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/categories/${cat.toLowerCase()}`}
                      className="text-gray-600 hover:text-black text-sm"
                      onClick={toggleMenu}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
