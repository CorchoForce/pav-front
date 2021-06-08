import { MenuItem } from "..";
import { isLoggedIn, logout } from '../../utils/api'
import styles from "./MenuItems.module.css";

const MenuItems = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem link="/" text="Home" />
      <MenuItem link="/about" text="Sobre" />
      {isLoggedIn() ? <MenuItem link="/my_offers" text="Minhas Ofertas" /> : <MenuItem link="/sign_in" text="Login" /> }
      {isLoggedIn() ? <MenuItem onClickFunction={logout} text="Sair" /> : <MenuItem link="/sign_up" text="Cadastre-se" /> }
    </ul>
  );
};

export default MenuItems;
