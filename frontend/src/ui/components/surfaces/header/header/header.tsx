import React from "react";
import { HeaderAppBar, HeaderLogo } from "./header.style";
import { Toolbar, Container } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"e-profs"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
