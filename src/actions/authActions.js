import { saveAuthToken } from '../local-storage';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import jwtDecode from 'jwt-decode';


export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken) => ({
  type: SET_AUTH_TOKEN,
  authToken,
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH,
})

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST,
})

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (currentUser) => ({
  type: AUTH_SUCCESS,
  currentUser,
})

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = (error) => ({
  type: AUTH_ERROR,
  error,
})

export const SET_DIALOG = 'SET_DIALOG';
export const setDialog = (dialog) => ({
  type: SET_DIALOG,
  dialog,
})

export const SET_USER = 'SET_USER';
export const setUser = (user) => ({
  type: SET_USER,
  user
})

const storeAuthToken = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodeAndRemovePasswordFromJWT(authToken)));
  saveAuthToken(authToken);
}

export const login = (username, password) => dispatch => {
  dispatch(authRequest);
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthToken(authToken, dispatch))
    .catch(err => {
      const { code } = err;
      const message =
        code === 401
          ? 'Incorrect username or password'
          : 'Unable to login, please try again';
      dispatch(authError(err));
      return Promise.reject(
        new SubmissionError({
          error: message,
        })
      );
    })
  );
};

export const setUserWithToken = (authToken) => dispatch => {
  dispatch(setUser(decodeAndRemovePasswordFromJWT(authToken)));
}

const decodeAndRemovePasswordFromJWT = (token) => {
  const decoded = jwtDecode(token);
  const { name, _id, username, tomats } = decoded.user;
  return {_id, name, username, tomats };
}

