import React from 'react';
import { Col, Container, Button } from 'react-bootstrap';

import './SocialLogin.style.css';

const SocialLogin = () => {
  return (
    <Container className='login-page-section'>
      <p className='fs-2 login-page-default-width'>
        You can use social accounts to log in
      </p>
      <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button className=''>Log in</Button>
        </div>
      </Col>
      <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button className=''>Log in</Button>
        </div>
      </Col>
      <Col className='login-page-default-width'>
        <div className='d-grid'>
          <Button className=''>Log in</Button>
        </div>
      </Col>
    </Container>
  );
};

export default SocialLogin;
