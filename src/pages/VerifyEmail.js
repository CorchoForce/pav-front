import React from 'react'
import { Loading } from "../components"
import { Redirect, useLocation, useHistory } from 'react-router-dom'
import { isLoggedIn, verifyEmail } from '../utils/api'
import { useState, useEffect } from 'react'
import queryString from 'query-string'

const VerifyEmail = () => {
    const location = useLocation()
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(isLoggedIn())
    const parsedSearch = queryString.parse(location.search)

    useEffect(() => {
        if (parsedSearch.verified) return (<Redirect to='/' />)
        if (!parsedSearch.token) return (setLoading(false))
        verifyEmail(parsedSearch.token).then((response) => {
            localStorage.setItem('@pav/userToken', JSON.stringify(response.data.token))
            setLoggedIn(true)
        }).catch(() => {
            setLoading(false)
        }) 
    }, [parsedSearch])

    if (loggedIn) {
        if (loading) {
            history.push('&verified=true')
            window.location.reload()
        } else {
          return <Redirect to='/' />
        }
    }
    
    if (loading) {
        return <Loading />
    }
    
    return (
        <Redirect to='/sign_in' />
    )
}

export default VerifyEmail
