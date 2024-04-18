import React from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';

import './SocialLogin.style.css';

const SocialLogin = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API;
  const redirect_uri = 'http://localhost:3000/login';
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const onKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const code = new URL(window.location.href).searchParams.get('code');

  if (code) {
    try {
      axios
        .post(
          'https://kauth.kakao.com/oauth/token',
          {
            grant_type: 'authorization_code',
            client_id: '0a0752c45a293b3d876349fcbcafb637',
            redirect_uri: redirect_uri,
            code: code,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              Authorization: `Bearer ${code}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

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
