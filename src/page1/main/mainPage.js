import React from 'react'
import Navbar from '../navbar/Navbar'
import Home from '../home/Home'
import Search from '../search/Search'
import Advices from '../advices/Advices'
import TopTravelers from '../topTravelers/TopTravelers'
import BestOffres from '../bestOffres/BestOffers'
import BestPlaces from '../bestPlaces/BestPlaces'
import SubscribeP from '../subscribe/SubscribeP'
import Footer from '../footer/Footer'



export default function () {
  return (
    <div>
      <Footer/>
      <SubscribeP/>
      <BestPlaces/>
      <BestOffres/>
      <TopTravelers/>
      <Advices/>
      {/*<Search/>*/}
      <Home/>
    </div>
  )
}
