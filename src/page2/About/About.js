import React from 'react'
import './About.css'

export default function About() {
    
  return (
    <div className='aboutSection'>
      <div className='About'>
        <h3 className='AboutT' >Welcome to AtlasWings - Your Gateway to Seamless Travel Experiences!</h3>

        <div>
            <p className='AboutP'>
                At AtlasWings, we believe that the journey is just as important as the destination. 
                As avid travelers ourselves, we understand the excitement and anticipation that comes with planning a trip. 
                That's why we've created a user-friendly and innovative flight booking platform using the latest technology, 
                powered by React JS, to make your travel dreams take flight effortlessly.
            </p>
        </div>
      </div>

      <div className='About'>
        <div className='divAboutT'>
            <span className="aboutspan">1</span>
            <h3 className='AboutTT'>Who We Are</h3>
        </div>

        <div>
            <p className='AboutP'>
                AtlasWings isn't just a flight booking website; it's a passion project born out of 
                a love for exploration and a desire to simplify the travel planning process. 
                Our dedicated team, comprised of travel enthusiasts and tech experts, came together 
                with a shared vision - to redefine the way you book flights.
            </p>
        </div>

        <div className='divAboutT'>
            <span className="aboutspan">2</span>
            <h3 className='AboutTT'>Our Mission</h3>
        </div>

        <div>
            <p className='AboutP'>
            Our mission at AtlasWings is to empower you to explore the world with confidence and ease.
             We strive to provide a one-stop solution for all your flight booking needs, offering a seamless 
             experience from the moment you start searching for flights to the day you touch down at your chosen destination.
            </p>
        </div>

        <div className='divAboutT'>
            <span className="aboutspan">3</span>
            <h3 className='AboutTT'>Why Choose AtlasWings?</h3>
        </div>

        <div>
            <ul>
                <li className="abtList">
                    <span className="abtspan">User-Friendly Interface:</span>
                    With our sleek and intuitive React JS-powered interface, we've made the flight booking process a breeze. 
                    Enjoy a smooth and efficient experience, whether you're a seasoned traveler or planning your first adventure.
                </li>
                <li className="abtList">
                    <span className="abtspan">Extensive Flight Options:</span>
                    AtlasWings connects you to a vast network of airlines, ensuring that you have access to a wide range of flight options.
                     Whether you're traveling for business or leisure, we've got you covered.
                </li>
                <li className="abtList">
                    <span className="abtspan">Real-Time Updates:</span>
                    Stay informed with real-time updates on flight status, delays, and gate changes. We understand the importance of staying connected during your journey,
                    and we provide the information you need to plan accordingly.
                </li>
                <li className="abtList">
                    <span className="abtspan"> Competitive Prices:</span>
                    We believe in fair and transparent pricing. With AtlasWings, you can find competitive prices and exclusive deals,
                    helping you make the most of your travel budget.
                </li>
                <li className="abtList">
                    <span className="abtspan">Personalized Travel Experience:</span>
                    Tailor your journey to suit your preferences. AtlasWings offers personalized recommendations,
                     travel insights, and features that make your trip uniquely yours.
                </li>
            </ul>
        </div>

        <div>
            <h3 className='Contact'>Contact Us</h3>

            <div >
                <p className='AboutP'>
                    Have a question or need assistance? Our customer support team is available around the clock to ensure your experience with AtlasWings is as smooth as your travels. Reach out to us through our contact page, and we'll be happy to assist you.
                    Thank you for choosing AtlasWings as your trusted travel companion. We look forward to being a part of your travel adventures and making every flight a memorable experience.
                    Bon voyage!
                    The AtlasWings Team
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
