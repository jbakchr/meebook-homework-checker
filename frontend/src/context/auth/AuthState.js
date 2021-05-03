import React, { useReducer } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ token: state.token }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
