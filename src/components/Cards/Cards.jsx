import { getOffers } from "../../utils/api";
import { Card, Loading, NotFound } from "..";
import styles from "./Cards.module.css";
import React from "react";

class Cards extends React.Component {
  state = {
    loading: true,
    data: [],
  };

  componentDidMount() {
    this.getOffersFromApi();
  }

  getOffersFromApi = () => {
    getOffers()
      .then((response) => {
        this.setState({ data: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ data: [], loading: false });
      });
  };

  render() {
    return (
      <div className={styles.contentContainer}>
        {this.state.loading ? (
          <Loading />
        ) : this.state.data.length === 0 ? (
          <NotFound text={"Nenhuma oferta foi encontrada"} />
        ) : (
          <div className={styles.cardsContainer}>
            {this.state.data.map((data) => (
              <Card props={data} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Cards;
