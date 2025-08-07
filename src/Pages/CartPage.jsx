import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-24">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        {/* Left: Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-black">
            Velvour Shop
          </Link>
          <nav className="flex gap-6 text-gray-700 font-medium">
            <Link to="/mens" className="hover:text-black">Men's</Link>
            <Link to="/boys" className="hover:text-black">Boys</Link>
            <Link to="/girls" className="hover:text-black">Girl's</Link>
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 text-gray-600">
          <Search className="w-5 h-5 hover:text-black cursor-pointer" />
          <Link to="/login">
            <User className="w-5 h-5 hover:text-black cursor-pointer" />
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 hover:text-black cursor-pointer" />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </header>

      {/* Main Cart Content */}
      <main className="bg-white rounded-md shadow p-6 mt-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Your cart</h2>

        {/* If cart is empty */}
        <div className="text-center py-10 text-gray-500">
          <p>Your cart is currently empty.</p>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Order special instructions */}
        <div className="mt-8">
          <label htmlFor="instructions" className="block font-medium mb-2">
            Order special instructions
          </label>
          <textarea
            id="instructions"
            className="w-full border rounded p-2"
            rows="3"
            placeholder="Write any note for seller..."
          />
        </div>

        {/* Estimated total */}
        <div className="flex justify-between items-center mt-8">
          <div className="text-gray-600 text-sm">
            Taxes included. Discounts and shipping calculated at checkout.
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Estimated total:</p>
            <p className="text-xl font-bold">Rs.0.00 PKR</p>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          disabled
          className="w-full mt-6 bg-gray-400 text-white py-3 rounded transition duration-300 
             cursor-not-allowed hover:bg-[#8B4513] hover:opacity-90"
        >
          Checkout
        </button>
      </main>
    </div>
  );
};

export default CartPage;
