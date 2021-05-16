import React from 'react'
import { getOffer } from '../utils/api'
import { Offer, NotFound, Loading } from '../components'

class OfferDetails extends React.Component {
  constructor(props) {
    super()
    this.id = props.match.params.id
  }

  state = {
    notFound: false,
    loading: true,
    offer: []
  };

  componentDidMount() {
    this.getOfferFromApi(this.id)
  }

  getOfferFromApi = (id) => {
    getOffer(id).then((response) => {
      this.setState({ offer: response.data, loading: false })
    }).catch(() => {
      this.setState({ loading: false, notFound: true })
    })
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          this.state.notFound ? (
            <NotFound text={"Oferta não encontrada"} />
          ) : <Offer props={this.state.offer} />
        )}
      </div>
    )
  }
}

export default OfferDetails
