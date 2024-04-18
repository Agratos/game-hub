import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [
    {
      id: 'gamehub@google.com',
      password: 'gamehub',
    },
  ],
};

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    signUp(state, action) {
      const { id, password } = action.payload;
      state.userList.push({ id, password });
    },
  },
});

export const userManagementActions = userManagementSlice.actions;

export default userManagementSlice.reducer;
