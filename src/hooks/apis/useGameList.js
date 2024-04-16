import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export const useGameListQuery = () => {
  const getGameList = () => {
    return api.get('/games');
  };

  return useQuery({
    queryKey: ['game-list'],
    queryFn: getGameList,
    select: (res) => res.data,
    retry: false,
  });
};
