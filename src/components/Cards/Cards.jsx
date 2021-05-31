import { getOffers } from '../../utils/api'
import { Card, Loading, NotFound } from '..'
import styles from './Cards.module.css'
import React from 'react'

class Cards extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.search) {
      this.state = { data: [], loading: true, search: this.props.search }
    } else {
      const cache = sessionStorage.getItem('@pav/offers')
      this.state = cache ? { data: JSON.parse(cache), loading: false, search: this.props.search }
                         : { data: [], loading: true, search: this.props.search }
    }
  }

  handleState = () => {
    if (this.props.search) {
      this.setState({ data: [], loading: true, search: this.props.search })
    } else {
      const cache = sessionStorage.getItem('@pav/offers')
      this.setState(cache ? { data: JSON.parse(cache), loading: false, search: this.props.search }
                          : { data: [], loading: true, search: this.props.search })
    }
  }

  componentDidMount() {
    if (this.state.loading) { this.getOffersFromApi() }
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.handleState()
      this.getOffersFromApi()
    }
  }

  getOffersFromApi = () => {
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
    )
  }
}

export default Cards
