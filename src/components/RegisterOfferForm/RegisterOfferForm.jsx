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
      const { site, localization, contactEmail } = response.data[0]
      setOffer({ site: site, localization: localization, contactEmail: contactEmail, type: 'estagio' })
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
        <div className={styles.formWrapper}>
          <label for={styles.formInput} class={styles.required}>Título da oferta</label>
          <input className={styles.formInput} type="text" onChange={
            (e) => setOffer({...offer, title: e.target.value})
            } placeholder="Título" required />
        </div>
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
        <div className={styles.formWrapper}>
          <label for={styles.formInput} class={styles.required}>Requisitos para a vaga</label>
          <input className={styles.formInput} type="text" onChange={
            (e) => setOffer({...offer, requirements: e.target.value})
            } placeholder="Requisitos" required/>
        </div>
        <hr />
        <div className={styles.formWrapper}>
          <label for={styles.formInput} >Site</label>
          <input className={styles.formInput} defaultValue={offer.site} type="text" onChange={
            (e) => setOffer({...offer, site: e.target.value})
            } placeholder="Site" />
        </div>
        <hr />
        <div className={styles.formWrapper}>
          <label>Adicione uma lista de tags para facilitar o encontro da sua oferta!</label>
          <input className={styles.formInput} type="text" onChange={
            (e) => setOffer({...offer, tags: e.target.value.replace(/\s/g, '').split(',')})
            } placeholder="tecnologia, ruby, farmácia" />
          <p className={styles.tagDescription}>As tags devem ser separadas por , (vírgula)</p>
        </div>
        <hr />
        <div className={styles.formWrapper}>
          <label for={styles.formInput} class={styles.required}>Descrição da Vaga</label>
        <input className={styles.formInput} type="text" onChange={
          (e) => setOffer({...offer, description: e.target.value})
          } placeholder="Descrição" required />
        </div>
        <hr />
        <div className = {styles.formWrapper}>
          <label class={styles.required} > Data limite para aplicação</label>
          <input className={styles.formInput} onChange={
            (e) => setOffer({...offer, deadline: e.target.value})
            } type="date" required />
        </div>
        <hr />
        <div className={styles.formWrapper}>
          <label for={styles.formInput} class={styles.required}>Remuneração da Vaga</label>
          <input className={styles.formInput} type="text" onChange={
            (e) => setOffer({...offer, pay: e.target.value})
            } placeholder="Remuneração" required />
        </div>
        <hr />
        <div className = {styles.formWrapper}>
          <label class={styles.required} >Data para Ingresso</label>
          <input className={styles.formInput} onChange={
            (e) => setOffer({...offer, beginningDate: e.target.value})
            } type="date" required />
        </div>
        <hr />
        <div className={styles.formWrapper}>
          <label for={styles.formInput} class={styles.required}> Localização</label>
          <input className={styles.formInput} defaultValue={offer.localization} type="text" onChange={
            (e) => setOffer({...offer, localization: e.target.value})
            } placeholder="Localização" required />
        </div>
        <hr />
        <div className={styles.formWrapper}>
          <label for={styles.formInput} class={styles.required}> Carga Horária</label>
          <input className={styles.formInput} type="text" onChange={
            (e) => setOffer({...offer, neededHours: e.target.value})
            } placeholder="Carga Horária" required />
        </div>
        <hr />
        <div className={styles.formWrapper}>
          <label for={styles.formInput} class={styles.required}> Email para contato</label>
          <input className={styles.formInput} defaultValue={offer.contactEmail} type="text" onChange={
            (e) => setOffer({...offer, contactEmail: e.target.value})
            } placeholder="Email para contato" required />
        </div>
        <button className={styles.formButton} type="submit">Cadastrar oferta!</button>
      </form>
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : undefined }
    </div>
  );
};

export default RegisterOfferForm;
