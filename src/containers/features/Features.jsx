import React from 'react'
import './features.css'
import Check from '../../assets/check.svg'
import Video from '../../assets/video_icon.svg'
import Demo from '../../assets/demo.svg'
import Feedback from '../../assets/feedback.svg'

const Features = () => {
  return (
    <div className='saas__features section__padding'>
      <div className='saas__features-container'>
        <div className='saas__features-content-left'>
          <div className='saas__features-content__header'>
            <button type='button'>Share</button>
            <h2>Share anything you’re working on.</h2>
          </div>
          <div className='saas__features-content__info'>
            <p> 
              Campsite has been instrumental in keeping designers aware of each others' 
              work-in-progress in a way that was previously slowing us down. It's also 
              one of the only channels where.
            </p>
          </div>
          <div className='saas__features-content__icons'>
            <img src={Check} />
            <p>Coded</p>
            <img src={Check} />
            <p>100% secure</p>
          </div>
          <div className='saas__features-content__video'>
            <img src={Video} />
            <p>See how it works</p>
          </div>
        </div>
        <div className='saas__features-content-right'>
          <div className='saas__features-demo__frame'>
            <img src={Demo} alt="" />
          </div>
        </div>
      </div>
      <div className='saas__features section__margin'>
        <div className='saas__features-container'>
          <div className='saas__features-second-content-right'>
            <img src={Feedback} alt="" />
          </div>
          <div className='saas__features-content-left'>
            <div className='saas__features-content__header'>
              <button type='button'>Feedback</button>
              <h2>Better feedback at the right time.</h2>
            </div>
            <div className='saas__features-content__info'>
              <p> 
                Campsite has been instrumental in keeping designers aware of each others' 
                work-in-progress in a way that was previously slowing us down. It's also 
                one of the only channels where.
              </p>
            </div>
            <div className='saas__features-content__video'>
              <img src={Video} />
              <p>See how it works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features