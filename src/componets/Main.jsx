import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Main({ getCharacters, clearCharacter }) {
  return (
    <div>
      <h1 className='title'>Какой ты персонаж из Рика и Морти?</h1>
      <div className='wrapper'>
        <Box mr={3}>
          <Button variant="contained" color="primary" onClick={getCharacters}>Вабба-лабба-даб-даб</Button>
        </Box>
        <Box mr={3}>
          <Link to='/answer'>
            <Button variant="contained" color="primary">Посмотреть ответ</Button>
          </Link>
        </Box>

        <Button variant="contained" color="primary" onClick={clearCharacter}>Очистить</Button>

      </div>
    </div>
  )
}

export default Main;
