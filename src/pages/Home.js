import {
  Cards,
  SearchBox
} from '../components'
import React, { useEffect, useState } from 'react'
import queryString from 'query-string';

const Home = (props) => {
  const [search, setSearch] = useState(queryString.parse(props.location.search).search)

  useEffect(() => {
    setSearch(queryString.parse(props.location.search).search)
  }, [props.location.search]);

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: '3em'
    }}>
      <SearchBox initialSearch={search} history={props.history} />
      <Cards search={search} {...props} />
    </div>
  )
}

export default Home
