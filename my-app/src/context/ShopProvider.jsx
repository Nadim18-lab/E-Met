import { createContext, useState } from "react";
import React from 'react'

export const Shop = createContext(null)

const ShopProvider = ({children}) => {

    const [mensaje, SetMensaje]=useState("hola")

  return (
    <Shop.Provider value={{mensaje}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider