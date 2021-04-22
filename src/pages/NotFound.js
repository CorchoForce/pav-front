import logo from '../images/404_white.png';
import '../styles/App.css';
import React from 'react'
import {Link} from 'react-router-dom'


const NotFound = () => 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Page not founded</Link>
      </header>
    </div>

export default NotFound