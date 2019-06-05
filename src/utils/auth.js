const tokenKey = 'token';

const setUserToken = token => window.localStorage.setItem(tokenKey, token);
const getUserToken = () => window.localStorage.getItem(tokenKey);
const removeUserToken = () => window.localStorage.removeItem(tokenKey);

export default {
  setUserToken,
  getUserToken,
  removeUserToken
};
