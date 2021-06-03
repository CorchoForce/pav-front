import { Card, Loading } from ".."
import { getOffers } from "../../utils/api"
import { useState } from 'react'
import styles from './MyCards.module.css'
import trash from '../../images/trash.svg'

const MyCards = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const deleteCard = (id) => {
    console.log("DELETAR O AMIGAO")
  }

  getOffers().then((response) =>{
    setData(response.data)
    setLoading(false)       
  }).catch(()=>{
    setLoading(false)
  })

  if (loading) {
    return (<Loading />)
  }

  return (
    <div className={styles.cardsContainer}>
      {data.map((data) => {
        return (
          <Card data={data} key={data._id} >
            <img src={trash} alt='delete' className={styles.trash} onClick={(e) => {
              e.preventDefault()
              deleteCard(data._id)
            }} />
          </Card>
        )
      })}
    </div>
  )
}

export default MyCards