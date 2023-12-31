import React, { createContext, useContext, useState, useEffect } from "react";
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const onAdd=(product, quantity)=>{
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    if(checkProductInCart){
        setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevToatalQuantities) => prevToatalQuantities+quantity)
    }

    const updatedCartItem = cartItems.map((cartProduct)=>{
        if(cartProduct)
    })

  }

  const incQty=()=>{
    setQty((prevQty)=> prevQty+1);
  }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1)
                return 1;
            return prevQty-1;
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
                incQty,
                decQty,
            }}
        >
        {children}
    </Context.Provider>
  )

}

export const useStateContext = () => useContext(Context);