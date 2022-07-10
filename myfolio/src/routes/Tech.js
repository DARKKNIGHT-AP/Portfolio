import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Skills from '../components/Skills';

const Tech = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="My Tech Stack" text="Some of my skills"/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Tech