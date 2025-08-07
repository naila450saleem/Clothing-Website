import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FloatingIcons from './Components/FloatingIcons/FloatingIcons';
import CustomCursor from './Components/CustomCursor/CustomCursor';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Features from './Pages/Features';
import Categories from './Pages/Categories';
import Contact from './Pages/Contact';
import CartPage from './Pages/CartPage';
import Footer from './Pages/Footer';

const App = () => {
  const location = useLocation(); // 👈 Add this

  return (
    <>
      {location.pathname === '/' && <Navbar />} {/* 👈 Show only on home */}
      <FloatingIcons />
      <CustomCursor />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/features' element={<Features />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/footer' element={<Footer />} />

      </Routes>
    </>
  );
};

export default App;
