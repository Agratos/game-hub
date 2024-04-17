import { configureStore } from '@reduxjs/toolkit';

import authenicateSlice from './slice/authenicateSlice';
import searchValueSlice from './slice/searchValueSlice';
import scoreGameSlice from './slice/scoreGameSlice';

const store = configureStore({
  reducer: {
    auth: authenicateSlice,
    search: searchValueSlice,
    score: scoreGameSlice,
  },
});

export default store;
