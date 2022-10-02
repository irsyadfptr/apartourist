import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import React, { useRef } from 'react'
import landingPage from '../__mockup__/landingPage.json'


const LandingPage = (props) => {

  const refMostPicked = useRef(null)

  return (
    <>
      <Hero data={landingPage.hero} refMostPicked={refMostPicked}/>
      <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPicked}/>
    </>
  )
}

export default LandingPage
