import React, { useState, useContext } from "react";
import { Button, Container, TextField } from "@material-ui/core";

import AuthContext from "../context/auth/AuthContext";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(user.email, user.password);
  };

  const { email, password } = user;

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
          disabled={user.email === "" || user.password === "" ? true : false}
        >
          Log in
        </Button>
      </form>
    </Container>
  );
};

export default Login;