import { MenuItem } from '..'

const MenuItems = () => {
  return (
    <ul>
      <MenuItem link='/' text='Home' />
      <MenuItem link='/about' text='Sobre' />
      <MenuItem link='/search' text='Buscar' />
      <MenuItem link='/user' text='Login' />
    </ul>
  );
}

export default MenuItems