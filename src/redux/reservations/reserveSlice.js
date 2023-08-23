import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1' 

const initialState = {
  isLoading: true,
  reservations: [],
  error: '',
};

export const fetchReservations = createAsyncThunk(
  'fetch/reservations',
  async (accessToken) => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/v1/reservations', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const createReservation = (accessToken, data) => async () => {
  const { property, date, city } = data;
  const newReservation = { property_id: property.id, city, date };

  const response = await axios.post(
    `${BASE_URL}/reservations`,
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
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reservations = action.payload.reservation;
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    });
  },
});

export default reservationSlice.reducer;
