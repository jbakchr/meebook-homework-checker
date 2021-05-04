import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
} from "@material-ui/core";

import AuthContext from "../context/auth/AuthContext";

const Navbar = () => {
  const { token } = useContext(AuthContext);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Container style={{ display: "flex" }}>
            <Typography style={{ flexGrow: 1 }} variant="h6">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Meebook Homework Checker
              </Link>
            </Typography>
            {token ? (
              <Button color="inherit">Log out</Button>
            ) : (
              <Button color="inherit">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Login
                </Link>
              </Button>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
