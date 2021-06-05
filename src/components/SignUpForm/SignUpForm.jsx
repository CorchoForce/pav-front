import styles from './SignUpForm.module.css'
import { useState } from 'react'
import { cpfMask } from '../../utils/mask'
import { register, isLoggedIn } from '../../utils/api'
import { Loading } from '..'
import { Redirect } from 'react-router-dom'


const SignUpForm = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())
  const [errorMessage, setErrorMessage] = useState(undefined)

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    register(user).then((response) => {
      JSON.stringify(response.data.user)
      localStorage.setItem('@pav/userToken', JSON.stringify(response.data.token))
      setErrorMessage(undefined)
      setLoggedIn(true)
    }).catch((error) => {
      if (error.response?.status === 422) {
        setErrorMessage(error.response.data.message)
      } else {
        setErrorMessage("Ocorreu um erro inesperado. :(")
      }
      setLoading(false)
    })
  }

  if (loggedIn) {
    if (loading) {
      setLoading(false)
      window.location.reload()
    } else {
      return <Redirect to='/'/>
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.formInput} type="text" onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Nome" required />
        <input className={styles.formInput} type="email" onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email" required />
        <input className={styles.formInput} type="password" onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Senha" required />
        <input className={styles.formInput} maxLength='14' type="text" onChange={(e) => setUser({...user, CPF: cpfMask(e.target.value)} )} placeholder="CPF" required />
        <button className={styles.formButton} type="submit">
          Registrar!
        </button>
      </form>
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : undefined }
    </div>

  )
}

export default SignUpForm