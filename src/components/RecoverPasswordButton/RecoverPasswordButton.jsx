import { sendRecoverEmail } from '../../utils/api'
import styles from './RecoverPasswordButton.module.css'
import { useState } from 'react'
import { Loading } from '..'

const RecoverPasswordButton = ({ email }) => {
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("Requisitar recuperação de senha")
    const [disabled, setDisabled] = useState(false)

    const handleClick = () => {
        setLoading(true)
        setDisabled(true)
        sendRecoverEmail(email).then(() => {
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

export default RecoverPasswordButton
