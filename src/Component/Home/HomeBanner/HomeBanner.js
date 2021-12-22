import React from "react";

import "./HomeBanner.css";
import Typewriter from 'typewriter-effect';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <h3>Best Learning Platform In This Region</h3>
      <div className="font"> 
      <Typewriter
  options={{
    strings: ['Welcome To', 'EDU HIVE'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
      <button className="button-29">Join Us Today</button>
    </div>
  );
};

export default HomeBanner;
