import React from 'react'
import './blog.css'
import Projects from '../../assets/projects.svg'
import Member from '../../assets/member.svg'
import Logo1 from '../../assets/logomark.svg'
import Logo2 from '../../assets/logomark2.svg'
import Person1 from '../../assets/person1.svg'
import Person2 from '../../assets/person2.svg'
import { Dscgcard } from '../../components/index'
import { CrowdStrike, Airbus, Hays, Sentry, Medwing, Cathay_Pacific, Liquid_Web, Autotrader } from '../../assets/index_designers'

const Blog = () => {
  return (
      <div className='saas__blog section__padding'>
        <div className='saas__blog-container'>
          <div className='saas__blog-header'>
            <h2>Your Archive of progress</h2>
          </div>
          <div className='saas__blog-content'>
            <div className='saas__blog-content_projects'>
              <div className='saas__blog-content_projects-header'>
                <h4>Projects</h4>
                <p>Organize, follow, and archive.</p>
              </div>
              <div className='saas__blog-content_projects-image'>
                <img src={Projects} alt="" />
              </div>
            </div>
            <div className='saas__blog-content_members'>
              <div className='saas__blog-content_members-header'>
                <h4>Member profiles</h4>
                <p>Automatic portfolios of your work.</p>
              </div>
              <div className='saas__blog-content_members-image'>
                <img src={Member} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='saas__blog-container2'>
          <div className='saas__blog-content2'>
            <div className='saas__blog-left'>
              <img src={Logo1} alt="" />
              <p>
              Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding 
              organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on 
              what's transpiring across various teams — impeccably aligning with our pre-existing procedures.
              </p>
              <div className='saas__blog-left_person'>
                <img src={Person1} alt="" />
                <div className='saas__blog-left_person-content'>
                  <h5>Gabriel Valdivia</h5>
                  <p>Principal Product Designer, Patreon</p>
                </div>
              </div>
            </div>
            <div className='saas__blog-right'>
              <img src={Logo2} alt="" />
              <p>
              Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their 
              current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive 
              platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, 
              it has accelerated our propensity for early-stage feedback beyond my expectations.
              </p>
              <div className='saas__blog-right_person'>
                <img src={Person2} alt="" />
                <div className='saas__blog-left_person-content'>
                  <h5>Buzz Usborne</h5>
                  <p>Principal Designer, Buildkite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='saas__blog-container3 '>
          <div className='saas__blog-container3-header'>
            <h2>Loved By Designers At</h2>
          </div>
          <div className='saas__blog-container3-images'>
            <div className='saas__blog-container3-top'>
              <Dscgcard logo={CrowdStrike} />
              <Dscgcard logo={Airbus} />
              <Dscgcard logo={Hays} />
              <Dscgcard logo={Sentry} />
            </div>
            <div className='saas__blog-container3-bottom'>
              <Dscgcard logo={Medwing} />
              <Dscgcard logo={Cathay_Pacific} />
              <Dscgcard logo={Liquid_Web} />
              <Dscgcard logo={Autotrader} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Blog