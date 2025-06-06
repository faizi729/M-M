import React from 'react'
import Hero from "../components/Hero"
import Services from "../components/Services"

import Featured from "../components/Featured"
import Menu from "../components/Menu"
import Sale from "../components/Sale"
import Intro from "../components/Intro"
import ReviewCarousel from "../components/Review"

import Offer from "../components/Offer"

 
const Home = () => {
  return (
    <div>
      <Hero />
    <Featured/>
    <Services/>
    <Menu/>
    <Sale/>
    <Intro/>
    <ReviewCarousel/>
    <Offer/>
    
    </div>
  )
}

export default Home
