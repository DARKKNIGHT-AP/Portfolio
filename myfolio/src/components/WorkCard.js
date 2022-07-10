import './WorkCardStyles.css'
// import pro1 from '../assets/rental.jpg';
import React from 'react'
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className='project-card'>

    <img src={props.imgsrc} alt='piroject 1'></img>

    <h2 className='project-title'> {props.title}</h2>

<div className='pro-details'>

    <p>{props.text}</p>

    <div className='pro-btns'>

        <a target={'_blank'}href={props.view} className='btn'>------Source Code------</a>

    </div>
</div>
</div>
  )
}

export default WorkCard