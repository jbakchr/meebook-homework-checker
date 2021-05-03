import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  CssBaseline,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";

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
      <CssBaseline />
      <Paper
        style={{
          marginTop: "10%",
          padding: "20px",
        }}
        elevation={3}
      >
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
            required
            autoComplete="email"
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
            required
            autoComplete="current-password"
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
      </Paper>
    </Container>
  );
};

export default Login;
