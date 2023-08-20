import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './sessions/sessionSlice';
import propertiesReducer from '../pages/propertiesSlice';

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    session: sessionReducer,
  },
});

export default store;
