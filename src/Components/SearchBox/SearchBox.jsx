import "./SearchBox.scss";
import React from 'react'

const SearchBox = (props) => {
    const {handleInput} = props;


  return (
    <div>
        <form>
            <input onInput={handleInput} placeholder="Search"/>
        </form>
    </div>


  )
}

export default SearchBox