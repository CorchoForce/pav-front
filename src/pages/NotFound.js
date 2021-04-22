import logo from '../images/404_white.png';
import '../styles/App.css';
import React from 'react'

const NotFound = () => 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Page not founded
      </header>
    </div>

export default NotFound