import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import LastSection from '../LastSection'

function Home(){
    return (
        <>
            <HeroSection />
            <Cards />
            <LastSection />
            <Footer />
        </>
    )
}

export default Home;