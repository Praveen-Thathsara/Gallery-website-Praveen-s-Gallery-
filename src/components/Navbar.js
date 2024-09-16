import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Praveen's Gallery</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Video">Video</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
