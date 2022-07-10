import './HeroImgStyles.css'
 import React from 'react'
 import IntroImg from '../assets/tech.png'
 
 const HeroImg = () => {
   return (
     <div className='hero'>
        <div className='mask'>
             <img className='intro-img' src={IntroImg} alt="nama">
             </img>
        </div>
        <div className='content'>
        <p>A self taught programmer, creating websites.<br></br>Also quite well-versed with WebDev technologies,ML development and Cryptography.</p>
        <h1>Academics</h1>
        <h3>Degree</h3>
            <p>Btech CSE from LPU</p>
            <p>Duration : 2019 - 2023</p>
        </div>
     </div>
   )
 }
 
 export default HeroImg