import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Menu = () => (
  <>
  <p><a href="#product">Product</a></p>
  <p><a href="#home">Home</a></p>
  <p><a href="#shop">Shop</a></p>
  <p><a href="#pages">Pages</a></p>
  <p><a href="#integrations">Integrations</a></p>
  <p><a href="#developers">Developers</a></p>
  <p><a href="#product">Product</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="saas__navbar">
      <div className="saas__navbar-links">
        <div className="saas__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="saas__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="saas__navbar-sign">
        <p>Login</p>
        <button type='button'>Start for free</button>
      </div>
      <div className="saas__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="saas__navbar-menu-container scale-up-center">
            <div className="saas__navbar-menu__container-links">
              <Menu />
              <div className="saas__navbar-menu__container-links-sign">
                <p>Login</p>
                <button type='button'>Start for free</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar