import React from 'react';
import './FavoriteGames.style.css';
import { useNavigate } from 'react-router-dom';

const FavoriteGames = ({ favGamesList }) => {
  const navigate = useNavigate();
  return (
    <div className='favGamesWrap'>
      <h2>What You Liked :</h2>
      <div className='flexBox'>
        {favGamesList?.map((game, index) => (
          <div key={index} className='favCard'>
            <div
              style={{ backgroundImage: `url(${game.background_image})` }}
              className='favGameImg'
            ></div>
            <div className='favGameInfo'>
              <div
                className='gameName'
                role='presentation'
                onClick={() => {
                  navigate(`/detail/${game.id}`);
                  window.scrollTo(0, 0);
                }}
                onKeyDown={() => {
                  navigate(`/detail/${game.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                {game.name}
              </div>
              <div>
                <span className='category'>genres</span>
                {game.genres.map((genre, index) => (
                  <em key={index}>{genre.name}</em>
                ))}
              </div>
              <div>
                <span className='category'>rating</span>
                {game.rating}
              </div>
              <div>
                <span className='category'>released</span>
                {game.released}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteGames;
