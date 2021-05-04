import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";

const NavbarAuthButton = () => {
  const { token } = useContext(AuthContext);

  return token ? (
    <Button color="inherit">Log out</Button>
  ) : (
    <Button color="inherit">
      <Link style={{ textDecoration: "none", color: "white" }} to="/login">
        Login
      </Link>
    </Button>
  );
};

export default NavbarAuthButton;
