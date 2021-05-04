import { LOGIN_SUCCESS, LOGOUT } from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
