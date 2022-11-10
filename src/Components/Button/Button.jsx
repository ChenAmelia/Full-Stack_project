import "./Button.scss"
import React from 'react'
import { Link } from "react-router-dom"

const STYLES = ["button--default", "button--outline"]
const SIZES = ["button--medium", "button--large"]


const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
        <button 
        className={`button ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>

  )
}

export default Button