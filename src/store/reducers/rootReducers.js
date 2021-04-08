import { combineReducers } from 'redux';
import characterNameReducer from './characterName';
import characterImageReducer from './characterImage';


const rootReducer = combineReducers({
    name: characterNameReducer,
    image: characterImageReducer
})

export default rootReducer;