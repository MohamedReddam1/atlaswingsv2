//Home.js

import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import './home.css'

// imported images and videos =====>
import Airplane from '../../Assets/airplane.png'
import video1 from '../../Assets/video1.mp4'

// imported icons =====>
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once while scrolling down
      // Add other AOS options as needed
    });
  }, []);

  return (
    <div className='mainSection'>
      
        <div className='titleDiv' data-aos="fade-up">
          <h1 className='title'>Book the <span>Sky</span>, Not the <span>Limit</span>.</h1>
          <p className='para'>Your journey begins here - book your flight now!</p>
        </div>

        <div className='videoDiv'>
          <video src={video1} autoPlay muted loop className='video' data-aos="fade-up"></video>
        </div>

        <div className='imageDiv' data-aos="fade-down">
          <img src={Airplane} alt="" className='image'/> 
        </div>

    </div>
  )
}
