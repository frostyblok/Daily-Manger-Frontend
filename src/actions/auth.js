import axios from '../utils/axiosInstance';
import authUtils from '../utils/auth';
import jwtDecode from 'jwt-decode';
import { LOGIN_USER, AUTH_ERROR } from './types';

const loginUserAction = payload => ({type: LOGIN_USER, payload});
const authError = message => ({ type: AUTH_ERROR, message });

export const loginUser = user => async (dispatch) => {
  try {
    const { data } = await axios.post('/auth/login', {...user});
    authUtils.setUserToken(data.auth_token);
    const userDetails = jwtDecode(data.auth_token);
    dispatch(loginUserAction(userDetails));
  } catch ({message}) {
    dispatch(authError(message));
  }
};
