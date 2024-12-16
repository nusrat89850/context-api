import React, { useState } from 'react'
import { createContext } from 'react'

const Cart = createContext();

export default function CartContext({children}) {
    const [cart,setCart] = useState([]);
  return (
    <Cart.Provider value={{cart,setCart}}>
        {children}
    </Cart.Provider>)
}
