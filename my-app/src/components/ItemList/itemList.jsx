import React from 'react'
import Item from '../Item/item'
import './itemList.css'

const itemList = ({vinyl}) => {
  return (
    <div className='cards-container'>
      {vinyl.map(vinyl =>{
        return <Item key={vinyl.id} vinyl={vinyl}/>
      })}
    </div>
  )
}

export default itemList