import React from 'react'
import './hero.css'
import tree from '../../assets/img_00.svg'
import apps from '../../assets/img_01.svg'

const Hero = () => {
  return (
    <div className='saas__hero section__padding'>
      <div className='saas__hero-content'>
        <h1>Create, inspect, and apply synthetic surveillance broadly.</h1>
        <p>Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
        <button type='button'>Start for free</button>
        <div className='saas__hero-content__quickstart'>
          <p>Want to talk or get a live demo? <strong>Get in touch →</strong></p>
        </div>
        {/* <div className='saas__hero-content__img-container'>
          <img src={tree} className='saas__hero__img01'/>
          <img src={apps} className='saas__hero__img00'/>
        </div> */}
      </div>
    </div>
  )
}

export default Hero