import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, requestAccessTokenWithRefreshToken, getCurrentUser } from '../../api/sessionAPI';

const getRefreshToken = () => localStorage.getItem('refreshToken');
const storeRefreshToken = (token) => {
  localStorage.setItem('refreshToken', token);
};

const initialState = {
  currentUser: {
    id: '',
    email: '',
    role: '',
    createdAt: '',
  },
  isLoading: true,
  error: '',
  errorMessages: [],
  accessToken: '',
  refreshToken: getRefreshToken(),
  expiresIn: '',
  tokenType: '',
};

export const signupUser = createAsyncThunk('session/signupUser', async (payload) => {
  try {
    // const response = await axios.get('http://127.0.0.1:3000/api/v1/messages');
    const response = await createUserWithEmailAndPassword(
      payload.name,
      payload.email,
      payload.password,
    );
    return response;
  } catch (error) {
    return error;
  }
});

export const refreshAccessToken = createAsyncThunk('session/refreshAccessToken', async (refreshToken, { rejectWithValue }) => {
  if (!refreshToken) {
    return rejectWithValue('No refresh token');
  }
  try {
    const refreshResponse = await requestAccessTokenWithRefreshToken(
      refreshToken,
    );
    if (refreshResponse.error) {
      return rejectWithValue(refreshResponse.data);
    }
    const userResponse = await getCurrentUser(refreshResponse.access_token);
    if (userResponse.error) {
      return rejectWithValue(userResponse.data);
    }
    const response = {
      ...refreshResponse,
      ...userResponse,
    };
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

const sessionSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessages = [];
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      state.expiresIn = action.payload.expires_in;
      state.tokenType = action.payload.token_type;
      state.currentUser = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        createdAt: action.payload.created_at,
      };
      storeRefreshToken(action.payload.refreshToken);

      state.isLoading = false;
      state.error = false;
      state.errorMessages = [];
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      console.log(action.payload.errors);
      state.isLoading = false;
      state.error = action.payload;
      state.errorMessages = action.payload.errors;
    });
    builder.addCase(refreshAccessToken.pending, (state) => {
      state.isLoading = true;
      state.errorMessages = [];
    });
    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      state.expiresIn = action.payload.expires_in;
      state.currentUser = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        createdAt: action.payload.created_at,
      };
      storeRefreshToken(action.payload.refreshToken);

      state.isLoading = false;
      state.error = false;
      state.errorMessages = [];
    });
    builder.addCase(refreshAccessToken.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default sessionSlice.reducer;

// const removeRefresh = () => {
//   localStorage.removeItem('refreshToken');
// };
