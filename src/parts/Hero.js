import React from 'react'

import ImageHero from '../assests/images/heroes/HeroesPics.jpg'
import ImageFrame from '../assests/images/heroes/Frame-HeroesPic.jpg'
import UnitIcon from '../assests/images/heroes/Units.svg'
import TravelerIcon from '../assests/images/heroes/Traveler.svg'
import LocationIcon from '../assests/images/heroes/Location.svg'

import Button from '../elements/Button'

import formatNumber from '../utils/formatNumber'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop -30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{width :530}}>
                    <h1 className="h2 font-weight-bold line-height-1 mb-3">
                        Rent and Find hidden<br/>
                        gems around you!
                    </h1> 
                    <p className="mb-5 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
                        We provide available apartement based on your location and give information about places near you. Let’s start your new journey with us!
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show me
                    </Button>

                    <div className="row" style={{marginTop: 80}}>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36" src={UnitIcon} alt={`${props.data.units} Units`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.units)}{" "}<span className="text-gray-500 font-weight-light">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36" src={TravelerIcon} alt={`${props.data.travelers} Travelers`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "}<span className="text-gray-500 font-weight-light">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={LocationIcon} alt={`${props.data.locations} Locations`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.locations)}{" "}<span className="text-gray-500 font-weight-light">
                                    Locations
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{width: 520, height: 410}}>
                        <img src={ImageHero} alt="Apartement example" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1}} width="530" />
                        <img src={ImageFrame} alt="Apartement example" className="img-fluid position-absolute" style={{margin: '0 -15px -15px 0'}} />
                    </div>
                </div>
            </div>
        </section>
    )
}
