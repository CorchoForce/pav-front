import { sendEmail } from '../../utils/api'
import styles from './RequestConfirmationButton.module.css'

const RequestConfirmationButton = (email, password) => {
  return (
    <button className={styles.requestButton}
            onClick={() => sendEmail(email, password)}>
      Requisitar email de confirmação
    </button>
  )
}

export default RequestConfirmationButton
