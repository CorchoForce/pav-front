import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.info}>
        @ 2021 CorchoForce Ltda
      </p>
      <p className={styles.info}>
        Created and Developed by
        <a className={styles.reference} target='_blank' rel='noreferrer' href="https://github.com/CorchoForce/">{" CorchoForce"}</a>
      </p>
      <p className={styles.info}>
        Quer ofertar uma vaga ? Entre em contato em 
        <a className={styles.reference} target='_blank' rel='noreferrer' href="mailto:corchoforce@gmail.com">{" corchoforce@gmail.com"}</a>
      </p>
    </footer>
  );
}

export default Footer;
