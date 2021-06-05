import React from 'react'
import {
  MyCards
} from "../components"
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from '../utils/api'

const MyOffers = () => {

  if (!isLoggedIn()){
    return (
      <Redirect to='/sign_in'/>
    )
  }

  return (
    <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '3em',
    marginLeft: '3em',
    }}>
      <MyCards/>
    </div>
  )
}

export default MyOffers
