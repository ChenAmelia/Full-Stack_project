import './App.scss';
import Navbar from './Components/NavBar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import ListContainer from './containers/ListContainer/ListContainer';
import Carousel from './Components/Carousel/Carousel';

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {

  const [cards, setCards] = useState([]);
  const [searchCards, setSearchCards] = useState("");
  const [filteredCards, setFilteredCards] = useState([])

  const url = "http://localhost:8080/cards";


    useEffect(() => {
        getCards(url);
    }, [])

    const getCards = async () => {
        const response = await fetch(url);
        const cardData = await response.json();
        setCards(cardData)
    };

    const handleInput = (event) => {
      const cleanInput = event.target.value.toLowerCase();
      setSearchCards(cleanInput);

      if(searchCards === "") {
        setFilteredCards(cards)
      } else if (searchCards !== "") {
        const newArr = cards.filter((card) => {
          return card.name.toLowerCase().includes(searchCards);
        });
        setFilteredCards(newArr);
      } else {
        setFilteredCards(cards);
      }
    };

    const handleCheckBox = (event) => {
      if(event.target.ckecked) {
        if(event.target.value === "common") {
          setCards(cards.filter((card) => card.rarity === "Common"))
        }
        else if(event.target.value === "rare") {
          setCards(cards.filter((card) => card.rarity === "Rare"))
        }
        else if(event.target.value === "epic") {
          setCards(cards.filter((card) => card.rarity === "Epic"))
        }
        else if(event.target.value === "legendary") {
          setCards(cards.filter((card) => card.rarity === "Legendary"))
        }
        else if(event.target.value === "champion") {
          setCards(cards.filter((card) => card.rarity === "Champion"))
        }
      } else {
        getCards();
      }
    }



  return (
  
      <div className="App">
          <Navbar />
          <HomePage />
          <Carousel cardsArr = {cards}/>
          <ListContainer 
          cardsArr = {cards} 
          handleInput={handleInput}
          />   
      </div>
    
  );
}

export default App;
