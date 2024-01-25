import React from 'react'
import './footer.css'
import LogoApp from '../../assets/logo_app.svg'

const Footer = () => {
  return (
    <div className='saas__footer section__padding'>
      <div className='saas__footer-links'>
        <div className='saas__footer-container'>
          <div className='saas__footer-logo'>
            <img src={LogoApp} alt="app" />
          </div>
          <div className='saas__footer-linktree'>
            <div className='saas__footer-column'>
              <p className='link-header'>Product</p>
              <p className='link'>Features</p>
              <p className='link'>Pricing</p>
              <p className='link'>Changelog</p>
              <p className='link'>Support</p>
            </div>
            <div className='saas__footer-column'>
              <p className='link-header'>Legal</p>
              <p className='link'>Terms of privacy</p>
              <p className='link'>Privacy policy</p>
              <p className='link'>Security</p>
            </div>
            <div className='saas__footer-column'>
              <p className='link-header'>Company</p>
              <p className='link'>Blog</p>
              <p className='link'>Contact</p>
            </div>
            <div className='saas__footer-column'>
              <p className='link-header'>Social</p>
              <p className='link'>Dribble</p>
              <p className='link'>Behance</p>
              <p className='link'>Discord</p>
            </div>
          </div>
        </div>
      </div>
      <p className='saas__footer-rights'>All rights reserved.© 2024 DejectStudio</p>
    </div>
  )
}

export default Footer