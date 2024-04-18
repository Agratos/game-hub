import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export const useGameDetailQuery = ({ id }) => {
  const getGameDetail = ({ id }) => {
    return api.get(`/games/${id}`);
  };

  return useQuery({
    queryKey: ['game-detail', { id }],
    queryFn: () => getGameDetail({ id }),
    select: (res) => res.data,
    retry: false,
  });
};
