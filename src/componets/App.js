import React, { useState, useEffect } from 'react';

import api from '../utils/api';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Character from './Character';

function App() {
  const [character, setCharacter] = useState('');
  const [characterImage, setCharacterImage] = useState('');


  function getCharacters() {
    api.getCharacters()
      .then((res) => {
        let charactersArray = res.results.map((obj => {
          return [obj.name, obj.image]
        }));
        const randomCharacter = charactersArray[Math.floor(charactersArray.length * Math.random())];
        setCharacter(randomCharacter[0]);
        setCharacterImage(randomCharacter[1]);
      })
  }

  function clearCharacter() {
    setCharacter('');
    setCharacterImage('');
  }

  return (
    <div className="page">
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Main getCharacters={getCharacters} clearCharacter={clearCharacter} />
          </Route>
          <Route exact path='/answer'>
            <Character characterImage={characterImage} character={character} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
