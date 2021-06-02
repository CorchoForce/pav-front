import styles from "./RegisterOfferForm.module.css";
import { useState } from "react";

const RegisterOfferForm = () => {

  const [email, setEmail] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [tags, setTags] = useState(undefined);
  const [requirements, setRequirements] = useState(undefined);
  const [websiteUrl, setWebsiteUrl] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [limitDate, setLimitDate] = useState(undefined);
  const [salary, setSalary] = useState(undefined);
  const [startDate, setStartDate] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [neededHours, setNeededHours] = useState(undefined);


    const inputHandler = (event, setter) => {
      setter(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      "Cadastrar uma oferta com: Título= " + title + "\nEmail= " + email +
      "\nTipo= " + type + "\nTags= " + tags + "\nRequisitos= " + requirements +
      "\nWebsiteUrl= " + websiteUrl + "\nDescrição= " + description +
      "\nDataLimite= " + limitDate + "\nSalário= " + salary +
      "\nDataInicio= " + startDate + "\nLocalização= " + location +
      "\nHorasNecessarias= " + neededHours
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setTitle)} placeholder="Título" required />
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setType)} placeholder="Tipo" required />
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setRequirements)} placeholder="Requisitos" />
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setWebsiteUrl)} placeholder="Site" />
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setTags)} placeholder="Tags" required />
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setDescription)} placeholder="Descrição" required />
      <div className = {styles.dateWrapper}>
        <label>Data limite para aplicação</label>
        <input className={styles.formInput} onChange={(e) => inputHandler(e, setLimitDate)} type="date" required />
      </div>
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setSalary)} placeholder="Salário"required />
      <div className = {styles.dateWrapper}>
        <label>Data de Ingresso</label>
        <input className={styles.formInput} onChange={(e) => inputHandler(e, setStartDate)} type="date" required />
      </div>
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setLocation)}placeholder="Localização" required />
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setNeededHours)} placeholder="Horas necessárias" required />
      <input className={styles.formInput} type="text" onChange={(e) => inputHandler(e, setEmail)} placeholder="Email para contato" required />
      <button className={styles.formButton} type="submit"> Enviar </button>
    </form>
  );
};

export default RegisterOfferForm;
