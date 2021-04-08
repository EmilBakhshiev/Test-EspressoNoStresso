const inititalState = {
    characterName: '',
}

function characterNameReducer(state = inititalState, action) {
    if (action.type === 'ADD_CHARACTER_NAME') {
        return {
            ...state,
            characterName: action.payload,
        }

    }
    if (action.type === 'REMOVE_CHARACTER_NAME') {
        return {
            ...state,
            characterName: action.payload,
        }

    }
    return state;
}
export default characterNameReducer;