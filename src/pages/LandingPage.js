import React from 'react';
import Hero from '../parts/Hero'
import MostPicked from '../parts/MostPicked'

import Header from '../parts/Header'
import landingPage from '../json/landingPage.json'
export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    render() {
        return(
            <>
               <Header {...this.props}></Header>
               <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
               <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
            </>
        )
    }
}
