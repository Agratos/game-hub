import React from 'react';
import './TopGameCard.style.css';
import { useDispatch } from 'react-redux';
import {
  addFavGames,
  countScoredGames,
} from '../../../../store/slice/scoreGameSlice';
import { FaRegGrinHearts, FaRegThumbsUp, FaBan, FaMeh } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopGameCard = ({ game, allGameList, setAllGameList }) => {
  const dispatch = useDispatch();
  const handleBtn = (score) => {
    dispatch(countScoredGames());
    if (score === 'great' || score === 'recommended') {
      dispatch(addFavGames({ gameId: game.id }));
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
        <h3>
          <Link to={`/detail/${game.id}`}>{game.name}</Link>
        </h3>
        <div className='btn-list'>
          <div>
            <button onClick={() => handleBtn('great')}>
              <FaRegGrinHearts />
              great
            </button>
          </div>
          <div>
            <button onClick={() => handleBtn('recommended')}>
              <FaRegThumbsUp />
              recommended
            </button>
          </div>
          <div>
            <button onClick={() => handleBtn()}>
              <FaMeh />
              meh
            </button>
          </div>
          <div>
            <button onClick={() => handleBtn()}>
              <FaBan />
              skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGameCard;
