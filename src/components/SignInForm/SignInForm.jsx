import styles from './SignInForm.module.css'
import { useState } from 'react'

const SignInForm = () => {
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const handleSubmit = (event) => {
    console.log("fazer login com senha = " + password + " e email = " + email)
    event.preventDefault()
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.formInput} type="mail" onChange={handleEmail} placeholder="Email" required />
      <input className={styles.formInput} type="password" onChange={handlePassword} placeholder="Senha" required />
      <button className={styles.formButton} type="submit">
        Entrar!
      </button>
    </form>
  )
}

export default SignInForm