import axios from '../utils/axiosInstance';
import authUtils from '../utils/auth';
import jwtDecode from 'jwt-decode';
import { LOGIN_USER, AUTH_ERROR, SIGNUP_USER, LOADING } from './types';

const loginUserAction = payload => ({type: LOGIN_USER, payload});
const signupUserAction = payload => ({ type: SIGNUP_USER, payload });
const authError = message => ({ type: AUTH_ERROR, message });
const loaderAction = status => ({ type: LOADING, status });

export const loginUser = user => async (dispatch) => {
  dispatch(loaderAction(true));
  try {
    const { data } = await axios.post('/auth/login', {...user});
    authUtils.setUserToken(data.auth_token);
    const userDetails = jwtDecode(data.auth_token);
    dispatch(loginUserAction(userDetails));
    dispatch(loaderAction(false));
  } catch ({message}) {
    dispatch(authError(message));
    dispatch(loaderAction(false));
  }
};

export const signupUser = user => async (dispatch) => {
  dispatch(loaderAction(true));
  try {
    const { data } = await axios.post('/signup', {...user});
    authUtils.setUserToken(data.auth_token);
    const userDetails = jwtDecode(data.auth_token);
    dispatch(signupUserAction(userDetails));
    dispatch(loaderAction(false));
  } catch ({message}) {
    dispatch(authError(message));
    dispatch(loaderAction(false));
  }
};
