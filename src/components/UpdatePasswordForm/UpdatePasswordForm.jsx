import styles from "./UpdatePasswordForm.module.css";
import { useState, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { recoverPassword } from "../../utils/api";
import { Loading } from "..";
import queryString from "query-string";

const UpdatePasswordForm = () => {
  const location = useLocation();
  const [password, setpassword] = useState(undefined);
  const [confirmationPassword, setConfirmationPassword] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [parsedSearch, setParsedSearch] = useState(queryString.parse(location.search));
  const [done, setDone] = useState(false); 
  const [sendAway, setSendAway] = useState(false)

  useEffect(() => {
    if (parsedSearch.verified) setDone(true);
    if (!parsedSearch.token) setSendAway(true);
  }, [parsedSearch]);

  if (sendAway) return <Redirect to='/' />
  if (done) return <Redirect to='/sign_in' />

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    recoverPassword(parsedSearch.token, password, confirmationPassword)
      .then(() => {
        setParsedSearch({ ...parsedSearch, verified: true } )
        setLoading(false);
      })
      .catch((error) => {
        if (error.response?.status === 422) {
          setErrorMessage(error.response.data.message);
        }
        else if (error.response?.status === 400){
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
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.formInput} type="password" onChange={(e) => inputHandler(e, setpassword)} placeholder="Senha" required />
        <input className={styles.formInput} type="password" onChange={(e) => inputHandler(e, setConfirmationPassword)} placeholder="Confirme sua senha" required />
        <button className={styles.formButton} type="submit"> Mudar senha! </button>
      </form>
      {errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : undefined}
    </div>
  );
};

export default UpdatePasswordForm;
