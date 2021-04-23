import { MenuItem } from "..";
import style from "./MenuItems.module.css";

const MenuItems = () => {
  return (
    <ul className={style.menu}>
      <MenuItem link="/" text="Home" />
      <MenuItem link="/about" text="Sobre" />
      <MenuItem link="/register" text="Cadastre-se" />
      <MenuItem link="/login" text="Entrar" />
    </ul>
  );
};

export default MenuItems;
