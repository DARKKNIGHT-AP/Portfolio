import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Handles from './Handles';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="Contact Me" text="My communication Handles"/>
       <Handles/>
      <Footer/>
    </div>
  )
}

export default Contact