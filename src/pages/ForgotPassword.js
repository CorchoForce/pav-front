import React from 'react'
import styles from '../styles/SignIn.module.css'
import { ForgotPasswordForm } from '../components'
import logo from "../images/navbar_logo.png";

const ForgotPassword = () => {
  return (
    <div className={styles.signInContainer} >
      <img src={logo} alt="PAV Main Logo" className={styles.logo} />
      <ForgotPasswordForm />
    </div>
  )
}

export default ForgotPassword
