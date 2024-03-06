//BestPlaces.js

import React , {useEffect}from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Slider from 'react-slick';
import dubaiImage from '../../Assets/dubai.jpg';
import losAngelesImage from '../../Assets/losAngeles.jpg';
import parisImage from '../../Assets/paris.jpg';
import tangierImage from '../../Assets/tangier.jpg';
import './slider.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cities = [
  { name: 'Dubai', image: dubaiImage },
  { name: 'Los Angeles', image: losAngelesImage },
  { name: 'Paris', image: parisImage },
  { name: 'Tangier', image: tangierImage },
];

const AutoplaySlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function (i) {
      // You can customize the dot style here
      return <button className="custom-dot"></button>;
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once while scrolling down
      // Add other AOS options as needed
    });
  }, []);

  return (
    <div className='BestPlacesSection'>

        <h1 className='Btitle' data-aos="fade-up">Best places to visit</h1>

        <Slider {...settings} className='slider' data-aos="fade-up">
        {cities.map((city, index) => (
          <div key={index} className="slider-item" data-aos="fade-up">
            <img src={city.image} alt={city.name} className='img' data-aos="fade-up"/>
            <div className="city-name-overlay" data-aos="fade-up">{city.name}</div>
          </div>
        ))}
        </Slider>

        
    </div> 
  );
};

export default AutoplaySlider;
