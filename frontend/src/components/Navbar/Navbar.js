import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";

import NavbarAuthButton from "./NavbarAuthButton";
import NavbarTitle from "./NavbarTitle";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Container style={{ display: "flex" }}>
            <NavbarTitle />
            <NavbarAuthButton />
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
