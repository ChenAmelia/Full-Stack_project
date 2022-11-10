import "./CardList.scss";

import React from 'react'
import Card from "../../Components/Card/Card"

const CardList = (props) => {
    const { cardsArr } = props;

  return (

    <div className="cardContainer">

        {cardsArr.map((cards) => {

            return (

                <Card 
                key = {cards.id}
                name = {cards.name}
                elixir = {cards.elixir}
                rarity = {cards.rarity}
                attribute = {cards.attribute}
                count = {cards.count}
                targets = {cards.targets}
                range = {cards.range}
                img = {cards.url}
                description = {cards.description}
                />
            )

        })}


    </div>
  )
}

export default CardList