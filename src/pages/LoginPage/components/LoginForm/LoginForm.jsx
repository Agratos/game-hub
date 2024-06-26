import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.style.css';

import { authenicateActions } from '../../../../store/slice/authenicateSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userManagement.userList);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const targetEmail = e.target[0].value;
    const targetPassword = e.target[1].value;

    const loginResult = userList.filter(
      ({ email, password }) =>
        email === targetEmail && password === targetPassword
    );

    if (loginResult.length === 1) {
      dispatch(
        authenicateActions.login({ id: targetEmail, password: targetPassword })
      );

      navigate('/');
    } else {
      alert('Invalid username or password');
    }
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
          required
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
          required
        />
      </Form.Group>
      <div className='d-grid login-page-default-width'>
        <Button className='login-page-login-button' type='submit'>
          Log in
        </Button>
        <div
          className='signup-navigate-button'
          onClick={() => navigate('/signup')}
        >{`Don't have an account? Sign up.`}</div>
      </div>
    </Form>
  );
};

export default LoginForm;
