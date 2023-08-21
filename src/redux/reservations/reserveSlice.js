import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: true,
  reservations: undefined,
  error: '',
};

export const createReservation = (accessToken, data) => async () => {
  const { property, date, city } = data;
  const newReservation = { property_id: property, city, date };

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
  // extraReducers: builder => {
  //     builder.addCase(createReservation.pending, (state) => {
  //         state.loading = true
  //         state.error = ''
  //     }),
  //     builder.addCase(createReservation.fulfilled, (state, action) => {
  //         state.loading = false
  //         state.error = ''
  //         state.reservation = action.payload
  //     }),
  //     builder.addCase(createReservation.rejected, (state) => {
  //         state.loading = false
  //         state.error = 'Failed to reserve'
  //     })
  // }
});

export default reservationSlice.reducer;
