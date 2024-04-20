import React from 'react';

const MyPageMyGames = ({ headline }) => {
  return (
    <div style={{ marginTop: '60px' }}>
      <h2 className='mypage-headline'>{headline}</h2>
      {/* 좋아요, 즐겨찾기 게임 데이터 */}
    </div>
  );
};

export default MyPageMyGames;
