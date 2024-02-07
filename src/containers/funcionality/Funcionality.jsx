import React from 'react'
import './funcionality.css'
import Feedback from '../../assets/func_fdbck.svg'
import At from '../../assets/at.svg'
import List from '../../assets/list.svg'
import Wcheck from '../../assets/wcheck.svg'
import { Card } from '../../components/index'

const Funcionality = () => {
  return (
    <div className='saas__functionality section-padding'>
      <div className='saas__functionality-container'>
        <div className='saas__functionality-header'>
          <p>Best time here</p>
          <h2>Better feedback at the right time.</h2>
        </div>
        <div className='saas__functionality-content'>
          <div className='saas__funcionality-top_content'>
            <img src={Feedback} alt="" />
          </div>
          <div className='saas__funcionality-bottom_content'>
            <Card icon={At} title='Mentions' desc='Mention anyone on your team to include them in a post.' />
            <Card icon={List} title='Polls' desc='Get a quick gut check from the team on design options.' />
            <Card icon={Wcheck} title='Resolve comments' desc='Mark comments as resolved to keep the conversation focused.' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Funcionality