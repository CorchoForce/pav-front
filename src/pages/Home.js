import {
  Cards
} from '../components'
import React from 'react'

const Home = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: '3em'
    }}>
      <Cards />
    </div>
  )
}

export default Home
