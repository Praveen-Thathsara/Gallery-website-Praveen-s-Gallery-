import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-white bg-dark py-4">
    <div className="row">
      <div className="col-12" align="center">
    <p>
        &copy; 2024 Praveen's Gallery | Follow us
    </p>
    <div className="social-icons contact-item ">
          <a href="#"><i className="bi bi-instagram fs-5 text-light"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100026335351551&mibextid=ZbWKwL"><i className="bi bi-facebook fs-5 text-light"></i></a>
          <a href="https://youtube.com/@pravlogz?si=jg5vy6Y2QR0eYoYp"><i className="bi bi-youtube fs-5 text-light"></i></a>
        </div>
        </div>
        </div>
    </footer >
    
  );
};

export default Footer;