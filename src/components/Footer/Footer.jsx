import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom';
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">

        <hr />
        <div className="footer">
        <div className= "social-links">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
        </div>
        <div className='logo-f'>
            <img src={Logo} alt="" />
        </div>
        <div className='build' >Build with ❤️  by <a className='name' href="https://jyoti-km.vercel.app/">Jyoti KM</a> </div>
        </div>

        <div className='blur blur-f-1'></div>
        <div className='blur blur-f-2'></div>
       
    </div>
  );
};

export default Footer