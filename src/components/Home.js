import React from 'react';
import Gallery from './Gallery';

const Home = ({ images }) => {
  return (
    <div>
      <br></br><br></br>
      <h1 className="welcomeheader">Welcome to My View</h1>
      <br></br><br></br><br></br>
      <Gallery images={images} />
    </div>
  );
};

export default Home;
