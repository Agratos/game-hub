import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Button } from 'react-bootstrap';
//import axios from 'axios';

import { authenicateActions } from '../../../../store/slice/authenicateSlice';
import { useKakaoTokenQuery } from '../../../../hooks/apis/login/kakao/useKakaoToken';
import { useKakaoUserInfoQuery } from '../../../../hooks/apis/login/kakao/useKakaoUserInfo';

import './SocialLogin.style.css';

const SocialLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [kakaoAuthKey, setKakaoAuthKey] = useState('');
  const rest_api_key = process.env.REACT_APP_KAKAO_API;
  const redirect_uri = 'http://localhost:3000/login';
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
      const { nickname, profile_image } = kakaoUserInfo.properties;
      dispatch(authenicateActions.socialLogin({ nickname, profile_image }));
      navigate('/');
    }
  }, [kakaoSuccess]);

  const onKakaoLogin = async () => {
    window.location.href = kakaoURL;
  };

  return (
    <Container className='login-page-section'>
      <p className='fs-2 text-center login-page-default-width '>
        You can use social accounts to log in
      </p>
      <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button onClick={onKakaoLogin}>Kakao Login</Button>
        </div>
      </Col>
      <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button className=''>Gogole Login</Button>
        </div>
      </Col>
      {/* <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button className=''>Log in</Button>
        </div>
      </Col> */}
    </Container>
  );
};

export default SocialLogin;
