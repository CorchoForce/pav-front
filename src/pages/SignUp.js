import React from 'react'
import styles from '../styles/SignIn.module.css'
import { SignUpForm } from '../components'
import logo from "../images/navbar_logo.png";

const SignUp = () => {
  return (
    <div className={styles.signInContainer} >
      <img src={logo} alt="PAV Main Logo" className={styles.logo} />
      <SignUpForm />
    </div>
  )
}

export default SignUp
