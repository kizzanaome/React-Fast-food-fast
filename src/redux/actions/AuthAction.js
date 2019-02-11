import { REGISTER_USER, AUTH_ERROR, LOGIN_ERROR, LOGIN } from './types';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://noma-fast-food-fast-db.herokuapp.com/api/v1'
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data)
);

export const registerAction = payload => ({
  type: REGISTER_USER,
  payload
});

export const AutherrorAction = payload => ({
  type: AUTH_ERROR,
  payload
});

export const loginAction = payload => ({
  type: LOGIN,
  payload
});

export const LoginErrorAction = payload => ({
  type: LOGIN_ERROR,
  payload
});

export const registerUser = signUp => async dispatch => {
  console.log(signUp);
  return await axiosInstance
    .post('/auth/signup', signUp)
    .then(response => {
      dispatch(registerAction(response.message));
    })

    .catch(error => {
      dispatch(AutherrorAction(error.message));
    });
};

export const handleLogin = loginData => async dispatch => {
  return await axiosInstance
    .post('/auth/login', loginData)
    .then(response => {
      localStorage.setItem('token', response.data.token);

      localStorage.setItem('username', loginData.username);
      dispatch(loginAction(response.data.message));
    })
    .catch(error => {
      dispatch(LoginErrorAction(error.message));
    });
};
