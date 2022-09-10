import React from 'react'
import Item from '../Item/Item.jsx'
import './itemList.css'

const ItemList = ({vinyl}) => {
  return (
    <div className='cards-container'>
      {vinyl.map(vinyl =>{
        return <Item key={vinyl.id} vinyl={vinyl}/>
      })}
    </div>
  )
}

export default ItemList