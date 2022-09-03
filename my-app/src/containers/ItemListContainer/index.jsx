import React from 'react'
import ItemC from '../../components/ItemCounter/ItemC'

const ItemListContainer = ({mensaje}) => {

  const agrerarCarrito = (cantidad) =>{
    console.log(`se ha agregado la cantidad ${cantidad} al carrito`)
  }

  return (
    <div className='item-list-container'>
      <h1>{mensaje}</h1>
      <ItemC initial={1} stock={10} onAdd={agrerarCarrito}/>
    </div>

  )
}

export default ItemListContainer
