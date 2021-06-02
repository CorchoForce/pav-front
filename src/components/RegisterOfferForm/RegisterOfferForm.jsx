import styles from "./RegisterOfferForm.module.css";

const RegisterOfferForm = () => {
  return (
    <form className={styles.form}>
      <input className={styles.formInput} type="text" placeholder="Título" required />
      <input className={styles.formInput} type="text" placeholder="Tipo" required />
      <input className={styles.formInput} type="text" placeholder="Requisitos" />
      <input className={styles.formInput} type="text" placeholder="Site" />
      <input className={styles.formInput} type="text" placeholder="Tags" required />
      <input className={styles.formInput} type="text" placeholder="Descrição" required />
      <div className = {styles.dateWrapper}>
        <label>Data limite para aplicação</label>
        <input className={styles.formInput} type="date" required />
      </div>
      <input className={styles.formInput} type="text" placeholder="Salário"required />
      <div className = {styles.dateWrapper}>
        <label>Data de Ingresso</label>
        <input className={styles.formInput} type="date" required />
      </div>
      <input className={styles.formInput} type="text" placeholder="Localização" required />
      <input className={styles.formInput} type="text" placeholder="Horas necessárias" required />
      <input className={styles.formInput} type="text" placeholder="Email para contato" required />
      <button className={styles.formButton} type="submit"> Enviar </button>
    </form>
  );
};

export default RegisterOfferForm;
