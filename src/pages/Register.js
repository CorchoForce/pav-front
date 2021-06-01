import React from 'react'
import styles from '../styles/SignIn.module.css'
import logo from "../images/navbar_logo.png";

const Register = () => {
    return (
        <div>
            <img src={logo} alt="PAV Main Logo" className={styles.logo} />
            <p style={{ fontWeight: "bold" }}>
                Cadastre sua empresa
            </p>
        </div>
    )
}

export default Register
