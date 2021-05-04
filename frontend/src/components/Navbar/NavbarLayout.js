import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";

const NavbarLayout = (props) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Container style={{ display: "flex" }}>{props.children}</Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavbarLayout;
