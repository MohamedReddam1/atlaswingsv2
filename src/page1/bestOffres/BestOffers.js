import React ,{useEffect} from 'react'
import AOS from 'aos';
import './BestOffers.css'

// import icons
import { IoAirplane } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { RiArrowDropRightLine } from "react-icons/ri";




const Offres =[
  {"charika_d_tayaran":"San Felipe","from":"Dalian","airport_from":"Itaperuna","to":"Tonghu","airport_to":"Batouri","date_debut":"09/21/2023","date_return":"11/23/2023","flight_classe":"Business","price":6401},
  {"charika_d_tayaran":"Guiyang","from":"Sergach","airport_from":null,"to":"Sidomulyo","airport_to":"São Paulo","date_debut":"03/13/2023","date_return":"12/28/2022","flight_classe":"Business","price":4362},
  {"charika_d_tayaran":"Branson / Hollister","from":"Riang Tengah","airport_from":null,"to":"La Loma","airport_to":"Mönchengladbach","date_debut":"07/01/2023","date_return":"08/01/2023","flight_classe":"Economy","price":5554},
  {"charika_d_tayaran":"Alegrete","from":"Xinchong","airport_from":"Portoroz","to":"Xincheng","airport_to":"Coban","date_debut":"01/17/2023","date_return":"08/09/2023","flight_classe":"First Class","price":2687},
  {"charika_d_tayaran":"Cuito Cuanavale","from":"Leuwayang","airport_from":"Lewiston","to":"Kuala Lumpur","airport_to":"Timbuktu","date_debut":"03/21/2023","date_return":"07/07/2023","flight_classe":"Business","price":4152},
  {"charika_d_tayaran":"Farmington","from":"Huangqu","airport_from":null,"to":"Heydərabad","airport_to":"Ahuas","date_debut":"06/14/2023","date_return":"07/14/2023","flight_classe":"First Class","price":5368},
  {"charika_d_tayaran":"Blönduós","from":"Uzhhorod","airport_from":"Bamarni","to":"Saint-Joseph","airport_to":"Floriano","date_debut":"01/01/2023","date_return":"05/02/2023","flight_classe":"Business","price":2884},
  {"charika_d_tayaran":"Douglas Bisbee","from":"Petrovo-Dal’neye","airport_from":"Santiago del Estero","to":"Watulimo","airport_to":"Bost","date_debut":"10/31/2023","date_return":"12/25/2023","flight_classe":"First Class","price":6149},
  {"charika_d_tayaran":"Ketapang-Borneo","from":"Azaruja","airport_from":"Nondalton","to":"Saint-Claude","airport_to":"Prishtina","date_debut":"6/11/2023","date_return":"6/2/2023","flight_classe":"Economy","price":6885},
]
export default function BestOffres() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once while scrolling down
      // Add other AOS options as needed
    });
  }, []);

  return (
    <div className='mainDivOffers'>

    <h3 className='tt' data-aos="fade-up">Best offres of this month</h3>

      <div className='OffersSection'>

        {
          Offres.map((Offer, index)=>(
              <div className='offersCard' data-aos="fade-up">
                <div className='divOffreTitle'>
                  <div className='secTitle'>
                    <IoAirplane className='iconTitle'/>
                    <p className='offerTitle'>{Offer.charika_d_tayaran}</p>
                  </div>

                  <div className='divMore'>
                    <a href="#" className='offerLink'> more </a>
                    <RiArrowDropRightLine className='arrow'/>
                  </div>
                </div>

                <div className='offerBody'>
                  <div className='fromtodiv'>
                    <h3 className='fromToFlight'>{Offer.from}</h3>
                    <VscArrowSwap className='icn'/>
                    <h3 className='fromToFlight'>{Offer.to}</h3>
                  </div>

                  <div className='divDateFlight'>
                      <li className='dateFlight'>{Offer.date_debut}, {Offer.date_return}</li>
                      <li className='classFlight'>{Offer.flight_classe}</li>
                  </div>

                  <div className='divPrice'>
                    <p className='priceFlight'>{Offer.price} DH</p>
                  </div>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}
