import React from 'react';
import api from '../utils/api';
import { Route,  Switch } from 'react-router-dom';
import Main from './Main';
import Character from './Character';
import { addCharacterName, addCharacterImage, removeCharacterName, removeCharacterImage } from '../redux/action/characters'
import { useDispatch } from 'react-redux';




function App() {

  const dispatch = useDispatch();

  function getCharacters() {
    api.getCharacters()
      .then((res) => {
        let charactersArray = res.results.map((obj => {
          return [obj.name, obj.image]
        }));
        const randomCharacter = charactersArray[Math.floor(charactersArray.length * Math.random())];
        dispatch(addCharacterName(randomCharacter[0]));
        dispatch(addCharacterImage(randomCharacter[1]))
      })
      .catch(err => console.error(err));
  }

  function removeCharacter() {
    dispatch(removeCharacterName(''));
    dispatch(removeCharacterImage(''));
  }

  return (
    <div className="page">
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Main getCharacters={getCharacters} clearCharacter={removeCharacter} />
          </Route>
          <Route exact path='/answer'>
            <Character />
          </Route>
        </Switch>
      </div>
    </div>
  );
}


export default App;
