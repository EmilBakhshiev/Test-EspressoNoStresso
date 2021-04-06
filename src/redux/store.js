import { createStore, combineReducers } from 'redux';
import addCharacterName from './action/characters';



const store = createStore(rootReducer);

export default store;