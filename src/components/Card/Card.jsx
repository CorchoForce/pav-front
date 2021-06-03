import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { Detail } from '..'

const Card = ({ data, children }) => {
  const colors = {
    "estagio": "#CC66CC",
    "bolsa_ic": "#72f542",
    "extensao": "#FFFF44",
    "other": "#FFFFFF"
  }

  const backgroundColor = colors[data.type] || colors["other"]
  const selectedInfo = [
    {
      value: "Descrição: ",
      text: data.description.length > 150 ? data.description.slice(0, 150) + '...' : data.description
    },
    {
      value: "Requisitos: ",
      text: data.requirements
    },
    {
      value: "Remuneração: ",
      text: data.pay
    },
    {
      value: "Carga horária: ",
      text: data.neededHours
    }
  ]

  return (
    <Link to={'/offer/' + data._id} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.overheader}>
          <span style={{ backgroundColor: backgroundColor }} className={styles.type}>{data.type}</span>
          {children}
        </div>
        <h2 className={styles.title}>{data.title}</h2>
        {selectedInfo.map(({value, text, ...rest}) => (
          <Detail value={value} text={text} />
        ))}

      </div>
    </Link>
  )  
}

export default Card