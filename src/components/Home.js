import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/images/homecaro.jpg";
import image2 from "../assets/images/homecaro2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="welcomeheader">
        <video className="welcome-video" autoPlay loop muted>
          <source src="/assets/videos/welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="welcome-text">
          <h1>Welcome to Praveen's World</h1>
          <p>The right place to Explore the World</p>
        </div>
      </div>

      <div className="home">
        <div className="marg">
          <div className="row">
            <div className="col-6">
              <div className="welcome-text2">
                <h1>Hello Mate !</h1>
                <blockquote>
                  "This is the better place to Explore the World. We have the
                  huge photographs and videos collection about nature beauty,
                  Animals, Easthetic vibe. We invite you to Explore the wolrd."{" "}
                </blockquote>
                <button>
                  <Link to="/Contact">Get Sterted</Link>
                </button>
              </div>
            </div>
            <div className="col-6">
              <Carousel className="caro">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
