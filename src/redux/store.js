import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './sessions/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export default store;
