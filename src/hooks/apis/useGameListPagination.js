import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

// NOTE page API, 요청 데이터 갯수 : 40(page_size)
export const useGameListPaginationQuery = ({ page, ordering, platforms }) => {
  const getGameListPagination = () => {
    if (ordering) {
      // return api.get(`/games?page=${page}&page_size=40&ordering=-${ordering}`);

      if (platforms) {
        console.log(platforms);
        return api.get(
          `/games?page=${page}&page_size=40&ordering=-${ordering}&parent_platforms=${platforms}`
        );
      } else {
        return api.get(
          `/games?page=${page}&page_size=40&ordering=-${ordering}`
        );
      }
    } else {
      return api.get(`/games?page=${page}&page_size=40`);
    }
  };

  return useQuery({
    queryKey: ['game-main-list', { page, ordering, platforms }],
    queryFn: getGameListPagination,
    select: (res) => res.data.results,
    retry: false,
  });
};
