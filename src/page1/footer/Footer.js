// Footer.js

import React from 'react';
import './footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4 className='footerT'>Quick Links</h4>
          <ul>
            <li><a href="#" className='footerlink'>Home</a></li>
            <li><a href="#" className='footerlink'>Flights</a></li>
            <li><a href="#" className='footerlink'>Destinations</a></li>
            <li><a href="#" className='footerlink'>About Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className='footerT'>Contact Us</h4>
          <p className='footerlink'> Email: atlaswings@example.com</p>
          <p className='footerlink'>Phone: +1 123 456 7890</p>
        </div>
        <div className="footer-column">
          <h4 className='footerT'>Social Media</h4>
          <ul className="social-icons">
            <li><a href="#"className='socialMIcons'><i className="fab fa-facebook"></i></a></li>
            <li><a href="#" className='socialMIcons'><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" className='socialMIcons'><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 ATLASWINGS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
