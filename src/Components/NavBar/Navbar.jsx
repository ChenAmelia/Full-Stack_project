import "./Navbar.scss";
import React, { useState } from 'react'

import logo from "../../assets/images/logo.jpg"
import menuIcon from "../../assets/images/menu-icon.png"
import MenuItems from "../MenuItems/MenuItems";


const Navbar = () => {

    const {showNav, setShowNav} = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    }

  return (
    <nav className="navbar">

        <div className="navbar__container">
          

            <div className="navbar__logo">
                Clash Royale
                <img 
                src={logo} 
                alt="logo" 
                className="navbar__logo--img"  
                />
            </div>
            
            
            {showNav && <MenuItems toggleNav={toggleNav}/>}

            <div className="navbar__menu">
                <img 
                src={menuIcon} 
                className="navbar__menu--icon"
                onClick={toggleNav}
                />
            </div>
            
            

        </div>

    </nav>
  )
}

export default Navbar