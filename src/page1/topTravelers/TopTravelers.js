import React ,{useEffect} from 'react'
import AOS from 'aos';
import './TopTravelers.css'

import Marrakech from '../../Assets/marrakech.jpeg';
import NewYork from '../../Assets/newyork.jpeg';
import Malaga from '../../Assets/malaga.jpeg';
import Berline from '../../Assets/berline.jpeg';

// import profiles picture
import ProfilePicture1 from '../../Assets/profilepic1.jpeg';
import ProfilePicture2 from '../../Assets/profilepic2.jpeg';
import ProfilePicture3 from '../../Assets/profilepic3.jpeg';
import ProfilePicture4 from '../../Assets/profilepic4.jpeg';


const travelers = [
  {image:Marrakech , profilePic :ProfilePicture1 , username: '@yami_sukehiro'},
  {image:NewYork , profilePic :ProfilePicture3 , username: '@yassmina_bh'},
  {image:Malaga , profilePic :ProfilePicture2 , username: '@mohamed_mrini'},
  {image:Berline , profilePic :ProfilePicture4 , username: '@youssef_boughanem'},
]

export default function TopTravelers() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once while scrolling down
      // Add other AOS options as needed
    });
  }, []);
  return (
    <div className='divTopTr'>

      <h1 className='topTrTitle' data-aos="fade-up">TOP TRAVELERS FOR THIS MONTH</h1>

      <div className='TopTr' >
        {
          travelers.map((traveler, index)=>(
            <div key={index} className="travelerItem" data-aos="fade-up" >
            <img src={traveler.image} className='placeImg' />
            <img src={traveler.profilePic} className='userPic'/>
            <p className='username'>{traveler.username}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
