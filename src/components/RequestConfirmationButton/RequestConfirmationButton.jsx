import { sendEmail } from '../../utils/api'
import styles from './RequestConfirmationButton.module.css'
import { useState } from 'react'
import { Loading } from '..'

const RequestConfirmationButton = ({ email, password }) => {
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState("Requisitar email de confirmação")
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setDisabled(true)
    sendEmail(email, password).then(() => {
      setText("Email Enviado!")
      setLoading(false)
    }).catch(() => {
      setText("Ocorre um erro - Requisite novamente.")
      setDisabled(false)
      setLoading(false)
    })
  }

  if (loading) return (<Loading height={50} width={50} />)

  return (
    <button className={styles.requestButton} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default RequestConfirmationButton
