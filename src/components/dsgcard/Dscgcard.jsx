import React from 'react'
import './dsgcard.css'

const Dscgcard = ({logo}) => {
  return (
    <div className='saas__dsgcard'>
      <div className='saas__dsgcard__image'>
        <img src={logo} alt="company-logo" />
      </div>
    </div>
  )
}

export default Dscgcard