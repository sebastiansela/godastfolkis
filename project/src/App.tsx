import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import BeerCardsGallery from './beer';

function App() {
  return (
    <div className="App">
    <header className="header">
        <div id="headerDiv">
          <h1 className="h1">Välkommen till GodastFolkis.se 🍻!</h1>
          <h5 className='h5'><p>Sidan för dig som vill hitta den godaste folkisen, eller lättölen!</p></h5>
        </div>
    </header>
    <nav>
        <div>
            <div className="ui selection dropdown">
                <input type="hidden" name="typesOfFolkis"/>
                <i className="dropdown icon"></i>
                <div className="default text">Sortera</div>
                <div className="menu">
                  <div className="item" data-value="0">Allt</div>
                  <div className="item" data-value="1">Folkisar</div>
                  <div className="item" data-value="2">Lättisar</div>
                </div>
              </div>
        </div>
    </nav>
      <div>
        <BeerCardsGallery />
      </div>
    <footer>
        <div className="footerDiv">
            <p>Made by Sebastian Sela 2024</p>
        </div>
    </footer>
    
    </div>
  );
}

/* */

export default App;
