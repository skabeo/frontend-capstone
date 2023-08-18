import axios from 'axios';
import instance from './axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1';
const LOGIN_URL = `${BASE_URL}/oauth/token`;
const SIGNUP_URL = `${BASE_URL}/users`;
// const LOGOUT_URL = `${BASE_URL}/oauth/revoke`;
const CURRENT_USER_URL = `${BASE_URL}/users/me`;

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const createUserWithEmailAndPassword = async ({ name, email, password }) => {
  const data = {
    name,
    email,
    password,
    client_id: CLIENT_ID,
  };
  try {
    const response = await axios.post(SIGNUP_URL, data, instance);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const requestAccessTokenWithRefreshToken = async (refreshToken) => {
  const data = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };
  try {
    const response = await axios.post(LOGIN_URL, data, instance);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCurrentUser = async (accessToken) => {
  try {
    const response = await axios.get(CURRENT_USER_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
