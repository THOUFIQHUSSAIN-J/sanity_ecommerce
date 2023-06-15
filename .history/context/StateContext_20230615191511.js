import React, { createContext, useContext, useState, useEffect } from "react";
const { useContext, createContext, useState, useEffect } = require("react");
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  return(
    <Context.Provider
        value={
            {
                showCart,
            }}
        >
        {children}
    </Context.Provider>
  )



}
