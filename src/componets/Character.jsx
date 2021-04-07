import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';



function Character() {

    const characterName = useSelector(({name})=>name.characterName);
    const characterImage = useSelector(({image})=>image.characterImage);

    return (
        <div>
            <h1 className='character-name'>{characterName}</h1>
            <img src={characterImage} alt={characterName} />
            <div className='wrapper'>
                <Link to='/'>
                    <Button variant="contained" color="primary">Испытай судьбу снова</Button>
                </Link>
            </div>
        </div>
    )
}

export default Character;
