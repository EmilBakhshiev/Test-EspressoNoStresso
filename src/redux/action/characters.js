export const addCharacterName = (name) => ({
    type: 'ADD_CHARACTER_NAME',
    payload: name,
});

export const addCharacterImage = (image) => ({
    type: 'ADD_CHARACTER_IMAGE',
    payload: image,
})

export const removeCharacterName = (name) => ({
    type: 'REMOVE_CHARACTER_NAME',
    payload: name,
})

export const removeCharacterImage = (image) => ({
    type: 'REMOVE_CHARACTER_IMAGE',
    payload: image,
})