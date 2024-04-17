import React from 'react';
import './TopGameCard.style.css';
import { useDispatch } from 'react-redux';
import { countScoredGames } from '../../../../store/slice/scoreGameSlice';

const TopGameCard = ({ game, allGameList, setAllGameList }) => {
  const dispatch = useDispatch();
  const handleBtn = (score) => {
    dispatch(countScoredGames());
    switch (score) {
      case 'great':
      case 'recommend':
        break;
      default:
        console.log(score);
    }
    const newAllGameList = allGameList.filter((item) => item.id !== game.id);
    setAllGameList(newAllGameList);
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
            <button onClick={() => handleBtn()}>meh</button>
          </div>
          <div>
            <button onClick={() => handleBtn()}>skip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGameCard;
