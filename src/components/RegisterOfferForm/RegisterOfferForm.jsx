import styles from "./RegisterOfferForm.module.css";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { Loading } from '..'
import { getMyOffers, createOffer } from '../../utils/api'

const RegisterOfferForm = () => {
  const [offer, setOffer] = useState({ type: 'estagio' });
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [other, setOther] = useState(false);

  useEffect(() => {
    getMyOffers().then((response) => {
      setOffer(response.data[0] || { type: 'estagio' })
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (<Loading />)
  }

  if (submit) {
    return (<Redirect to='my_offers' />)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    createOffer(offer).then(() => {
      setLoading(false)
      setSubmit(true)
    }).catch((error) => {
      if (error.response?.status === 422) {
        setErrorMessage(error.response.data.message)
      } else {
        setErrorMessage("Ocorreu um erro inesperado. :(")
      }
      setLoading(false)
    }) 
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.formInput} type="text" onChange={
          (e) => setOffer({...offer, title: e.target.value})
          } placeholder="Título" required />
        <hr />
        <div className={styles.formWrapper}>
          <label>Tipo da oferta</label>
          <select className={styles.select} onChange={(e) => {
            if (e.target.value === 'other') {
              setOther(true)
              setOffer({...offer, type: 'outro'})
            } else {
              setOther(false)
              setOffer({...offer, type: e.target.value})
            }
          }} required>
            <option value="estagio">Estágio</option>
            <option value="bolsa_ic">Iniciação Científica</option>
            <option value="extensao">Extensão</option>
            <option value="other">Outro</option>
          </select>
          {other ? <input className={styles.formInput} type="text" onChange={
            (e) => setOffer({...offer, type: e.target.value})
            } placeholder="Tipo" required /> : undefined}
        </div>
        <hr />
        <input className={styles.formInput} type="text" onChange={
          (e) => setOffer({...offer, requirements: e.target.value})
          } placeholder="Requisitos" />
        <hr />
        <input className={styles.formInput} defaultValue={offer.site} type="text" onChange={
          (e) => setOffer({...offer, site: e.target.value})
          } placeholder="Site" />
        <hr />
        <div className={styles.formWrapper}>
          <label>Adicione uma lista de tags para facilitar o encontro da sua oferta!</label>
          <input className={styles.formInput} type="text" onChange={
            (e) => setOffer({...offer, tags: e.target.value.replace(/\s/g, '').split(',')})
            } placeholder="tag1,tag2,tag3" />
          <p className={styles.tagDescription}>As tags devem ser separadas por , (vírgula)</p>
        </div>
        <hr />
        <input className={styles.formInput} type="text" onChange={
          (e) => setOffer({...offer, description: e.target.value})
          } placeholder="Descrição" required />
        <hr />
        <div className = {styles.formWrapper}>
          <label>Data limite para aplicação</label>
          <input className={styles.formInput} onChange={
            (e) => setOffer({...offer, deadline: e.target.value})
            } type="date" required />
        </div>
        <hr />
        <input className={styles.formInput} type="text" onChange={
          (e) => setOffer({...offer, pay: e.target.value})
          } placeholder="Remuneração" required />
        <hr />
        <div className = {styles.formWrapper}>
          <label>Data de Ingresso</label>
          <input className={styles.formInput} onChange={
            (e) => setOffer({...offer, beginningDate: e.target.value})
            } type="date" required />
        </div>
        <hr />
        <input className={styles.formInput} defaultValue={offer.localization} type="text" onChange={
          (e) => setOffer({...offer, localization: e.target.value})
          } placeholder="Localização" required />
        <hr />
        <input className={styles.formInput} type="text" onChange={
          (e) => setOffer({...offer, neededHours: e.target.value})
          } placeholder="Horas necessárias" required />
        <hr />
        <input className={styles.formInput} defaultValue={offer.contactEmail} type="text" onChange={
          (e) => setOffer({...offer, contactEmail: e.target.value})
          } placeholder="Email para contato" required />
        <button className={styles.formButton} type="submit">Cadastrar oferta!</button>
      </form>
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : undefined }
    </div>
  );
};

export default RegisterOfferForm;
