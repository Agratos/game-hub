import { useQuery } from '@tanstack/react-query';
import api from '../../../utils/api';

export const useKakaoTokenQuery = ({ authKey, redirect_uri }) => {
  const getKakaoToken = () => {
    return api.post(
      `https://kauth.kakao.com/oauth/token`,
      {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_KAKAO_API,
        redirect_uri,
        code: authKey,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: `Bearer ${authKey}`,
        },
      }
    );
  };

  return useQuery({
    queryKey: ['kakao-token', authKey, redirect_uri],
    queryFn: () => getKakaoToken(),
    select: (res) => res.data.access_token,
    retry: false,
    enabled: authKey !== '',
  });
};
