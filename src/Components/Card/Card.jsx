import "./Card.scss";

import React from 'react'

const Card = (props) => {
    const {name, elixir, rarity, attribute, count, targets, range, img, description } = props


  return (
    <div className="card">

        <img src={img} alt={name} className="card__imgs"/>

        <p className="card__name">{name}</p>

    </div>



  )
}

export default Card