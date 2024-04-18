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

    const targetId = e.target[0].value ?? '123';
    const targetPassword = e.target[1].value ?? '34';

    const loginResult = userList.findIndex(
      ({ id, password }) => id === targetId && password === targetPassword
    );

    if (loginResult) {
      dispatch(
        authenicateActions.login({ id: targetId, password: targetPassword })
      );

      navigate('/');
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
