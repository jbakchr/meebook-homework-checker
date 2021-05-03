import { LOGIN_SUCCESS } from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
