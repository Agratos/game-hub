import { configureStore } from '@reduxjs/toolkit';

import authenicateSlice from './slice/authenicateSlice';

const store = configureStore({
  reducer: {
    auth: authenicateSlice,
  },
});

export default store;
