import "./MenuItems.scss"
import { Link } from "react-router-dom";
import React from 'react'

const MenuItems = (props) => {

    const {toggleNav} = props;

  return (
    <div className="menuContainer">

        <div className="menuContainer__items" to="/" onClick={toggleNav}>
          Home
        </div>

        <div className="menuContainer__items" to="/" onClick={toggleNav}>
          Service
        </div>

        <div className="menuContainer__items" to="/" onClick={toggleNav}>
          Products
        </div>

        <div className="menuContainer__items" to="/" onClick={toggleNav}>
          Sign up
        </div>


    </div>
  )
}

export default MenuItems