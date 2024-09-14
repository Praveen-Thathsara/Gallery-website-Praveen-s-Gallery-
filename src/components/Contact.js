import React, { useState } from 'react';
import Card from './Card.js';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message submitted:', { name, email, message });
  };

  return (
    <div >
    <Card />
    <div className="row">
      <div className="col-6">
        <div className="contactseteka">
      
      <h2 className="contactus">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contform">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    <div className="col-6">
     
      <h2><i class="bi bi-telephone-fill"></i>
      </h2>
      <p className="condetails">0703159482</p><br></br>
      <h2><i class="bi bi-envelope-fill"></i></h2>
      <p className="condetails">praveenthathsara823@gmail.com</p><br></br>
      <h2> <i class="bi bi-geo-alt-fill"></i>
      </h2>
      <p className="condetails">420/2,highwayroad,moon.</p><br></br>
      <br></br><br></br>
      <div className="social-icons contact-item">
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100026335351551&mibextid=ZbWKwL"><i className="bi bi-facebook"></i></a>
          <a href="https://youtube.com/@pravlogz?si=jg5vy6Y2QR0eYoYp"><i className="bi bi-youtube"></i></a>
        </div>
      
    </div>
    </div>
    </div>
  );
};

export default Contact;
