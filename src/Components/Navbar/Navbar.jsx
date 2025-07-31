import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-[10vh] bg-white z-50 flex items-center justify-between px-8 shadow-md">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Reprizo</div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">Features</li>
            <li className="hover:text-black cursor-pointer">Contacts</li>
          </ul>
        </nav>
      </div>

      {/* CTA Button */}
      <div className="text-sm font-semibold border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
        Instant Quote
      </div>
    </header>
  );
};

export default Navbar;
