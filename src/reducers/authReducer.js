const initialState = {
  user: {},
  isAuthenticated: false,
  loader: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        type: action.type
      };
    case 'SIGNUP_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        type: action.type
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        user: action.payload,
        error: action.message,
        type: action.type
      };
    case 'LOADING':
      return {
        ...state,
        loader: action.status,
        type: action.type
      };
    default:
      return state;
  }
}

export default authReducer;
