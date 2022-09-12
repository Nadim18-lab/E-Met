import React from 'react'
import ItemCount from '../ItemCounter/ItemC'
import './ItemDetail.css'

const ItemDetail = ({vinyl}) => {
  const onAdd = (count)=>{
    console.log(`se a agregado ${count} al carrito` );
  }

  console.log(vinyl[0]);
  return (
    <div className='Container-detail'>
        <h1 className='Container-titulo'>{vinyl[0].name}</h1>
        <div className='Container-text'>
          <h4>{vinyl[0].info}</h4>
        </div>
        <img className='Container-img' src={vinyl[0].img} alt="vinyl" />
        <ItemCount onAdd={onAdd} stock={vinyl.stock}/>
    </div>
  )
}

export default ItemDetail