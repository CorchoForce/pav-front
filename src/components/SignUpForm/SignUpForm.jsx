import styles from './SignUpForm.module.css'
import { RequestConfirmationButton } from '..'
import { useState } from 'react'
import { cpfMask } from '../../utils/mask'
import { register, isLoggedIn } from '../../utils/api'
import { Loading } from '..'
import { Redirect } from 'react-router-dom'


const SignUpForm = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [buttonSendMail, setButtonSendMail] = useState(false)
  const loggedIn = isLoggedIn()
  const [errorMessage, setErrorMessage] = useState(undefined)

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    register(user).then(() => {
      setErrorMessage("Confirme seu email! Lembre-se de checar a caixa de spam.")
      setLoading(false)
    }).catch((error) => {
      if (error.response?.status in [422, 403]) {
        setErrorMessage(error.response.data.message);
      } else if (error.response?.status === 418) {
        setErrorMessage(error.response.data.message);
        setButtonSendMail(true)
      } else {
        setErrorMessage("Ocorreu um erro inesperado. :(");
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
        <input className={styles.formInput} type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Nome" required />
        <input className={styles.formInput} type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email" required />
        <input className={styles.formInput} type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Senha" required />
        <input className={styles.formInput} maxLength='14' value={user.CPF} type="text" onChange={(e) => setUser({...user, CPF: cpfMask(e.target.value)} )} placeholder="CPF" required />
        <button className={styles.formButton} type="submit">
          Registrar!
        </button>
      </form>
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : undefined }
      {buttonSendMail ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <RequestConfirmationButton email={user.email} password={user.password} />
      </div> : undefined}
    </div>

  )
}

export default SignUpForm