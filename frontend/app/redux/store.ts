import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
