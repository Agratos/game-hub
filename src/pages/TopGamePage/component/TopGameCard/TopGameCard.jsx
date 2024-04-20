import React from 'react';
import './TopGameCard.style.css';
import { useDispatch } from 'react-redux';
import {
  addFavGames,
  countScoredGames,
} from '../../../../store/slice/scoreGameSlice';
import { FaRegGrinHearts, FaRegThumbsUp, FaBan, FaMeh } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiComputerLine, RiPlaystationLine, RiXboxFill } from 'react-icons/ri';
import { MdLaptopMac, MdComputer } from 'react-icons/md';

const TopGameCard = ({
  game,
  allGameList,
  setAllGameList,
  setCountToFetch,
  countToFetch,
}) => {
  const dispatch = useDispatch();
  const handleBtn = (score) => {
    dispatch(countScoredGames());
    if (score === 'exceptional' || score === 'recommended') {
      dispatch(addFavGames({ game }));
    }
    const newAllGameList = allGameList.filter((item) => item.id !== game.id);
    setAllGameList(newAllGameList);
    setCountToFetch(countToFetch + 1);
  };
  return (
    <div className='top-game-card'>
      <div
        className='img-box'
        style={{ backgroundImage: `url(${game.background_image})` }}
      >
        <div className='img-info'>
          <div className='genre-li'>
            <span>Genres</span>
            <ul>
              {game?.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className='platform-li'>
            <span>platforms</span>
            <ul>
              {game?.parent_platforms.map((item, index) =>
                item.platform.name === 'PC' ? (
                  <li key={index}>
                    <RiComputerLine />
                  </li>
                ) : item.platform.name === 'PlayStation' ? (
                  <li key={index}>
                    <RiPlaystationLine />
                  </li>
                ) : item.platform.name === 'Xbox' ? (
                  <li key={index}>
                    <RiXboxFill />
                  </li>
                ) : item.platform.name === 'Mac' ? (
                  <li key={index}>
                    <MdLaptopMac />
                  </li>
                ) : (
                  <li key={index}>
                    <MdComputer />
                  </li>
                )
              )}
            </ul>
          </div>
          <div className='released'>
            <span>released</span>
            <div>{game.released}</div>
          </div>
          <div className='screenshot'>
            {game?.short_screenshots.slice(0, 3).map((item, index) => (
              <img key={index} alt='screenshot' src={item.image} />
            ))}
          </div>
        </div>
      </div>
      {/* //img-box */}
      <div className='desc-box'>
        <h3>
          <Link to={`/detail/${game.id}`}>{game.name}</Link>
        </h3>
        <div className='btn-list'>
          <div>
            <button onClick={() => handleBtn('exceptional')}>
              <FaRegGrinHearts />
              exceptional
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
      {/* //desc-box */}
    </div>
  );
};

export default TopGameCard;
