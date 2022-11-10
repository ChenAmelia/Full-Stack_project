import "./ListContainer.scss"

import React from 'react'
import CardList from "../../Components/CardList/CardList"
import SearchBox from "../../Components/SearchBox/SearchBox";

const ListContainer = (props) => {

    const { cardsArr, handleInput } = props;


  return (
    <div>
        {/* <SearchBox handleInput={handleInput}/> */}

        <CardList cardsArr = {cardsArr}/>

    </div>


  )
}

export default ListContainer