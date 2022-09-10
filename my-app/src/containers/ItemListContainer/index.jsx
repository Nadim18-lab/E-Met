import React from 'react'
import { useState,useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = () => {

  const [vinyls , setVinyls]= useState([])

  useEffect(()=> {
    (async ()=> {

      // const getVinyl = new Promise((accept,reject) => {
      //   setTimeout(()=>{
      //     accept(vinyls)
      //   },1000)
      // })

      // getVinyl.then((result)=>{
      //   console.log(result)
      //   setVinyls(result)
      // })
      // .catch((error) => console.log(error))

        try {
          const response = await fetch('../../../mocks/vinyl.json');
          const vinyls = await response.json();
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
