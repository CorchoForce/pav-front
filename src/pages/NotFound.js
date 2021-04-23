import logo from '../images/404_white_bigger.png';
import '../styles/App.css';
import React from 'react'

const NotFound = () => 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Página não encontrada
      </header>
    </div>

export default NotFound