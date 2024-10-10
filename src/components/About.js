import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/images/caro1.jpg";
import image2 from "../assets/images/caro2.jpg";
import image3 from "../assets/images/caro3.jpg";
import image4 from "../assets/images/caro4.jpg";
import image5 from "../assets/images/caro5.jpg";
import image6 from "../assets/images/caro6.jpg";

const About = () => {
  return (
    <div className="abou">
      <div className="marg">
        <div>
          <h2 className="aboutus">About Us</h2>
          <div className="row">
            <br></br>
            <div className="col-4">
              <p className="aboutpara1">
                {" "}
                Welcome to our nature and aesthetic photo gallery, a space where
                the beauty of the natural world comes alive through breathtaking
                imagery. Our journey began with a simple love for nature and a
                desire to showcase its boundless beauty in a way that resonates
                with the soul. Every photograph in our gallery is a testament to
                the magnificence of the world around us—from the quiet moments
                in lush forests to the vibrant hues of blooming flowers and the
                majestic stillness of towering mountains.<br></br>
                <br></br>
                We believe that nature is more than just a backdrop; it is a
                source of inspiration, peace, and connection. Our photographers
                are dedicated to capturing the raw, unfiltered beauty of the
                outdoors, focusing on everything from grand landscapes to the
                smallest details that often go unnoticed. Through our carefully
                curated collections, we aim to provide an escape from the
                busyness of everyday life and offer a moment of serenity and
                reflection.
              </p>
            </div>
            <div className="col-8">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Carousel className="caro" fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                  <Carousel.Caption className="caro-caption">
                    <h3>Sky</h3>
                    <p>
                      "The sky is the daily bread of the eyes."<br></br>
                      Ralph Waldo Emerson
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                  />
                  <Carousel.Caption className="caro-caption">
                    <h3>Sky</h3>
                    <p>
                      "No one sees what is before his feet: they scan the tracks
                      of heaven."<br></br>
                      Marcus Tullius Cicero
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                  />
                  <Carousel.Caption className="caro-caption">
                    <h3>Sky</h3>
                    <p>
                      "The sky is the ultimate art gallery just above us."
                      <br></br>
                      Ralph Waldo Emerson
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image4}
                    alt="First slide"
                  />
                  <Carousel.Caption className="caro-caption">
                    <h3>Sky</h3>
                    <p>
                      "Only from the heart can you touch the sky."<br></br>
                      Rumi
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image5}
                    alt="First slide"
                  />
                  <Carousel.Caption className="caro-caption">
                    <h3>Sky</h3>
                    <p>
                      "The sky is an infinite movie to me. I never get tired of
                      looking at what's happening up there."<br></br>
                      K.D. Lang
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image6}
                    alt="First slide"
                  />
                  <Carousel.Caption className="caro-caption">
                    <h3>Sky</h3>
                    <p>
                      "The sky is an infinite movie to me. I never get tired of
                      looking at what's happening up there."<br></br>
                      K.D. Lang
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <br></br>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>
                "In every walk with nature, one receives far more than he
                seeks."
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              John Muir <cite title="Source Title"></cite>
            </figcaption>
          </figure>
          <br></br>

          <br></br>
          <br></br>

          <div className="row">
            <div className="col-4">
              <button className="linkbtn">
                <header className="aboutlink">
                  <Link to="/Video">Some of my Videos</Link>
                </header>
              </button>
              <br></br>
              <br></br>
              <div className="aboutlinkpara">
                <p>
                  You can see some videos about the nature and places I seen.
                  click above and check it.
                </p>
              </div>
            </div>
            <div className="col-4">
              <button className="linkbtn">
                <header className="aboutlink">
                  <Link to="/gallery">Picture Gallery</Link>
                </header>
              </button>
              <br></br>
              <br></br>
              <div className="aboutlinkpara">
                <p>
                  I invite you to see some of my view. click above and enjoy
                  with nature.
                </p>
              </div>
            </div>
            <div className="col-4">
              <button className="linkbtn">
                <header className="aboutlink">
                  <Link to="/contact">How to contact me</Link>
                </header>
              </button>
              <br></br>
              <br></br>
              <div className="aboutlinkpara">
                <p>
                  If you are a nature lover please put a message to me and you
                  can check more about me through the social media. ckeck it.
                </p>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default About;
