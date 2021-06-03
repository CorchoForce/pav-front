import style from "./Navbar.module.css";
import logo from "../../images/navbar_logo.png";
import {
  Link
} from "react-router-dom";

import { MenuItems } from "..";
import React from "react";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/">
        <img src={logo} alt="Web page logo" className={style.navbarLogo} /> 
      </Link>
      <MenuItems />
    </nav>
  );
};

export default Navbar;
