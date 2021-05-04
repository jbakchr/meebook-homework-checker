import React from "react";

import NavbarLayout from "./NavbarLayout";
import NavbarTitle from "./NavbarTitle";
import NavbarAuthButton from "./NavbarAuthButton";

const Navbar = () => {
  return (
    <NavbarLayout>
      <NavbarTitle />
      <NavbarAuthButton />
    </NavbarLayout>
  );
};

export default Navbar;
