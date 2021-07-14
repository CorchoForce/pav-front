import styles from "./ForgotPasswordForm.module.css";
import { useState } from "react";
import { sendRecoverEmail } from "../../utils/api";
import { Loading } from "..";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    sendRecoverEmail(email)
      .then(() => {
        setLoading(false);
        setErrorMessage(
          "Email enviado! Lembre-se de checar sua caixa de spam."
        );
      })
      .catch((error) => {
        if (error.response?.status === 422) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Ocorreu um erro inesperado. :(");
        }
        setLoading(false);
      });
  };

  const inputHandler = (event, setter) => {
    setter(event.target.value);
  };

  if (loading) return <Loading height={100} width={100} />;

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="mail"
          onChange={(e) => inputHandler(e, setEmail)}
          placeholder="Email"
          required
        />
        <button className={styles.formButton} type="submit">
          Recuperar!
        </button>
      </form>
      {errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : undefined}
    </div>
  );
};

export default ForgotPasswordForm;
