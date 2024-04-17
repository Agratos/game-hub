import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './LoginForm.style.css';

const LoginForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Form onSubmit={handleOnSubmit} className='login-page-section'>
      <p className='fs-1 login-page-default-width'>Log in</p>
      <Form.Group
        className='mb-3 login-page-default-width'
        controlId='formBasicEmail'
      >
        <Form.Control
          className='login-page-login-input'
          type='email'
          placeholder='Enter email'
        />
      </Form.Group>
      <Form.Group
        className='mb-3 login-page-default-width'
        controlId='formBasicPassword'
      >
        <Form.Control
          className='login-page-login-input'
          type='password'
          placeholder='Password'
        />
      </Form.Group>
      <div className='d-grid login-page-default-width'>
        <Button className='login-page-login-button' type='submit'>
          Log in
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
