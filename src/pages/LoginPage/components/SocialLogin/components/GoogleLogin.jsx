/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { authenicateActions } from '../../../../../store/slice/authenicateSlice';

const GoogleLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rest_api_key = process.env.REACT_APP_GOOGLE_API;
  const redirect_uri = 'http://localhost:3000/login';
  const kakaoURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=token&scope=email profile`;

  const onGoogleLogin = async () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className='d-grid'>
      <Button onClick={onGoogleLogin}>Google Login</Button>
    </div>
  );
};

export default GoogleLogin;
