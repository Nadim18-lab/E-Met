import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx'

const ItemDetailContainer = () => {
    const [vinylDetail ,setVinylDetail]=useState({})
    const {vinylId} = useParams()
    
    useEffect(()=>{
        (async()=>{
          
        try{
            const response =await fetch('../../../mocks/vinyl.JSON');
            const data = await response.json();
            const dataDetail = data.filter(vinyl=>vinyl.id === vinylId)
            setVinylDetail(dataDetail)
        } catch (error){
            console.log(error);
        }
    })()
    }, [vinylId])

  return (
    <>
    {Object.keys(vinylDetail).length === 0 ? (
      <h1>Loading Vinyl</h1>
    ):(
      <ItemDetail vinyl={vinylDetail}/>
    )}
  </>
    
  )
}
export default ItemDetailContainer