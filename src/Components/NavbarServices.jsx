import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const NavbarServices = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 ">
      <div className="flex items-center justify-between px-6 pt-5 pb-3">

        {/* Left Side Logo (Always visible) */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">Reprizo</Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/features" className="hover:text-blue-600 transition">Features</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link to="/shop" className="hover:text-blue-600 transition">Shop</Link></li>

        </ul>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <Link to="/contact" className="hover:text-blue-600 transition font-medium">Contact</Link>

          <Link to="/signin">
  <button className="flex items-center gap-2 px-4 py-1 hover:bg-blue-600 hover:text-white transition">
    <FiLogIn className="text-lg" />
    Sign In
  </button>
</Link>


          <Link to="/cart" className="flex items-center space-x-1 hover:text-blue-600 transition">
            <FaShoppingCart className="text-xl" />
            <span className="text-sm font-medium">CART</span>
            <span className="text-sm">(0)</span>
          </Link>
        </div>

        {/* Mobile: Hamburger + Login */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/signin" className="text-2xl text-gray-700">
            <FiLogIn />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/features" className="hover:text-blue-600 transition">Features</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link to="/signin" className="hover:text-blue-600 transition">Sign In</Link></li>
            <li>
              <Link to="/cart" className="flex items-center space-x-1 hover:text-blue-600 transition">
                <FaShoppingCart className="text-xl" />
                <span className="text-sm font-medium">CART</span>
                <span className="text-sm">(0)</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarServices;
