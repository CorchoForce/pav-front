import styles from "./RegisterOfferForm.module.css";
import { useState } from "react";

const RegisterOfferForm = () => {

  const [offer, setOffer] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      "Oferta Cadastrada Com sucesso: \nTítulo= " + offer.title + "\nEmail= " + offer.email +
      "\nTipo= " + offer.type + "\nTags= " + offer.tags + "\nRequisitos= " + offer.requirements +
      "\nWebsiteUrl= " + offer.websiteUrl + "\nDescrição= " + offer.description +
      "\nDataLimite= " + offer.limitDate + "\nSalário= " + offer.salary +
      "\nDataInicio= " + offer.startDate + "\nLocalização= " + offer.location +
      "\nHorasNecessarias= " + offer.neededHours
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, title: e.target.value})} placeholder="Título" required />
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, type: e.target.value})} placeholder="Tipo" required />
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, requirements: e.target.value})} placeholder="Requisitos" />
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, websiteUrl: e.target.value})} placeholder="Site" />
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, tags: e.target.value})} placeholder="Tags" required />
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, description: e.target.value})} placeholder="Descrição" required />
      <div className = {styles.dateWrapper}>
        <label>Data limite para aplicação</label>
        <input className={styles.formInput} onChange={(e) => setOffer({...offer, limitDate: e.target.value})} type="date" required />
      </div>
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, salary: e.target.value})} placeholder="Salário"required />
      <div className = {styles.dateWrapper}>
        <label>Data de Ingresso</label>
        <input className={styles.formInput} onChange={(e) => setOffer({...offer, startDate: e.target.value})} type="date" required />
      </div>
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, location: e.target.value})}placeholder="Localização" required />
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, nededHours: e.target.value})} placeholder="Horas necessárias" required />
      <input className={styles.formInput} type="text" onChange={(e) => setOffer({...offer, email: e.target.value})} placeholder="Email para contato" required />
      <button className={styles.formButton} type="submit"> Enviar </button>
    </form>
  );
};

export default RegisterOfferForm;
