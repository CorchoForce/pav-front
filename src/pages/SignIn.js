import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/SignIn.module.css'
import { SignInForm } from '../components'
import logo from "../images/navbar_logo.png";

const SignIn = () => {
  return (
    <div className={styles.signInContainer} >
      <img src={logo} alt="PAV Main Logo" className={styles.logo} />
      <SignInForm />
      <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
        Esqueceu sua senha?
        <Link to="/forgot_password" style={{
          textDecoration: "none",
          color: "#4294c7",
          fontStyle: "italic"
        }}> Recupere-a agora! </Link>
      </p>
      <p style={{ fontWeight: "bold" }}>
        Não possui conta?
        <Link to="/sign_up" style={{
          textDecoration: "none",
          color: "#4294c7",
          fontStyle: "italic"
        }}> Cadastre-se agora! </Link>
      </p>
    </div >
  )
}

export default SignIn
