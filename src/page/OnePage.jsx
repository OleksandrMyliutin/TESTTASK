import React, { lazy, useEffect,  } from 'react'
import Header from '../components/Header/Header'
import { useDispatch } from 'react-redux';
import { fetchUserCards } from '../redux/operations';

const Hero = lazy(() => import ('../components/Hero/Hero'));
const OurCheerfulUsers = lazy(() => import ('../components/OurCheerfulUsers/OurCheerfulUsers'));
const RegisterToGetWork = lazy(() => import ('../components/RegisterToGetWork/RegisterToGetWork'));


const OnePage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUserCards());
    }, [dispatch]);
    
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
