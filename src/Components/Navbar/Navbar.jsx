import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
  <nav className="nav">
  <h1>My Logo</h1>
  <ul className="nav-links">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
  </ul>
</nav>

  );
};

export default Navbar;
