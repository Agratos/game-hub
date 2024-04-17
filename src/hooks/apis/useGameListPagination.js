import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

// NOTE page API, 요청 데이터 갯수 : 40(page_size)
export const useGameListPaginationQuery = ({ page }) => {
  const getGameListPagination = () => {
    return api.get(`/games?page=${page}&page_size=40`);
  };

  return useQuery({
    queryKey: ['game-main-list', { page }],
    queryFn: getGameListPagination,
    select: (res) => res.data.results,
    retry: false,
  });
};
