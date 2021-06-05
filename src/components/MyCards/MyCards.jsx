import { Card, Loading, PlusCard } from ".."
import { getMyOffers, deleteOffer } from "../../utils/api"
import { useState, useEffect } from 'react'
import styles from './MyCards.module.css'
import trash from '../../images/trash.svg'
import toBeValidated from '../../images/toBeValidated.svg'
import validated from '../../images/validated.svg'

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
            <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '22%' }}>
              {data.valid ? <img src={validated} alt='validated' className={styles.icon} /> : <img src={toBeValidated} alt='to be validated' className={styles.icon} />}
              <img src={trash} alt='delete' className={styles.icon} onClick={(e) => {
                deleteCard(data._id);
                e.preventDefault()
              }}/>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default MyCards