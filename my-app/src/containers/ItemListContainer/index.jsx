import React from 'react'
import { useState,useEffect} from 'react'
import ItemList from '../../components/ItemList/itemList'
import {vinyl } from '../../Vinyls/vinil'

const ItemListContainer = ({mensaje}) => {

  const [vinyls , setVinyls]= useState([])

  useEffect(()=> {
    (async ()=> {
    const obtainVinyl = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(vinyl)
        }, 1000);
      })

        try {
          const vinyls = await obtainVinyl;
          setVinyls(vinyls);
        } catch (error) {
          console.log(error);
        }

      })()

  }, [])

  return(
    <div>
      <ItemList vinyl={vinyls}/>
    </div>
  )
}

export default ItemListContainer
