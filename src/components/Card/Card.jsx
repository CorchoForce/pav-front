import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { Detail } from '..'

const Card = ({ props }) => {
  const colors = {
    "Estágio": "#FF0000",
    "Bolsa IC": "#00FF00",
    "Extensão": "#0000FF",
    "other": "#FFFFFF"
  }
  const backgroundColor = colors[props.type] || colors["other"]
  const selectedInfo = [
    {
      value: "Descrição: ",
      text: props.description.length > 150 ? props.description.slice(0, 150) + '...' : props.description
    },
    {
      value: "Requisitos: ",
      text: props.requirements
    },
    {
      value: "Remuneração: ",
      text: "R$ " + props.pay + ",00/mês"
    },
    {
      value: "Carga horária: ",
      text: props.neededHours + 'h/dia'
    }
  ]

  return (
    <Link to={'/offer/' + props._id} className={styles.link}>
      <div className={styles.card}>
        <div style={{ backgroundColor: backgroundColor }} className={styles.type}>
          {props.type}
        </div>
        <h2 className={styles.title}>{props.title}</h2>
        {selectedInfo.map(({value, text, ...rest}) => (
          <Detail value={value} text={text} />
        ))}

      </div>
    </Link>
  )  
}

export default Card