import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export const useGameSearchQuery = ({ query }) => {
  const getGameSearch = () => {
    return api.get(`/search?search=${query}`);
  };

  return useQuery({
    queryKey: ['game-search', query],
    queryFn: getGameSearch,
    select: (res) => res.data.results,
    retry: false,
  });
};
