import { MenuItem } from "..";
import { isLoggedIn, logout } from '../../utils/api'
import styles from "./MenuItems.module.css";

const MenuItems = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem link="/" text="Home" />
      <MenuItem link="/about" text="Sobre" />
      {isLoggedIn() ? <MenuItem link="/my_offers" text="Minhas Ofertas" /> : <MenuItem link="/sign_in" text="Login" /> }
      {isLoggedIn() ? <MenuItem onClickFunction={logout} text="Sair" /> : undefined }
    </ul>
  );
};

export default MenuItems;
