const inititalState = {
    characterImage: '',
}

function characterImageReducer(state = inititalState, action) {
    if (action.type === 'ADD_CHARACTER_IMAGE') {
        return {
            ...state,
            characterImage: action.payload,
        }
    }
    if (action.type === 'REMOVE_CHARACTER_IMAGE') {
        return {
            ...state,
            characterImage: action.payload,
        }

    }
    return state;
}

export default characterImageReducer;