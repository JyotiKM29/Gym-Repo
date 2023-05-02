import React from 'react';
import './Hero.css';

import Programs from '../Programs/Programs'
import Reasons from '../Reasons/Reasons';
import Plans from '../Plans/Plans';
import Testimonials from '../Testimonials/Testimonials';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';





import Header from "../Header/Header";
import NumberCounter from 'number-counter'

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from 'framer-motion'


import { Link } from "react-router-dom";



const Hero = () => {

  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (

    <div>
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>The best Fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              In here we will help you to Shape and Build your ideal Body
              and live up your Life to fullest
            </span>
          </div>

        </div>

        {/*figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={50} declay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
              <NumberCounter end={40} start={10} declay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
              <NumberCounter end={10} start={0} declay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>

        </div>

        {/*hero button */}
        <div className="hero-buttons">
         
             <buttons className="btn"> Get Started</buttons>
          

        
          <buttons className="btn"> learn More</buttons>
          
          
        </div>
      </div>

      <div className="right-h">
        {/* <div>
            <h1>
              <link to='/login'>Login</link>
            </h1>
          </div>
           */}
        <div className="btn-LS">
          <Link to='/login'>
            <button className="btn">Login</button>
          </Link>
          <Link to='/Signup'>
            <button className="btn">Join Now</button>
          </Link>
        </div>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img
          src={hero_image} alt=""
          className="hero-image" />

        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back} alt=""
          className="hero-image-back" />

        {/* Calories*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>

      
    </div>
    <div className="App">

        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />

      </div>
    </div>

  )
}

export default Hero