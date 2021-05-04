import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavbarTitle = () => {
  return (
    <Typography style={{ flexGrow: 1 }} variant="h6">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        Meebook Homework Checker
      </Link>
    </Typography>
  );
};

export default NavbarTitle;
