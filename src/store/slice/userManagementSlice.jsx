import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [
    {
      email: 'gamehub@google.com',
      name: 'gamehub',
      password: 'gamehub',
    },
  ],
};

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    signUp(state, action) {
      const { email, name, password } = action.payload;
      state.userList.push({ email, name, password });
    },
  },
});

export const userManagementActions = userManagementSlice.actions;

export default userManagementSlice.reducer;
