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
        const iconValues = data.valid ? { img: validated, text: "Esta oferta já foi validada e está disponível para os nossos usuários!", backgroundColor: "#38AF97" }
                                      : { img: toBeValidated, text: "Esta oferta ainda não foi validada e não está disponível para os nossos usuários.", backgroundColor: "#E6D380" }
        return (
          <Card data={data} key={data._id}>
            <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '22%' }}>
              <div className={styles.iconWrapper}>
                <img src={iconValues.img} alt='validated' className={styles.icon} />
                <div className={styles.iconDescriptionWrapper}> 
                  <div className={styles.iconDescription} style={{ backgroundColor: iconValues.backgroundColor }}>
                    <p>{iconValues.text}</p>
                  </div>
                </div>
              </div>
              <div className={styles.iconWrapper}>
                <img src={trash} alt='delete' className={styles.icon} onClick={(e) => {
                  deleteCard(data._id);
                  e.preventDefault()
                }}/>
                <div className={styles.iconDescriptionWrapper}> 
                  <div className={styles.iconDescription} style={{ backgroundColor: "#D53A3A" }}>
                    <p>Cuidado, esta ação apagará esta oferta permanentemente.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default MyCards