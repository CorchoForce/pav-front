import axios from "axios";

const { REACT_APP_API_URL } = process.env;
const apiClient = axios.create(
  {
    baseURL: REACT_APP_API_URL,
    responseType: 'json'
  }
)

const getOffers = () => (apiClient.get('/offer'))
const getOffer = (id) => (apiClient.get('/offer/' + id))

export { getOffers, getOffer } 
