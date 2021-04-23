import { NavLink } from 'react-router-dom'
import style from './MenuItem.module.css'

const MenuItem = ({link, text}) => {
  return (
    <li className={style.item}>
      <NavLink to={link} className={style.link}>
        <span className={style.text}>{text}</span>
      </NavLink>
    </li>
  );
}

export default MenuItem