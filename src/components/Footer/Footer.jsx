import styles from './Footer.module.css'
import Logo from '../../images/logo_white.png'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <img src={Logo} alt="White Footer Logo" className={styles.logo} />
      </div>
      <div className={styles.creditsContainer}>
        <p className={styles.text}>
          @ 2021 CorchoForce Ltda
        </p>
        <p className={styles.text}>
          Created and Developed by CorchoForce
        </p>
      </div>
    </footer>
  );
}

export default Footer
