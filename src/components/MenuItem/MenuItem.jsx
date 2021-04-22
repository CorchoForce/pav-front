import { Link } from 'react-router-dom'

const MenuItem = ({link, text}) => {
  return (
    <li>
      <Link to={link}>
        <a href='/#'>{text}</a>
      </Link>
    </li>
  );
}

export default MenuItem