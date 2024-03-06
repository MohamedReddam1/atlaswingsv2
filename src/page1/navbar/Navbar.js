// Navbar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className='navbar'>
        <div>
          <a href="#home" className='logo'>ATLASWINGS</a>
        </div>
        <ul className={`link ${isMenuOpen ? 'open' : ''}`}>
          <div className='div'>
            <Link to='/AtlasWings/'>Home</Link>
            <p className='line'></p>
          </div>
          <div className='div'>
            <Link to='/AtlasWings/offres'>Offres</Link>
            <p className='line'></p>
          </div>
          <div className='div'>
            <Link to='/AtlasWings/About'>About Us</Link>
            <p className='line'></p>
          </div>
          <div className='div'>
            <Link to='/AtlasWings/services'>Services</Link>
            <p className='line'></p>
          </div>
        </ul>
        <div className={`link1 ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="">Sign In</a></li>
          <li><a href="">Sign Up</a></li>
          <li><a href="#get-started" className="action_btn">Get Started</a></li>
        </div>
        <div className="toggle_btn" onClick={handleToggle}>
          <FaBars className={`pipi ${isMenuOpen ? 'open' : ''}`} />
        </div>
      </div>

      <div className={`dropdown_menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to='/AtlasWings/'>Home</Link></li>
          <li><Link to='/AtlasWings/booking'>Offres</Link></li>
          <li><Link to='/AtlasWings/About'>About Us</Link></li>
          <li><Link to='/AtlasWings/services'>Services</Link></li>
          <li><a href="">Sign In</a></li>
          <li><a href="">Sign Up</a></li>
          <li><a href="#get-started" className="action_btn">Get Started</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
