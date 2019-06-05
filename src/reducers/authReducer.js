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
    default:
      return state;
  }
}

export default authReducer;
