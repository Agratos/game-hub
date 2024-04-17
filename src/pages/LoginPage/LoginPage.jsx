import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import LoginForm from './components/LoginForm/LoginForm';
import SocialLogin from './components/SocialLogin/SocialLogin';

import { useGameImageQuery } from '../../hooks/apis/useGameImage';

import './LoginPage.style.css';

const LoginPage = () => {
  const { data } = useGameImageQuery({ id: 5679 });

  console.log(data);

  return (
    <Container className='login-page text-white'>
      <div
        className='login-page-background'
        style={{ background: `url(${data?.background_image})` }}
      />
      <Row className='login-page-row'>
        <Col className='z-2 my-auto' lg={6}>
          {/* //TODO - Login Form */}
          <LoginForm />
        </Col>
        <Col className='z-2 my-auto' lg={6}>
          {/* //TODO - Social Login */}
          {/* <LoginForm /> */}
          <SocialLogin />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
