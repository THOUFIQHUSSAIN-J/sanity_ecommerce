import React, { createContext, useContext, useState, useEffect } from "react";
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const incQty=()=>{
    setQty((prevQty)=> prevQty+1);
  }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 0)
        });
    }

  return(
    <Context.Provider
        value={
            {
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
            }}
        >
        {children}
    </Context.Provider>
  )



}