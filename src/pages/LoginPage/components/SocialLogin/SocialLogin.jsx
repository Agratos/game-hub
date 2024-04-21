import React from 'react';
import { Col, Container } from 'react-bootstrap';

import KakaoLoginButton from './components/KakaoLoginButton';
import GoogleLoginButton from './components/GoogleLoginButton';

import './SocialLogin.style.css';

const SocialLogin = () => {
  return (
    <Container className='login-page-section'>
      <p className='fs-2 text-center login-page-default-width '>
        You can use social accounts to log in
      </p>
      <Col className='login-page-default-width'>
        <KakaoLoginButton />
      </Col>
      <Col className='login-page-default-width'>
        <GoogleLoginButton />
      </Col>
    </Container>
  );
};

export default SocialLogin;
