import React from 'react'
import { RiMenuLine, RiCloseLin } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="saas__navbar">
      <div className="saas__navbar-links">
        <div className="saas__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar