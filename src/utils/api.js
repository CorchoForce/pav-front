import axios from "axios";

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:8080',
    responseType: 'json'
  }
)

const getOffers = () => (apiClient.get('/offer'))
const getOffer = (id) => (apiClient.get('/offer/' + id))

export { getOffers, getOffer } 
