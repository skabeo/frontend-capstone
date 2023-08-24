import axios from './axios';

const LOGIN_URL = '/oauth/token';
const SIGNUP_URL = '/users';
const LOGOUT_URL = '/oauth/revoke';
const CURRENT_USER_URL = '/users/me';

// const CLIENT_ID = 'S-XnK_MTFiNwmeRtWpYK_tMdpvcKBFcCSGYkKQtmQ3U';
// const CLIENT_SECRET = '_bxspS8lAaMrGYANEA3qThk-PL2iuGvkTmsdBV_dkQM';
const CLIENT_ID = 'Px7wX0KGXjVdW3I33wWWbvC-g-nM_YgMB7fkY2jyVSQ';
const CLIENT_SECRET = 'mfinIE__6L5ZmRKdhm1wu2gUqA5wq-TFLHuyr0FZiW0';
// const CLIENT_ID = 'l-V5cgU4-1_izHlPa2OpEN3c6zmABb73IkfrQQ9UI0U';
// const CLIENT_SECRET = 'Obu_dGj8piC2VcWe0WYhMd10AGaLXznoQTAnLsRHyZk';

export const createUserWithEmailAndPassword = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
    client_id: CLIENT_ID,
  };

  try {
    const response = await axios.post(SIGNUP_URL, data);
    return response.data;
  } catch (error) {
    return new Error('An error occurred');
  }
};

export const loginWithEmailAndPassword = async (email, password) => {
  const data = {
    grant_type: 'password',
    email,
    password,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  try {
    const response = await axios.post(LOGIN_URL, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logoutUserWithToken = async (token) => {
  const data = {
    token,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  try {
    const response = await axios.post(LOGOUT_URL, data);
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
    const response = await axios.post(LOGIN_URL, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export async function getCurrentUser(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.get(CURRENT_USER_URL, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
