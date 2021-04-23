import style from "./Navbar.module.css";
import logo from "../../images/navbar_logo.svg";

import { MenuItems } from "..";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <img src={logo} alt="Web page logo" className={style.navbarLogo} />
      <div className={style.contentContainer}>
        <MenuItems />
      </div>
    </nav>
  );
};

export default Navbar;
