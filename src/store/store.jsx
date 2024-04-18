import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userManagementSlice from './slice/userManagementSlice';
import authenicateSlice from './slice/authenicateSlice';
import searchValueSlice from './slice/searchValueSlice';
import scoreGameSlice from './slice/scoreGameSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'userManagement'],
};

const rootReducer = combineReducers({
  userManagement: userManagementSlice,
  auth: authenicateSlice,
  search: searchValueSlice,
  score: scoreGameSlice,
});

const persistedAuthReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedAuthReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
