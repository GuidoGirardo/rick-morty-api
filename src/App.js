import './App.css';
import imagen from './img/rick-morty.png';
import React, {useState, useEffect} from 'react';
import Characters from './components/Characters.js';

function App() {

  const [characters, setCharacters] = useState(null); // comienza vacío

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const apiJSON = await api.json();
    setCharacters(apiJSON.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (<Characters characters={characters} setCharacters={setCharacters} />) : ( <>
          <img src={imagen} alt='Rick & Mortt' className='img-home' />
          <button onClick={reqApi} className='btn-search' >Buscar Personajes</button>
          </> )}
      </header>
    </div>
  );
}

export default App;
