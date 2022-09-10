import React from 'react'
import ItemCount from '../ItemCounter/ItemC'

const ItemDetail = ({vinyl}) => {
  const onAdd = (count)=>{
    console.log(`se a agregado ${count} al carrito` );
  }

  return (
    <div>
        <h1>{vinyl.name}</h1>
        <img src={vinyl.img} alt="vinyl" />
        <ItemCount onAdd={onAdd} stock={vinyl.stock}/>
    </div>
  )
}

export default ItemDetail