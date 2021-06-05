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
      <p style={{ fontWeight: "bold" }}>
        Não possui conta?
        <Link to="/sign_up" style={{
          textDecoration: "none",
          color: "#FFFFFF",
          fontStyle: "italic" }}> Cadastre-se agora! </Link>
      </p>
      {/* <Link to="/forgot_password" style={{
        color: "#FFF0F0",
        textDecoration: "none",
        fontStyle: "italic" }}>
          Esqueci minha senha...
      </Link> */}
    </div>
  )
}

export default SignIn
