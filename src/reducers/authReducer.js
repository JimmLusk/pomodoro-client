import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_DIALOG,
  SET_USER,
} from '../actions/authActions';


const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null,
  dialog: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case SET_AUTH_TOKEN:
      return Object.assign({}, state, {
        authToken: action.authToken,
      });
    case CLEAR_AUTH:
      return Object.assign({}, state, {
        authToken: null,
        currentUser: null,
      });
    case AUTH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        currentUser: action.currentUser,
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case SET_DIALOG:
      return Object.assign({}, state, {
        dialog: action.dialog,
      });
    case SET_USER:
      return Object.assign({}, state, {
        currentUser: action.user,
      })
    default: 
      return state;
  }
}