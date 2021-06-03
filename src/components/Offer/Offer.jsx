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
      text: props.pay
    },
    {
      value: "Carga horária: ",
      text: props.neededHours
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
        {selectedInfo.map(({ value, text, ...rest }) => (
          <Detail value={value} text={text} />
        ))}
        <p>
          <b>{"Email de contato: "}</b>
          <a href={"mailto:" + props.contactEmail} className={styles.email}>
            {props.contactEmail}
          </a>
        </p>
        <p>
          <b>{"Website: "}</b>
          <a href={"http://" + props.site} className={styles.email}>
            {props.site}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Offer
