import React from 'react';
import Hero from '../parts/Hero'

import Header from '../parts/Header'
import landingPage from '../json/landingPage.json'
export default class LandingPage extends React.Component {
    render() {
        return(
            <>
               <Header {...this.props}></Header>
               <Hero data={landingPage.hero}/>
            </>
        )
    }
}
