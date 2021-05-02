import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
} from "@material-ui/core";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Container style={{ display: "flex" }}>
            <Typography style={{ flexGrow: 1 }} variant="h6">
              Meebook Homework Checker
            </Typography>
            <Button color="inherit">Login</Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
