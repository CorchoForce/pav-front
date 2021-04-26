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
        <a className={styles.email} href="mailto:webmaster@example.com">{" corchoforce@gmail.com"}</a>
      </p>
    </footer>
  );
}

export default Footer;
