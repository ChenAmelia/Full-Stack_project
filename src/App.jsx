import './App.scss';
import Navbar from './Components/NavBar/Navbar';
import MenuItems from './Components/MenuItems/MenuItems';
import HomePage from './Components/HomePage/HomePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {



  return (
    <Router>

      <div className="App">
          <Navbar />
          {/* <MenuItems /> */}
          <HomePage />
          

      </div>



    </Router>
    
      
    
  );
}

export default App;
