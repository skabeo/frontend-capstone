import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: true,
  reservations: undefined,
  error: '',
};

export const createReservation = (accessToken, data) => async () => {
  const { property, date, city } = data;
  const newReservation = { property_id: property.id, city, date };

  const response = await axios.post(
    'http://127.0.0.1:3000/api/v1/reservations',
    newReservation,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return response.data;
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
});

export default reservationSlice.reducer;
