import { MenuItem } from '..'
import style from './MenuItems.module.css'

const MenuItems = () => {
  return (
    <ul className={style.menu}>
      <MenuItem link='/' text='Home' />
      <MenuItem link='/about' text='Sobre' />
      <MenuItem link='/search' text='Buscar' />
      <MenuItem link='/user' text='Login' />
    </ul>
  );
}

export default MenuItems