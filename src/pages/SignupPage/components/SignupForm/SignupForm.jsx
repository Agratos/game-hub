import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import './SignupForm.style.css';

import { userManagementActions } from '../../../../store/slice/userManagementSlice';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userManagement.userList);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const targetEmail = e.target[0].value;
    const targetName = e.target[1].value;
    const targetPassword = e.target[2].value;

    const result = userList.filter(({ email }) => email === targetEmail);

    if (result.length === 0) {
      dispatch(
        userManagementActions.signUp({
          email: targetEmail,
          name: targetName,
          password: targetPassword,
        })
      );

      navigate('/login');
    } else {
      alert('This is a registered account');
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} className='login-page-section'>
      <p className='fs-1 login-page-default-width'>Signup</p>
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
          type='test'
          placeholder='Username'
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
          Signup
        </Button>
      </div>
    </Form>
  );
};

export default SignupForm;
