import style from './Navbar.module.css'
import logo from '../../images/navbar_logo.png'
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Web page logo" className={style.logo} width='300' height='300'/>
    </nav>
  );
}

export default Navbar
