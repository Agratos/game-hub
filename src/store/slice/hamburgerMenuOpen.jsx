import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hamburgerOn: false,
};

const hamburgerOnSlice = createSlice({
  name: 'hamburger-boolean',
  initialState,
  reducers: {
    setHamburgerOn(state, action) {
      state.hamburgerOn = action.payload;
    },
  },
});

export const hamburgerActions = hamburgerOnSlice.actions;

export default hamburgerOnSlice.reducer;
