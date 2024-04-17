import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    search(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const searchActions = searchValueSlice.actions;

export default searchValueSlice.reducer;
