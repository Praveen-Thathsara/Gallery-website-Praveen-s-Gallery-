import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Video from "./components/Video";
import Gallery from "./components/Gallery";
import Gallery1 from "./components/Gallery1";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
/*import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';*/

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video" element={<Video />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery1" element={<Gallery1 />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
