import { Card, Loading, NotFound, PlusCard } from ".."
import { getMyOffers, deleteOffer } from "../../utils/api"
import { useState, useEffect } from 'react'
import styles from './MyCards.module.css'
import trash from '../../images/trash.svg'

const MyCards = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const filteredData = (offers, id) => {
    return offers.filter(x => (x._id !== id))
  }
  
  const deleteCard = (id) => {
    setLoading(true)
    deleteOffer(id).then(() => {
      setData(filteredData(data, id))
      localStorage.removeItem('@pav/offers')
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }

  useEffect(() => {
    getMyOffers().then((response) =>{
      setData(response.data)
      setLoading(false)       
    }).catch(()=>{
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (<Loading />)
  }

  return (
    <div className={styles.cardsContainer}>
      <PlusCard />
      {data.map((data) => {
        return (
          <Card data={data} key={data._id}>
            <img src={trash} alt='delete' className={styles.trash} onClick={(e) => {
              deleteCard(data._id);
              e.preventDefault()
            }}/>
          </Card>
        )
      })}
    </div>
  )
}

export default MyCards