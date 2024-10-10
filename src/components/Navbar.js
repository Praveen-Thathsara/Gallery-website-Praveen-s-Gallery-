import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top">
      <h1>
        <Link className="navbrand" to="/">
          Praveen's Gallery
        </Link>
      </h1>
      <div className="social-icons contact-item ">
        <a href="#">
          <i className="bi bi-instagram fs-5 text-light"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100026335351551&mibextid=ZbWKwL">
          <i className="bi bi-facebook fs-5 text-light"></i>
        </a>
        <a href="https://youtube.com/@pravlogz?si=jg5vy6Y2QR0eYoYp">
          <i className="bi bi-youtube fs-5 text-light"></i>
        </a>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/Video">Video</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
