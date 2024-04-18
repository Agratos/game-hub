import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  password: null,
  authenticate: false,
};

const authenicateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.authenticate = true;
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
    logout() {
      return initialState;
    },
  },
});

export const authenicateActions = authenicateSlice.actions;

export default authenicateSlice.reducer;
