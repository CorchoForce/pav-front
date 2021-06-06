import React from 'react'
import {Loading} from "../components"
import { Redirect } from 'react-router-dom'
import { isLoggedIn, verifyEmail } from '../utils/api'
import { useState } from 'react'
import 'querystring'

const MyOffers = () => {
    const [loading, setLoading] = useState(true)
    

    if (isLoggedIn()) return (<Redirect to='/' />)

    if(loading) return (<Loading/>)

}

export default MyOffers
