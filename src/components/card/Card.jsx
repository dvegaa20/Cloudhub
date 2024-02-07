import React from 'react'
import './card.css'

const Card = ({icon, title, desc}) => {
  return (
    <div className='saas__card-container'>
        <div className='saas__card-icon'>
            <img src={icon} alt="icon" />
        </div>
        <div className='saas__card-title__func'>
            <h3>{title}</h3>
        </div>
        <div className='saas__card-description'>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card