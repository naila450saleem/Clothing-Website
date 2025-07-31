import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Popup from './Components/Popup/Popup';
import FloatingIcons from './Components/FloatingIcons/FloatingIcons';

import Home from './Pages/Home';
import About from './Pages/About';
import CustomCursor from './Components/CustomCursor/CustomCursor';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Popup />
      <FloatingIcons />
      <CustomCursor />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default App;
