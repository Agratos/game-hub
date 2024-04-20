import React from 'react';
import { Col, Container } from 'react-bootstrap';

import KakaoLogin from './components/KakaoLogin';
import GoogleLogin from './components/GoogleLogin';

import './SocialLogin.style.css';

const SocialLogin = () => {
  return (
    <Container className='login-page-section'>
      <p className='fs-2 text-center login-page-default-width '>
        You can use social accounts to log in
      </p>
      <Col className='login-page-default-width'>
        <KakaoLogin />
      </Col>
      <Col className='login-page-default-width'>
        <GoogleLogin />
      </Col>
    </Container>
  );
};

export default SocialLogin;
