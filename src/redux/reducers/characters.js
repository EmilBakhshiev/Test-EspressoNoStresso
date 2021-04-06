const inititalState = {
    characters: [],
}

function characters(state = inititalState, action){
if(action.type === 'ADD_CHARACTER_NAME'){
    return{
        ...state,
        characters: action.payload,
    }
}
return state;
}
