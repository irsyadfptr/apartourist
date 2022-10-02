import Categories from 'parts/Categories'
import Footer from 'parts/Footer'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Testimony from 'parts/Testimony'
import React, { useRef } from 'react'
import landingPage from '../__mockup__/landingPage.json'


const LandingPage = () => {

  const refMostPicked = useRef(null)

  return (
    <>
      <Hero data={landingPage.hero} refMostPicked={refMostPicked}/>
      <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPicked}/>
      <Categories data={landingPage.categories}/>
      <Testimony data={landingPage.testimonial}/>
      <Footer/>
    </>
  )
}

export default LandingPage
