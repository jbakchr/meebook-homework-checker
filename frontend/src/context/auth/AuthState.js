import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { LOGIN_SUCCESS } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/api/auth/login", { email, password });

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.token,
      });
    } catch (error) {
      console.log(error);
    }
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
