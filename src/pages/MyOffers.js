import React from 'react'
import {
  MyCards
}  from "../components"
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from '../utils/api'

const MyOffers = () => {

  if (!isLoggedIn()){
    return (
      <Redirect to='/sign_in'/>
    )
  }

  return (
    <div style={{ width:'100%', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Minhas Ofertas</h1>
      <MyCards/>
    </div>
  )
}

export default MyOffers
