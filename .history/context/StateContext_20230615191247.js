import React, { createContext, useContext, useState, useEffect } from "react";
const { useContext, createContext, useState, useEffect } = require("react");
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
    const [showCart, setTotalQuantiy] = useState();


}
