import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export const useGameImageQuery = ({ id }) => {
  const getGameImage = () => {
    return api.get(`/games/${id}`);
  };

  return useQuery({
    queryKey: ['game-image', id],
    queryFn: getGameImage,
    select: (res) => res.data,
    retry: false,
  });
};
