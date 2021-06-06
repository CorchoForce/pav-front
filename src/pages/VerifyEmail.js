import React from 'react'
import { Loading } from "../components"
import { Redirect, useLocation } from 'react-router-dom'
import { isLoggedIn, verifyEmail } from '../utils/api'
import { useState, useEffect } from 'react'
import queryString from 'query-string'

const VerifyEmail = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const emailToken = queryString.parse(location.search).token

    useEffect(() => {
        if (!emailToken) {
            return (setLoading(false))
        }
        verifyEmail(emailToken).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        }) 
    }, [])

    if (isLoggedIn()) return (<Redirect to='/' />)
    if (loading) return (<Loading/>)

    return (
        <Redirect to='/sign_in' />
    )
}

export default VerifyEmail
