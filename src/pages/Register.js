import React from 'react'
import logo from "../images/navbar_logo.png";
import { RegisterOfferForm } from '../components'
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from '../utils/api'
import styles from '../styles/SignIn.module.css'

const Register = () => {
  if (!isLoggedIn()) {
    return (
      <Redirect to='/sign_in'/>
    )
  }
  
  return (
    <div className={styles.signInContainer}>
      <img src={logo} alt="PAV Main Logo" className={styles.logo}/>
      <RegisterOfferForm />
    </div>
  )
}

export default Register
