import { getOffers } from '../../utils/api'
import { Card, Loading, NotFound } from '..'
import styles from './Cards.module.css'
import React from 'react'
import lupa from "../../images/lupa.svg";

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [], loading: true, search: undefined }
    const cache = sessionStorage.getItem('@pav/offers')
    this.state = cache ? { data: JSON.parse(cache), loading: false, search: undefined }
                       : { data: [], loading: true, search: undefined }
  }

  handleChange = (event) => (this.setState({ search: event.target.value }))
  handleSubmit = (event) => {
    this.setState({ loading: true })
    event.preventDefault()
  }

  componentDidUpdate() {
    if (this.state.loading) { this.getOffersFromApi() }
  }

  getOffersFromApi = () => {
    const cache = sessionStorage.getItem('@pav/offers')
    if (cache && !this.state.search) {
      return this.setState({ data: JSON.parse(cache), loading: false })
    }

    getOffers(this.state.search).then((response) => {
      if (!this.state.search) {
        sessionStorage.setItem('@pav/offers', JSON.stringify(response.data));
      }
      this.setState({data: response.data, loading: false})
    }).catch(() => {
      this.setState({data: [], loading: false})
    })
  };

  render() {
    return (
      <div className={styles.superContainer}>
        <div className={styles.wrap}>
          <form className={styles.search} onSubmit={this.handleSubmit}>
            <input type="text" className={styles.searchTerm}
                  placeholder="Pesquisa" defaultValue={this.state.search}
                  value={this.state.search} onChange={this.handleChange}/>
            <button type="submit" className={styles.searchButton}>
              <img src={lupa} alt="Search Lupe" />
            </button>
          </form>
        </div>
        <div className={styles.contentContainer}>
        {this.state.loading ? (
          <Loading />
        ) : (
          !this.state.data || this.state.data?.length === 0 ? <NotFound text={"Nenhuma oferta foi encontrada"} /> :
            <div className={styles.cardsContainer}>
              {this.state.data.map((data) => (
                <Card data={data} key={data._id} />
              ))}
            </div>
        )}
      </div>
    </div>
    )
  }
}

export default Cards
