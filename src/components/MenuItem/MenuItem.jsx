import { Link } from 'react-router-dom'

const MenuItem = ({link, text}) => {
  return (
    <li>
      <Link to={link}>
        {text}
      </Link>
    </li>
  );
}

export default MenuItem