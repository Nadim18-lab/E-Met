import React from 'react'
import ItemCount from '../ItemCounter/ItemC'
import './item.css'

const item = ({vinyl}) => {
  return (
    <div className="card">
        <img className="card-img-top" src={vinyl.img} alt="Card image cap"/>
        <div className="card-body">
            <p className="card-text">{vinyl.genre}</p>
            <p className="card-text">{vinyl.price}</p>
            <ItemCount stock={vinyl.stock}/>
        </div>
</div>
  )
}

export default item