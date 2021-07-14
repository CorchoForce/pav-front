import axios from "axios";

const { REACT_APP_API_URL } = process.env;
const apiClient = axios.create(
  {
    baseURL: REACT_APP_API_URL || "http://localhost:8080",
    responseType: 'json'
  }
)

const getOffers = (text) => {
  const searchText = text ? "?search=" + text : ""
  return (
    apiClient.get('/offer' + searchText)
  )
}

const getMyOffers = () => {
  return (
    apiClient.get('/myoffers', {
      headers: {
        'Authorization': "Bearer " + JSON.parse(localStorage.getItem('@pav/userToken'))
      }
    })
  )
}

const sendRecoverEmail = (email) => {
  return (
    apiClient.post('/recover_password',
      {
        "email": email
      }
    )
  )
}

const recoverPassword = (token, password, confirmation_password) => {
  return (
    apiClient.put('/recover_password',
      {
        "password": password,
        "confirmation_password": confirmation_password,
      }, {
      headers: {
        "Authorization": "Bearer " + token
      }
    }
    )
  )
}

const register = ({ name, institution, email, password, CPF }) => {
  return (
    apiClient.post('/register',
      {
        "name": name,
        "email": email,
        "password": password,
        "CPF": CPF,
        "institution": institution
      }
    )
  )
}

const login = ({ email, password }) => {
  return (
    apiClient.post('/login',
      {
        "email": email,
        "password": password
      }
    )
  )
}

const getOffer = (id) => (apiClient.get('/offer/' + id))

const deleteOffer = (id) => {
  return (
    apiClient.delete('/offer/' + id, {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('@pav/userToken'))
      }
    })
  )
}

const createOffer = (body) => {
  return (
    apiClient.post('/offer', body, {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('@pav/userToken'))
      },
    })
  )
}

const verifyEmail = (token) => {
  return (
    apiClient.post('/mail/verify', {}, {
      headers: {
        "Authorization": "Bearer " + token
      }
    }
    )
  )
}

const sendEmail = (email, senha) => {
  return (
    apiClient.post('/mail/send',
      {
        "email": email,
        "senha": senha,
      }
    )
  )
}

const isLoggedIn = () => (localStorage.getItem('@pav/userToken') ? true : false)

const logout = () => {
  localStorage.removeItem('@pav/user')
  localStorage.removeItem('@pav/userToken')
  window.location.reload()
}

export { verifyEmail, sendEmail, getOffers, getOffer, getMyOffers, register, login, isLoggedIn, logout, deleteOffer, createOffer, sendRecoverEmail, recoverPassword }
