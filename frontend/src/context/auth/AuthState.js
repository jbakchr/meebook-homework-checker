import React, { useReducer } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import { LOGIN_SUCCESS } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (email, password) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: "very_secret_token",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
