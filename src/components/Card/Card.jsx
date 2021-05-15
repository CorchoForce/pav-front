import styles from './Card.module.css'

const Card = ({ props }) => {
  // JAVASCRIPT 
  
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className ={styles.description}>
        <b>Descrição:</b>
        {props.description}
      </p>
      <p className ={styles.requirements}>Requisitos: {props.requirements} </p>
      <p> {props.beginningDate} </p>
      <a href=""> Ver Detalhes... </a>
    </div>
  )  
}

export default Card