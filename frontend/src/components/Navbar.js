import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";

import NavbarAuthButton from "./NavbarAuthButton";

const Navbar = () => {
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
            <NavbarAuthButton />
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
