import style from './Navbar.module.css'
import logo from '../../images/navbar_logo.png'

import {MenuItems} from '..'

const Navbar = () => {
  return (
    <nav className={style.navbarContainer}>
      <div className={style.contentContainer}>
        <img src={logo} alt="Web page logo" className={style.logo}/>
      <MenuItems/>
      </div>
    </nav>
  );
}

export default Navbar
