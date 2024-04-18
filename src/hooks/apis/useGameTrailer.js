import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

// https://api.rawg.io/docs/#operation/games_movies_read
// 제가 뭘 잘못한 건지 데이터를 못 가져오네요

export const useGameTrailerQuery = ({ id }) => {
  // console.log(id);
  const getGameTrailer = ({ id }) => {
    return api.get(`/games/${id}/movies`);
  };

  return useQuery({
    queryKey: ['game-trailer', id],
    queryFn: () => getGameTrailer({ id }),
    select: (res) => res.data,
    retry: false,
  });
};
