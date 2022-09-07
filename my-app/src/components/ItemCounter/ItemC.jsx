import React from 'react'
import { useState } from 'react';
import './index.css';

const ItemC = ({stock,onAdd}) => {

    const[count ,setCount]= useState(1);

    const addCart = ()=>{
        onAdd(count)
        setCount(count)
    }

    const handleAdd=()=>{
        if(count < stock){
            setCount(count+1)
        }else{
            alert("No hay stock disponible")
        }
    }

    const handleDec = () => {
        if(count <= 0) return;
        setCount(count - 1);
    }

  return (
    <div className='buttons-gen'>
        <h2>{count}</h2>
        <div className='buttons-handle'>
            <button className='btn btn-secondary' onClick={handleAdd}>+</button>
            <button className='btn btn-secondary' onClick={handleDec}>-</button>
        </div>
        
        <button className='btn btn-warning' onClick={addCart}>Agregar a acarrito</button>
    </div>
  )
}

export default ItemC