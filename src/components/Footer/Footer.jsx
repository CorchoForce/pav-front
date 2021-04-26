import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>
        @ 2021 CorchoForce Ltda
      </p>
      <p>
        Created and Developed by CorchoForce
      </p>
      <p>
        Quer ofertar uma vaga ? Entre em contato em 
        <span className={styles.email}>{" corchoforce@gmail.com"}</span>
      </p>
    </footer>
  );
}

export default Footer;
