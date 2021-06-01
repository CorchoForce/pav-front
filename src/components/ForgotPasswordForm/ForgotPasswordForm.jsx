import styles from './ForgotPasswordForm.module.css'
import { useState } from 'react'

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState(undefined)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("requisitar trocar de senha pelo email" + email)
  }

  const inputHandler = (event, setter) => {
    setter(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.formInput} type="mail" onChange={(e) => inputHandler(e, setEmail)} placeholder="Email" required />
      <button className={styles.formButton} type="submit">
        Enviar
      </button>
    </form>
  )
}

export default ForgotPasswordForm