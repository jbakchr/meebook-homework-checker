const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.paylod,
      };
    default:
      return state;
  }
};

export default AuthReducer;
