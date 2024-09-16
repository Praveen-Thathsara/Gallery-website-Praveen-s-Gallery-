import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Video from './components/Video';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';





const App = () => {
  const [images, setImages] = useState([
    { url: '/images/me2.jpg', alt: 'Image 1', caption: 'Beautiful Scenery 1' },
    { url: '/images/6.jpg', alt: 'Image 2', caption: 'Beautiful Scenery 2' },
    { url: '/images/7.jpg', alt: 'Image 3', caption: 'Beautiful Scenery 3' },
    { url: '/images/me.jpg', alt: 'Image 4', caption: 'Beautiful Scenery 4' },
    { url: '/images/8.jpg', alt: 'Image 5', caption: 'Beautiful Scenery 5' },
    { url: '/images/coconuttree.jpg', alt: 'Image 6', caption: 'Beautiful Scenery 6' },
    { url: '/images/9.jpg', alt: 'Image 5', caption: 'Beautiful Scenery 7' },
    { url: '/images/10.jpg', alt: 'Image 5', caption: 'Beautiful Scenery 8' },
    { url: '/images/11.jpg', alt: 'Image 5', caption: 'Beautiful Scenery 9' },
    // Add more images as needed
  ]);

  return (
    <>
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Video" element={<Video />} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  );
};

export default App;
