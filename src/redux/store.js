import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './sessions/sessionSlice';
import propertiesReducer from './properties/propertiesSlice';
import reservationReducer from './reservations/reserveSlice';

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    session: sessionReducer,
    reservations: reservationReducer
  },
});

export default store;
