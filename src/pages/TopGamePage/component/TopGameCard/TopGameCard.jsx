import React from 'react';
import PropTypes from 'prop-types';
import './TopGameCard.style.css';

const TopGameCard = ({ game, allGameList, setAllGameList }) => {
  const handleBtn = (score) => {
    const newAllGameList = allGameList.filter((item) => item.id !== game.id);
    setAllGameList(newAllGameList);
    console.log(score);
  };
  return (
    <div className='top-game-card'>
      <div
        className='img-box'
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>
      <div className='desc-box'>
        <h3>{game.name}</h3>
        <div className='btn-list'>
          <div>
            <button onClick={() => handleBtn('great')}>great</button>
          </div>
          <div>
            <button onClick={() => handleBtn('recommend')}>recommend</button>
          </div>
          <div>
            <button onClick={() => handleBtn('meh')}>meh</button>
          </div>
          <div>
            <button onClick={() => handleBtn('skip')}>skip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGameCard;

TopGameCard.propTypes = {
  game: PropTypes.object.isRequired,
  allGameList: PropTypes.array.isRequired,
  setAllGameList: PropTypes.func.isRequired,
};
