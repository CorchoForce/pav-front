import React from 'react'
import styles from '../styles/SignIn.module.css'
import { UpdatePasswordForm } from '../components'
import logo from "../images/navbar_logo.png";

const UpdatePassword = () => {
    return (
        <div className={styles.signInContainer} >
            <img src={logo} alt="PAV Main Logo" className={styles.logo} />
            <UpdatePasswordForm />
        </div>
    )
}

export default UpdatePassword
