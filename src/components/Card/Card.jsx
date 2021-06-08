import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { Detail } from '..'
import {
  BrowserView,
  MobileView
} from "react-device-detect";

const Card = ({ data, children }) => {
  const colors = {
    "estagio": "#CC66CC",
    "bolsa_ic": "#72f542",
    "extensao": "#FFFF44",
    "other": "#FFFFFF"
  }

  const backgroundColor = colors[data.type] || colors["other"]
  const descriptionInfo = [
    {
      value: "Descrição: ",
      text: data.description.length > 120 ? data.description.slice(0, 120) + '...' : data.description
    }
  ]
  const selectedInfo = [
    {
      value: "Requisitos: ",
      text: data.requirements.length > 100 ? data.requirements.slice(0, 100) + '...' : data.requirements
    },
    {
      value: "Remuneração: ",
      text: data.pay.length > 30 ? data.pay.slice(0, 30) + '...' : data.pay
    },
    {
      value: "Carga horária: ",
      text: data.neededHours
    }
  ]


  return (
    <Link to={'/offer/' + data._id} className={styles.link}>
      <BrowserView>
        <div className={styles.card}>
          <div className={styles.overheader}>
            <span style={{ backgroundColor: backgroundColor }} className={styles.type}>{data.type}</span>
            {children}
          </div>
        
          <div className={styles.cardContent}>
          <h2 className={styles.title}>{data.title}</h2>
          {descriptionInfo.map(({value, text, ...rest}) => (
            <Detail value={value} text={text} />
          ))}
          </div>
          <div className={styles.extraContent}>
          {selectedInfo.map(({value, text, ...rest}) => (
            <Detail value={value} text={text} />
          ))}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className={styles.cardMobile}>
          <div className={styles.overheader}>
            <span style={{ backgroundColor: backgroundColor }} className={styles.type}>{data.type}</span>
            {children}
          </div>
        
          <div className={styles.cardContentMobile}>
          <h2 className={styles.title}>{data.title}</h2>
          {descriptionInfo.map(({value, text, ...rest}) => (
            <Detail value={value} text={text} />
          ))}
          </div>
          <div className={styles.extraContentMobile}>
          {selectedInfo.map(({value, text, ...rest}) => (
            <Detail value={value} text={text} />
          ))}
          </div>
        </div>
      </MobileView>
    </Link>
  )  
}

export default Card