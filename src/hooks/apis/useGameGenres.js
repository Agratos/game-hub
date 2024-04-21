import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export const useGameGenresQuery = () => {
  // console.log(id);
  const getGameGenres = () => {
    return api.get(`/genres`);
  };

  return useQuery({
    queryKey: ['game-genres'],
    queryFn: () => getGameGenres(),
    select: (res) => res.data.results,
    retry: false,
  });
};

// NOTE page API, 요청 데이터 갯수 : 40(page_size)
export const useGameListGenresPaginationQuery = ({
  page,
  ordering,
  platforms,
  genre,
}) => {
  const getGameListGenresPagination = () => {
    if (ordering) {
      if (platforms) {
        if (genre) {
          return api.get(
            `/games?page=${page}&page_size=40&ordering=-${ordering}&parent_platforms=${platforms}&genres=${genre}`
          );
        } else {
          return api.get(
            `/games?page=${page}&page_size=40&ordering=-${ordering}&parent_platforms=${platforms}`
          );
        }
      } else {
        if (genre) {
          return api.get(
            `/games?page=${page}&page_size=40&ordering=-${ordering}&genres=${genre}`
          );
        } else {
          return api.get(
            `/games?page=${page}&page_size=40&ordering=-${ordering}`
          );
        }
      }
    } else {
      return api.get(`/games?page=${page}&page_size=40`);
    }
  };

  return useQuery({
    queryKey: ['game-Genres-list', { page, ordering, platforms, genre }],
    queryFn: getGameListGenresPagination,
    select: (res) => res.data.results,
    retry: false,
  });
};
