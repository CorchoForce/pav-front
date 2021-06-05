import React from 'react'
import {
  MyCards
}  from "../components"
import style from "../components/MyCards/MyCards.module.css"
import mais from "../images/mais.svg"
import { Redirect, Link } from 'react-router-dom'
import { isLoggedIn } from '../utils/api'

const MyOffers = () => {

  if (!isLoggedIn()){
    return (
      <Redirect to='/sign_in'/>
    )
  }

  return (
    <div style={{width:'100%'}}>
      <div className={ style.my_offers}>
        <h1 >Minhas Ofertas </h1>
        <Link to="/register_offer">
        <img src={mais} alt="Adicionar Oferta" className={style.plus} /> 
        </Link>
      </div>
      <div>
        <MyCards/>
      </div>
    </div>
  )
}

export default MyOffers
