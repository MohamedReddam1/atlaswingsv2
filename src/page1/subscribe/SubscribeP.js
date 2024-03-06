//SubscribeP.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import './Subscribe.css';

// Corrected: Capitalized the component name
export default function Subscribe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once while scrolling down
      // Add other AOS options as needed
    });
  }, []); // Run the effect only once on component mount

  return (
    <div className='subSection' data-aos="fade-down">
      <div className='divTitle'>
    	  <h2 className='titleSub'>Subscribe Newsletters & get latest news</h2>
      </div>

      <div className='subDiv' data-aos="fade-up">
          <input type="text" placeholder='joeDoe@example.com' className='input'/>
          <input type="button" value="subscribe" className='btnSub'/>
      </div>
    </div>
  );
}



