import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import LoginForm from './components/LoginForm/LoginForm';
import SocialLogin from './components/SocialLogin/SocialLogin';

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          {/* //TODO - Login Form */}
          <LoginForm />
        </Col>
        <Col lg={6}>
          {/* //TODO - Social Login */}
          <SocialLogin />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
