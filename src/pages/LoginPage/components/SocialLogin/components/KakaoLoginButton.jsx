import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { authenicateActions } from '../../../../../store/slice/authenicateSlice';
import { useKakaoTokenQuery } from '../../../../../hooks/apis/login/useKakaoToken';
import { useKakaoUserInfoQuery } from '../../../../../hooks/apis/login/useKakaoUserInfo';

const KakaoLoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [kakaoAuthKey, setKakaoAuthKey] = useState('');
  const rest_api_key = process.env.REACT_APP_KAKAO_API;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const { data: kakaoUserInfo, isSuccess: kakaoSuccess } =
    useKakaoUserInfoQuery({
      token: useKakaoTokenQuery({ authKey: kakaoAuthKey, redirect_uri }).data,
    });

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) setKakaoAuthKey(code);
  }, []);

  useEffect(() => {
    if (kakaoSuccess) {
      console.log(kakaoSuccess, kakaoUserInfo.properties);
      const { nickname, profile_image } = kakaoUserInfo.properties;
      dispatch(authenicateActions.socialLogin({ nickname, profile_image }));
      navigate('/');
    }
  }, [kakaoSuccess]);

  const onKakaoLogin = async () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className='d-grid'>
      <Button onClick={onKakaoLogin}>Kakao Login</Button>
    </div>
  );
};

export default KakaoLoginButton;
