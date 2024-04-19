import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  profileImage: null,
  authenticate: false,
};

const authenicateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.authenticate = true;
      state.id = action.payload.id;
    },
    socialLogin(state, action) {
      state.authenticate = true;
      state.id = action.payload.nickname;
      state.profileImage = action.payload.profile_image;
    },
    logout() {
      return initialState;
    },
  },
});

export const authenicateActions = authenicateSlice.actions;

export default authenicateSlice.reducer;
