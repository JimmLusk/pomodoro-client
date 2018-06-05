import { saveAuthToken, clearAuthToken } from '../local-storage';
import {API_BASE_URL} from '../config';
import jwtDecode from 'jwt-decode';


export const ADD_TOMAT = 'ADD_TOMAT';
export const addTomat = (tomat) => ({
  type: ADD_TOMAT,
  tomat,
});

export const SEND_TOMAT_REQUEST = 'SEND_TOMAT_REQUEST';
export const sendTomatRequest = () => ({
  type: SEND_TOMAT_REQUEST,
})

export const SEND_TOMAT_SUCCESS = 'SEND_TOMAT_SUCCESS';
export const sendTomatSuccess = (currentUser) => ({
  type: SEND_TOMAT_SUCCESS,
  currentUser,
})

export const SEND_TOMAT_ERROR = 'SEND_TOMAT_ERROR';
export const sendTomatError = (error) => ({
  type: SEND_TOMAT_ERROR,
  error,
})

export const sendTomat = (tomat, authToken, userId) => dispatch => {
  dispatch(sendTomatRequest());
  dispatch(addTomat(tomat));
  fetch(`${API_BASE_URL}/users/tomat/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({tomat: tomat})
  })
  .then(() => {
    dispatch(sendTomatSuccess());
    const { username, password } = jwtDecode(authToken);
    return fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
  })
  .then(res => res.json())
  .then( data  => {
    console.log(data);
    clearAuthToken();
    saveAuthToken(data.authToken);
  })
  .catch(err => {
    dispatch(sendTomatError(err));
    console.log(err);
  })
}