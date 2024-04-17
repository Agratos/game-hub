import { configureStore } from '@reduxjs/toolkit';

import authenicateSlice from './slice/authenicateSlice';
import searchValueSlice from './slice/searchValueSlice';

const store = configureStore({
  reducer: {
    auth: authenicateSlice,
    search: searchValueSlice,
  },
});

export default store;
