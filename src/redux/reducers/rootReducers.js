import {  combineReducers } from 'redux';
import addCharacterName from '../action/characters';

const rootReducer = combineReducers({
    addCharacterName,
  })
  
  export default rootReducer;