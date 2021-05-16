import { getOffers } from '../../utils/api'
import { Card, Loading, NotFound } from '..'
import styles from './Cards.module.css'
import React from 'react'

class Cards extends React.Component {
  state = {
    loading: true,
    offers: []
  };

  componentDidMount() {
    this.getOffersFromApi()
  }

  getOffersFromApi = () => {
    getOffers().then((response) => {
      this.setState({offers: response.data, loading: false})
    }).catch((error) => {
      this.setState({offers: [], loading: false})
    })
  };

  render() {
    return (
      <div className={styles.contentContainer}>
        {this.state.loading ? (
          <Loading />
        ) : (
          this.state.offers === [] ? <NotFound text={"Nenhuma oferta foi encontrada"} /> :
            <div className={styles.cardsContainer}>
              {this.state.offers.map((offers) => (
                <Card props={offers} />
              ))}
            </div>
        )}
      </div>
    )
  }
}

export default Cards