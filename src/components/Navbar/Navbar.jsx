import style from './Navbar.module.css'
import logo from '../../images/navbar_logo.png'
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Web page logo" className={style.logo} width='100' height='100'/>
    </nav>
  );
}

export default Navbar
