import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';

import { authenicateActions } from '../../../../store/slice/authenicateSlice';

import './SocialLogin.style.css';

const SocialLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authKey, setAuthKey] = useState('');
  const [token, setToken] = useState('');
  const rest_api_key = process.env.REACT_APP_KAKAO_API;
  const redirect_uri = 'http://localhost:3000/login';
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      setAuthKey(code);
    }
  }, []);

  useEffect(() => {
    if (authKey) {
      try {
        axios
          .post(
            'https://kauth.kakao.com/oauth/token',
            {
              grant_type: 'authorization_code',
              client_id: rest_api_key,
              redirect_uri: redirect_uri,
              code: authKey,
            },
            {
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=utf-8',
                Authorization: `Bearer ${authKey}`,
              },
            }
          )
          .then((response) => {
            setToken(response.data.access_token);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [authKey]);

  useEffect(() => {
    if (token) {
      try {
        axios
          .get('https://kapi.kakao.com/v2/user/me', {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const { nickname, profile_image } = response.data.properties;
            dispatch(
              authenicateActions.socialLogin({ nickname, profile_image })
            );
            navigate('/');
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [token]);

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
      {/* <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button className=''>Log in</Button>
        </div>
      </Col>
      <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button className=''>Log in</Button>
        </div>
      </Col> */}
    </Container>
  );
};

export default SocialLogin;
