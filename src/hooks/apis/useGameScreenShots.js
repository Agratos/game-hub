import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export const useGameScreenShotsQuery = ({ game_pk }) => {
  // console.log(game_pk);
  const getGameScreenShots = ({ game_pk }) => {
    return api.get(`/games/${game_pk}/screenshots`);
  };

  return useQuery({
    queryKey: ['game-screenshots', game_pk],
    queryFn: () => getGameScreenShots({ game_pk }),
    select: (res) => res.data,
    retry: false,
  });
};
