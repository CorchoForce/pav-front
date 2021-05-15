import logo from '../images/footer_logo.png';
import '../styles/App.css';
import {
  getOffers
} from '../utils/api'
import React from 'react'

const Home = () => {
  let response = getOffers().then((data) => {
    console.log(data)
    return (data)
  }).catch((error) => {
    console.log("AAAA")
    console.log(error)
    console.log("AAAA")
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
          </a>
      </header>
  </div>
  )
}

export default Home