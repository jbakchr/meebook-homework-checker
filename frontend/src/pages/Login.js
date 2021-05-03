import React, { useState, useContext, useEffect } from "react";
import { Button, Container, TextField } from "@material-ui/core";

import AuthContext from "../context/auth/AuthContext";

const Login = (props) => {
  const [parent, setParent] = useState({ email: "", password: "" });
  const { token, login } = useContext(AuthContext);

  const { email, password } = parent;

  useEffect(() => {
    if (token) {
      props.history.push("/");
    }
  }, [token, props.history]);

  const onChange = (e) => {
    setParent({ ...parent, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (token) {
    return null;
  }

  return (
    <Container style={{ maxWidth: "500px" }}>
      <h1 style={{ textAlign: "center" }}>LOGIN</h1>
      <form onSubmit={onSubmit}>
        <TextField
          style={{ marginBottom: "20px" }}
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          fullWidth
          onChange={onChange}
          value={email}
        />
        <TextField
          style={{ marginBottom: "20px" }}
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          fullWidth
          onChange={onChange}
          value={password}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={
            parent.email === "" || parent.password === "" ? true : false
          }
        >
          Log in
        </Button>
      </form>
    </Container>
  );
};

export default Login;
