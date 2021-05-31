import styles from './SignUpForm.module.css'
import { useState } from 'react'
import { cpfMask } from '../../utils/mask'

const SignUpForm = () => {
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [cpf, setCpf] = useState(undefined)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("fazer cadastro com senha = " + password + " e email = " + email + " e nome = " + name + "e cpf = " + cpf)
  }

  const inputHandler = (event, setter) => {
    setter(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setName)} placeholder="Nome" required />
      <input className={styles.formInput} type="email" onChange={(e) => inputHandler(e, setEmail)} placeholder="Email" required />
      <input className={styles.formInput} type="password" onChange={(e) => inputHandler(e, setPassword)} placeholder="Senha" required />
      <input className={styles.formInput} maxLength='14' type="text" onChange={(e) => setCpf(cpfMask(e.target.value))} placeholder="CPF" required />
      <button className={styles.formButton} type="submit">
        Registrar!
      </button>
    </form>
  )
}

export default SignUpForm