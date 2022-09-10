import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [vinylDetail ,setVinylDetail]=useState({})
    const {vinylId} = useParams()
    
    useEffect(()=>{
        (async()=>{
          
        try{
            const response =await fetch('../../../mocks/vinyl.JSON');
            const data = await response.json();
            const dataDetail = data.filter(vinyl=>vinyl.id === vinylId)
            console.log(dataDetail)
            setVinylDetail(dataDetail)
        } catch (error){
            console.log(error);
        }
    })()
    }, [vinylId])

  return (
    <ItemDetail vinyl={vinylDetail}/>
  )
}
export default ItemDetailContainer