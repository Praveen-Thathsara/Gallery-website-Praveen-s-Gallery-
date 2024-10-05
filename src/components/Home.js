import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/images/caro1.jpg';
import image2 from '../assets/images/caro2.jpg';
import image3 from '../assets/images/caro3.jpg';

const Home = () => {
  return (
  
    <div className="home">
      <header>
        <h1 className="welcomeheader">Welcome to My View</h1>
      </header>
      <div className="marg">
    <div className="row">
      <div className="col-6">
      
      </div>
      <div className="col-6">
      <Carousel className="caro" fade>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption className="caro-caption">
            <h3>Sky</h3>
            <p>"The sky is the daily bread of the eyes."<br></br>
            Ralph Waldo Emerson
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption className="caro-caption">
            <h3>Sky</h3>
            <p>"No one sees what is before his feet: they scan the tracks of heaven."<br></br>
            Marcus Tullius Cicero
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption className="caro-caption">
            <h3>Sky</h3>
            <p>"The sky is the ultimate art gallery just above us."<br></br>
            Ralph Waldo Emerson
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
