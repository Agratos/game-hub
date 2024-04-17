import React from 'react';
import PropTypes from 'prop-types';
import './TopGameCard.style.css';

const TopGameCard = ({ game }) => {
  console.log('card', game);
  return (
    <div className='top-game-card'>
      <div
        className='img-box'
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>
      <div className='desc-box'>
        <h3>{game.name}</h3>
      </div>
    </div>
  );
};

export default TopGameCard;

TopGameCard.propTypes = {
  game: PropTypes.object.isRequired,
};
