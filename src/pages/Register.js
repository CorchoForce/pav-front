import React from 'react'
import logo from "../images/navbar_logo.png";
import { RegisterOfferForm } from '../components'
import styles from '../styles/SignIn.module.css'

const Register = () => {
    return (
        <div className={styles.signInContainer}>
            <img src={logo} alt="PAV Main Logo" className={styles.logo}/>
            <RegisterOfferForm />
            <p style={{ fontWeight: "bold" }}>
                Cadastre sua empresa
            </p>
        </div>
    )
}

export default Register
