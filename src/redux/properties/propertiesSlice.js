import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const initialState = {
  isLoading: false,
  portfolio: [],
  error: '',
};

export const fetchPortfolio = createAsyncThunk('fetch/portfolio', async () => {
  try {
    const response = await fetch(`${BASE_URL}/properties`).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
});

export const createProperty = (accessToken, data) => async () => {
  try {
    const response = await axios.post(`${BASE_URL}/properties`, data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteProperty = createAsyncThunk('delete/property', async (propertyId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/properties/${propertyId}`);
    return propertyId; // Return the ID of the deleted property
  } catch (error) {
    throw error;
  }
});


const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPortfolio.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPortfolio.fulfilled, (state, action) => {
      state.isLoading = false;
      state.portfolio = action.payload;
    });
    builder.addCase(fetchPortfolio.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.errors;
    });
    builder.addCase(deleteProperty.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(deleteProperty.fulfilled, (state, action) => {
      // Remove the deleted property from the state
      state.portfolio = state.portfolio.filter(property => property.id !== action.payload);
    });

    builder.addCase(deleteProperty.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.errors;
    });
  },
});

export default propertiesSlice.reducer;
