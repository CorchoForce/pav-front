import styles from './PlusCard.module.css'
import { Link } from 'react-router-dom'
import plus from '../../images/plus.svg'

const PlusCard = () => {
  return (
    <Link to='/register_offer' className={styles.link}>
      <div className={styles.card}>
        <div className={styles.plus}>
          <img src={plus} alt="Plus sign" className={styles.plusImage}/>
        </div>
      </div>
    </Link>
  )  
}

export default PlusCard
