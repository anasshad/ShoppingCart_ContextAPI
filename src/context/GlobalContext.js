import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import "../assets/shoe1.jpg";
import "../assets/shoe2.jpg";
import "../assets/shoe3.jpg";
import "../assets/shoe4.jpg";
import "../assets/shoe5.jpg";
import "../assets/shoe6.jpg";
import "../assets/shoe7.jpg";
import "../assets/shoe8.jpg";

const initialState = {
  items: [
    {
      id: 1,
      name: "Some Shoes",
      price: 45.78,
      image: "../assets/shoe1.jpg",
      cart: false
    },
    {
      id: 2,
      name: "Fancy Shoes",
      price: 32.45,
      image: "../assets/shoe2.jpg",
      cart: false
    },
    {
      id: 3,
      name: "Good Shoes",
      price: 90.22,
      image: "../assets/shoe3.jpg",
      cart: false
    },
    {
      id: 4,
      name: "Fantastic Shoes",
      price: 88.23,
      image: "../assets/shoe4.jpg",
      cart: false
    },
    {
      id: 5,
      name: "Splendid Shoes",
      price: 21.66,
      image: "../assets/shoe5.jpg",
      cart: false
    },
    {
      id: 6,
      name: "Comfty Shoes",
      price: 67.23,
      image: "../assets/shoe6.jpg",
      cart: false
    },
    {
      id: 7,
      name: "Joy Shoes",
      price: 92.34,
      image: "../assets/shoe7.jpg",
      cart: false
    },
    {
      id: 8,
      name: "Great Shoes",
      price: 24.56,
      image: "../assets/shoe8.jpg",
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
