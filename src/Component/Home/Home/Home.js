import React from 'react';
import HomeAchive from '../HomeAchive/HomeAchive';
import HomeBanner from '../HomeBanner/HomeBanner';
import './Home.css';
import HomeAd from './HomeAd/HomeAd';
import HomeCourse from './HomeCourse/HomeCourse';
import HomeFeature from './HomeFeature/HomeFeature';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeFeature></HomeFeature>
            <HomeAd></HomeAd>
            <HomeCourse></HomeCourse>
            <HomeAchive></HomeAchive>
            
        </div>
    );
};

export default Home;