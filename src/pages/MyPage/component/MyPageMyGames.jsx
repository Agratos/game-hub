import React from 'react';
import FavoriteGames from '../../TopGamePage/component/FavoriteGames/FavoriteGames';
import { useSelector } from 'react-redux';

const MyPageMyGames = () => {
  const favGamesList = useSelector((state) => state.score.favGames);
  const scoredGames = useSelector((state) => state.score.scoredGames);
  console.log('fva', favGamesList);
  console.log('sc', scoredGames);

  return (
    <div style={{ marginTop: '60px' }}>
      <h2 className='mypage-headline'>
        {`My Favorites and Liked ${scoredGames} games`}
      </h2>
      <div className='mypage-fv-games-list'>
        <FavoriteGames favGamesList={favGamesList} />
      </div>
    </div>
  );
};

export default MyPageMyGames;
