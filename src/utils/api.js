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

const getOffer = (id) => (apiClient.get('/offer/' + id))

export { getOffers, getOffer } 
