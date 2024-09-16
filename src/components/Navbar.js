import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link  className="navbrand" to="/">Praveen's Gallery</Link></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/Video">Video</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
