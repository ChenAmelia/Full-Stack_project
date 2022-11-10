import { useState } from "react";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

import "./Carousel.scss";

import React from 'react'

const Carousel = (props) => {

    const { cardsArr } = props;
    const [counter, setCounter] = useState(0);

    const imgArr = cardsArr
    .filter((cards) => cards.url)
    .map((cards) => cards.url)

    const handleIncrement = () => {
        if (counter === imgArr.length - 1) {
          setCounter(0);
        } else {
          setCounter(counter + 1);
        }
      };
    
      const handleDecrement = () => {
        if (counter === 0) {
          setCounter(imgArr.length - 1);
        } else {
          setCounter(counter - 1);
        }
      };


  return (
    <div className="container">
        <div className="carousel">
        <img
        src={leftArrow}
        alt="left arrow"
        onClick={handleDecrement}
        className="carousel__arrow carousel__arrow--left"
      />

      {/* <p className="carousel__image" />
      {imgArr[counter]}
      <p/> */}

      <img 
      className="carousel__name"
      src={imgArr[counter]}
      />

      <img
        src={rightArrow}
        alt="right arrow"
        onClick={handleIncrement}
        className="carousel__arrow carousel__arrow--right"
      />

    </div>
        
    </div>
    
  )
}

export default Carousel