import "./HomePage.scss";
import React from 'react'
import Button from "../Button/Button";



const HomePage = () => {
  return (
    <>
    <div className="homepage">
       
        <h1>Clash Royale:<br/> Enter the arena</h1>

        <div className="homepage__buttons">

        <Button
        className="button"
        buttonStyle="button--outline"
        buttonSize="button--large"
        >
            DOWNLOAD
        </Button>

        <Button
        className="button"
        buttonStyle="button--default"
        buttonSize="button--large"
        >
            GET STARTED
        </Button>

        </div>
    
    </div>

        
    
    
    </>

  )
}

export default HomePage