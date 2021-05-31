import { MenuItem } from "..";
import styles from "./MenuItems.module.css";

const MenuItems = () => {
  const loggedIn = false

  return (
    <ul className={styles.menu}>
      <MenuItem link="/" text="Home" />
      <MenuItem link="/about" text="Sobre" />
      {loggedIn ? <MenuItem link="/profile" text="Meu Perfil" /> : <MenuItem link="/sign_in" text="Login" /> }
    </ul>
  );
};

export default MenuItems;
