import { Link } from 'react-router-dom'
import style from './MenuItem.module.css'

const MenuItem = ({link, text}) => {
  return (
    <li className={style.item}>
      <Link to={link}>
        <span className={style.text}>{text}</span>
      </Link>
    </li>
  );
}

export default MenuItem