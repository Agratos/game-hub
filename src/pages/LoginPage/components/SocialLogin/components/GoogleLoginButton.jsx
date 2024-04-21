/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

import { Button } from 'react-bootstrap';
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';
import { authenicateActions } from '../../../../../store/slice/authenicateSlice';
import axios from 'axios';

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        const { name, picture } = res.data;
        dispatch(
          authenicateActions.login({ nickname: name, profile_image: picture })
        );
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className='d-grid'>
      <Button onClick={() => login()}>Google Login</Button>
      {/* <GoogleLogin
        onSuccess={(res) => {
          console.log(jwtDecode(res.credential));
        }}
        onError={(error) => console.log(error)}
      /> */}
    </div>
  );
};

export default GoogleLoginButton;
