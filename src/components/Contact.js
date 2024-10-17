import React, { useState } from "react";
import Card from "./Card.js";
import image1 from "../assets/images/fb1.jpg";
import image2 from "../assets/images/fb2.jpg";
import image3 from "../assets/images/fb3.jpg";
import image4 from "../assets/images/fb4.jpg";
import image5 from "../assets/images/fb5.jpg";
import image6 from "../assets/images/fb6.jpg";
import image7 from "../assets/images/fb7.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Message submitted:", { name, email, message });
  };

  return (
    <div className="cont">
      <div className="marg">
        <Card />
        <div className="row">
          <div className="col-6">
            <div className="contactseteka">
              <h2 className="contactus">Contact Us</h2>
              <form onSubmit={handleSubmit} className="contform">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button className="submitbtn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div className="contactseteka2">
              <h2>
                <i class="bi bi-telephone-fill"></i>
              </h2>
              <p className="condetails">0703159482</p>
              <br></br>
              <h2>
                <i class="bi bi-envelope-fill"></i>
              </h2>
              <p className="condetails">praveenthathsara823@gmail.com</p>
              <br></br>
              <h2>
                {" "}
                <i class="bi bi-geo-alt-fill"></i>
              </h2>
              <p className="condetails">420/2,highwayroad,moon.</p>
              <br></br>
              <br></br>
              <br></br>
              <div className="social-icons contact-item">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100026335351551&mibextid=ZbWKwL">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://youtube.com/@pravlogz?si=jg5vy6Y2QR0eYoYp">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <h1>FEEDBACK</h1>
        <div className="row">
          <div className="col-12">
            <div className="photorow">
            <div>
                <img src={image1} alt="image1" className="photorowpic"></img>
              </div>
              <div>
                <img src={image2} alt="image1" className="photorowpic"></img>
              </div>
              <div>
                <img src={image3} alt="image2" className="photorowpic"></img>
              </div>
              <div>
                <img src={image4} alt="image3" className="photorowpic"></img>
              </div>
              <div>
                <img src={image5} alt="image3" className="photorowpic"></img>
              </div>
              <div>
                <img src={image6} alt="image3" className="photorowpic"></img>
              </div>
              <div>
                <img src={image7} alt="image3" className="photorowpic"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
