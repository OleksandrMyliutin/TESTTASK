import React, { lazy } from 'react'
import Header from '../components/Header/Header'
const Hero = lazy(() => import ('../components/Hero/Hero'));
const OurCheerfulUsers = lazy(() => import ('../components/OurCheerfulUsers/OurCheerfulUsers'));
const RegisterToGetWork = lazy(() => import ('../components/RegisterToGetWork/RegisterToGetWork'));


const OnePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <OurCheerfulUsers/>
            <RegisterToGetWork/>
        </>
    )
}

export default OnePage
