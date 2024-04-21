import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import SignupForm from './components/SignupForm/SignupForm';
import SocialLogin from '../LoginPage/components/SocialLogin/SocialLogin';

import { useGameImageQuery } from '../../hooks/apis/useGameImage';

import './SignupPage.style.css';

const SignupPage = () => {
  const { data } = useGameImageQuery({ id: 500 });

  return (
    <Container className='login-page text-white'>
      <div
        className='login-page-background'
        style={{ background: `url(${data?.background_image})` }}
      />
      <Row className='login-page-row'>
        <Col className='z-2 my-auto' lg={6}>
          <SignupForm />
        </Col>
        <Col className='z-2 my-auto' lg={6}>
          <SocialLogin />
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
