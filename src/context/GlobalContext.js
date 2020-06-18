import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import Shoe1 from "../assets/shoe1.jpg";
import Shoe2 from "../assets/shoe2.jpg";
import Shoe3 from  "../assets/shoe3.jpg";
import Shoe4 from  "../assets/shoe4.jpg";
import Shoe5 from  "../assets/shoe5.jpg";
import Shoe6 from  "../assets/shoe6.jpg";
import Shoe7 from  "../assets/shoe7.jpg";
import Shoe8 from  "../assets/shoe8.jpg";

const initialState = {
  items: [
    {
      id: 1,
      name: "Some Shoes",
      price: 45.78,
      image: Shoe1,
      cart: false
    },
    {
      id: 2,
      name: "Fancy Shoes",
      price: 32.45,
      image: Shoe2,
      cart: false
    },
    {
      id: 3,
      name: "Good Shoes",
      price: 90.22,
      image: Shoe3,
      cart: false
    },
    {
      id: 4,
      name: "Fantastic Shoes",
      price: 88.23,
      image: Shoe4,
      cart: false
    },
    {
      id: 5,
      name: "Splendid Shoes",
      price: 21.66,
      image: Shoe5,
      cart: false
    },
    {
      id: 6,
      name: "Comfty Shoes",
      price: 67.23,
      image: Shoe6,
      cart: false
    },
    {
      id: 7,
      name: "Joy Shoes",
      price: 92.34,
      image: Shoe7,
      cart: false
    },
    {
      id: 8,
      name: "Great Shoes",
      price: 24.56,
      image: Shoe8,
      cart: false
    }
  ],
  cartItems: []
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addCart = id => {
    dispatch({
      type: "ADD_CART",
      payload: {
        id
      }
    });
  };

  const increaseQty = id => {
    dispatch({
      type: "INCREASE_QTY",
      payload: {
        id
      }
    });
  };

  const removeCart = id => {
    dispatch({
      type: "REMOVE_CART",
      payload: {
        id
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        cartItems: state.cartItems,
        addCart,
        increaseQty,
        removeCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
