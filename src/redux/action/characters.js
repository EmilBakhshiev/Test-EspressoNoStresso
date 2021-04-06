const addCharacterName = (name) => ({
    type: 'ADD_CHARACTER_NAME',
    payload: name,
});

const addCharacterImage = (image) => ({
    type: 'ADD_CHARACTER_IMAGE',
    payload: image,
})

export default addCharacterName;