import './HandlesStyles.css'

import React from 'react'

const Handles = () => {
  return (
     (
        <div className='skills'>
    <div className='skill-container'>
    
    <div className='skill'>
        <h3>--Github--</h3>
    <span className='bar'></span>
    <p className='btc'><a 
    target={'_blank'} href='https://github.com/DARKKNIGHT-AP/'>
    Click me, to go to Github repo.
        </a></p>
    </div>
    
    <div className='skill'>
        <h3>--LinkedIn--</h3>
    <span className='bar'></span>
    <p className='btc'><a href='https://www.linkedin.com/in/arpit-thanoch' target={'_blank'}>
    Click me, to go to LinkedIn.
        </a> </p>
    </div>
    
    <div className='skill'>
        <h3>--Instagram--</h3>
    <span className='bar'></span>
    <p className='btc'><a target={'_blank'} href='https://www.instagram.com/thanoch_ap/'>
    Click me, to go to Instagram.
        </a> </p>
    </div>
    
    </div>
        </div>
      )
  )
}

export default Handles