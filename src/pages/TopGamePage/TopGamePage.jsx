import React from 'react';
import { useGameListQuery } from '../../hooks/apis/useGameList';

const TopGamePage = () => {
  const { data } = useGameListQuery();
  console.log('topgame', data);
  return <div>TopGamePage</div>;
};

export default TopGamePage;
