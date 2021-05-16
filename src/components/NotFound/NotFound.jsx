import logo from '../../images/404_logo.png';
import React from 'react'
import styles from "./NotFound.module.css";

const NotFound = ({text}) => {
  return (
    <div className={styles.app}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p className={styles.whiteText}> {text} </p>
    </div>
  )
}

export default NotFound
