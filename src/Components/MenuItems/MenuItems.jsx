import "./MenuItems.scss"
import { Link } from "react-router-dom";
import React from 'react'

const MenuItems = (props) => {

    const {toggleNav} = props;

  return (
    <div className="menuContainer">

        <Link className="menuContainer__items" to="/" onClick={toggleNav}>
          Home
        </Link>

        <Link className="menuContainer__items" to="/" onClick={toggleNav}>
          Service
        </Link>

        <Link className="menuContainer__items" to="/" onClick={toggleNav}>
          Products
        </Link>

        <Link className="menuContainer__items" to="/" onClick={toggleNav}>
          Sign up
        </Link>


    </div>
  )
}

export default MenuItems