import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

const getTopGameList = () => {
  return api.get(`/games&page_size=100`);
};

export const useTopGameListQuery = () => {
  return useQuery({
    queryKey: ['top-game-list'],
    queryFn: getTopGameList,
    select: (result) => result.data,
  });
};
