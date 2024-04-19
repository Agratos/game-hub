import { useQuery } from '@tanstack/react-query';
import api from '../../../../utils/api';

export const useKakaoUserInfoQuery = ({ token }) => {
  console.log(`token: `, token);
  const getKakaoUserInfo = () => {
    return api.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return useQuery({
    queryKey: ['kakao-info'],
    queryFn: () => getKakaoUserInfo(),
    select: (res) => res.data,

    retry: false,
    enabled: token !== undefined,
  });
};
