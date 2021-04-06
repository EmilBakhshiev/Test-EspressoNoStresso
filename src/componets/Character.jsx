import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Character({characterImage, character}) {
    return (
        <div>
            <h1 className='character-name'>{character}</h1>
            <img src={characterImage} alt={character} />
            <div className='wrapper'>
                <Link to='/'>
                    <Button variant="contained" color="primary" className='btn btn_back'>Испытай судьбу снова</Button>
                </Link>
            </div>
        </div>
    )
}

export default Character
