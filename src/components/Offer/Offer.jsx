import styles from './Offer.module.css'
import { getHumanDate } from '../../utils/date'
import { Detail } from '..'

const Offer = ({ props }) => {
  const startDate = getHumanDate(new Date(props.beginningDate))
  const deadline = getHumanDate(new Date(props.deadline))

  const selectedInfo = [
    {
      value: "Descrição da vaga: ",
      text: props.description
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
    },
    {
      value: "Ofertador da vaga: ",
      text: props.user.description
    },
    {
      value: "Localização: ",
      text: props.localization
    },
    {
      value: "Data de início: ",
      text: startDate
    },
    {
      value: "Data limite de aplicação: ",
      text: deadline
    }
  ]

  return (
    <div className={styles.offerContainer}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.offerInfo}>
        {selectedInfo.map(({value, text, ...rest}) => (
          <Detail value={value} text={text} />
        ))}
        <p>
          <b>{"Email de contato: "}</b>
          <a href={"mailto:" + props.user.email} className={styles.email}>
            {props.user.email}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Offer