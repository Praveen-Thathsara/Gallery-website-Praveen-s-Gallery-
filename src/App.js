import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Video from './components/Video';
import Gallery from './components/Gallery';  // Import Gallery component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video" element={<Video />} />
            <Route path="/gallery" element={<Gallery />} /> {/* Add Gallery Route */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
