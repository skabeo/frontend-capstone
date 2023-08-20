import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPortfolio = createAsyncThunk('fetch/portfolio', async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/properties').then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
});

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    portfolio: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPortfolio.fulfilled, (state, action) => {
      state.portfolio = action.payload;
    });
  },
});

fetchPortfolio();

// Action creators are generated for each case reducer function
export default propertiesSlice.reducer;
