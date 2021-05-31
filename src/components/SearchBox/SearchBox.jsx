import { useState } from 'react'
import styles from './SearchBox.module.css'
import lupa from "../../images/lupa.svg";

const SearchBox = ({initialSearch, history}) => {
  const [search, setSearch] = useState(initialSearch)
  
  const handleChange = (event) => (setSearch(event.target.value))
  const handleSubmit = (event) => {
    history.push('/?search='.concat(String(search) === "undefined" ? "" : search))
    event.preventDefault()
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input type="text" className={styles.searchTerm}
               placeholder="Pesquisa" defaultValue={search}
               value={search} onChange={handleChange}/>
        <button type="submit" className={styles.searchButton}>
          <img src={lupa} alt="Search Lupe" />
        </button>
      </form>
    </div>
  )
}

export default SearchBox