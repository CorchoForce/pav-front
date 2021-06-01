import React from 'react'
import logo from "../images/navbar_logo.png";
import { RegisterOfferForm } from '../components'

const Register = () => {
    return (
        <div>
            <img src={logo} alt="PAV Main Logo" />
            <RegisterOfferForm />
            <p style={{ fontWeight: "bold" }}>
                Cadastre sua empresa
            </p>
        </div>
    )
}

export default Register
