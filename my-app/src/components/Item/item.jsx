import React from 'react'
import { useNavigate } from 'react-router-dom'
import './item.css'

const Item = ({vinyl}) => {
  // const onAdd = (count)=>{
  //   console.log(`se a agregado ${count} al carrito` );
  // }
  
  
  const navigate = useNavigate()
  const handleNavigate = ()=> {
    navigate(`/detail/${vinyl.id}`)
  }

  return (
    <div className="card" onClick={handleNavigate} >
        <img className="card-img-top" src={vinyl.img} alt="Card img"/>
        <div className="card-body">
            <p className="card-text">{vinyl.genre}</p>
            <p className="card-text">{vinyl.name}-{vinyl.band}</p>
            <p className="card-text">{vinyl.price}</p>
            {/* <ItemCount onAdd={onAdd} stock={vinyl.stock}/> */}
        </div>
</div>
  )
}

export default Item