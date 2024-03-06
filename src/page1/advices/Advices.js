import React ,{useEffect} from 'react'
import AOS from 'aos';
import './advices.css'

// imported images ======>
import airplaneWindow from '../../Assets/airplaneWindow.jpg';
import airplaneInterior from '../../Assets/airplaneInterior.jpg';

export default function Advices() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once while scrolling down
      // Add other AOS options as needed
    });
  }, []);
  return (
    <div>
      <div className='AdvicesDiv'>
        <h3 className='adTitle' data-aos="fade-up">Advices to have a good flight</h3>

        <div className='flexDiv'>
          <div className='textDiv'>
            <div className='divAd' data-aos="fade-up">
              <span className='adNum'>A1</span><h3>Plan and Pack Strategically:</h3>
            </div>
            <div data-aos="fade-up">
              <ul>
                <li className='ad'><span>Early Arrival: </span>Arrive at the airport well in advance to allow time for security checks and potential delays.</li>
                <li className='ad'><span>Essentials in Carry-On: </span>Pack important documents, medications, a change of clothes, and valuables in your carry-on bag. This ensures you have the essentials even if your checked luggage is delayed or lost.</li>
              </ul>
            </div>

            <div className='divAd' data-aos="fade-up">
              <span className='adNum'>A2</span><h3>Entertainment and Relaxation:</h3>
            </div>
            <div data-aos="fade-up">
              <ul>
                <li className='ad'><span>Bring Entertainment: </span>Pack books, magazines, or electronic devices with headphones to keep yourself entertained during the flight.</li>
                <li className='ad'><span>Relaxation Techniques: </span>If you're prone to anxiety or discomfort during flights, practice relaxation techniques such as deep breathing or meditation to stay calm.</li>
              </ul>
            </div>

            <div className='divAd' data-aos="fade-up">
              <span className='adNum'>A3</span><h3>Mindful Eating:</h3>
            </div>
            <div data-aos="fade-up">
              <ul>
                <li className='ad'><span>Balanced Meals: </span>Choose well-balanced meals before and during the flight. Airplane food can sometimes be limited, so consider bringing healthy snacks to keep your energy levels up.</li>
                <li className='ad'><span>Avoid Overeating: </span>Air pressure changes can affect digestion, so it's advisable to avoid heavy meals right before or during the flight.</li>
              </ul>
            </div>
          </div>

          <div className='divImgs' data-aos="fade-up">
          <img src={airplaneWindow} alt="" className='imgs' id='img1'/>
          <img src={airplaneInterior} alt="" className='imgs' id='img2'/>
          </div>

        </div>
      </div>
    </div>
  )
}
