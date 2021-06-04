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
    apiClient.get('/offer/mine',  {
      headers: {
        'Authorization': "Bearer " + JSON.parse(localStorage.getItem('@pav/userToken'))
      }
    })
  )
}

const register = ({name, email, password, CPF}) => {
  return (
    apiClient.post('/register',
      {
        "name": name,
        "email": email,
        "password": password,
        "CPF": CPF
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

const isLoggedIn = () => (localStorage.getItem('@pav/userToken') ? true : false)

const logout = () => {
  localStorage.removeItem('@pav/user')
  localStorage.removeItem('@pav/userToken')
  window.location.reload()
}

export { getOffers, getOffer, getMyOffers, register, login, isLoggedIn, logout, deleteOffer } 
