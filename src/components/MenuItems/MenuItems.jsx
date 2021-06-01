import { MenuItem } from "..";
import { isLoggedIn } from '../../utils/api'
import styles from "./MenuItems.module.css";

const MenuItems = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem link="/" text="Home" />
      <MenuItem link="/about" text="Sobre" />
      {isLoggedIn() ? undefined : <MenuItem link="/sign_in" text="Login" /> }
    </ul>
  );
};

export default MenuItems;
