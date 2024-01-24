import React from 'react'
import './hero2.css'
import Hero from '../../assets/hero2.svg'

const Hero2 = () => {
  return (
    <div className="saas__hero2 section__padding">
      <div className='saas__hero2-jumbo'>
        <div className='saas__hero2-header'>
          <h2>Keep every one in the loop</h2>
        </div>
        <div className='saas__hero2-text'>
          <p>All good things starts with a homepage. Get inspired without breaking your wallet.</p>
        </div>
        <div className='saas__hero2-button'>
          <button type='button'>Start for free</button>
        </div>
      </div>
      <div className='saas__hero2-image'>
        <img src={Hero} alt='hero2' />
      </div>
    </div>
  )
}

export default Hero2