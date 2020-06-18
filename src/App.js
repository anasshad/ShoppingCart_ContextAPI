import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { GlobalProvider } from "./context/GlobalContext";
import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Cart />
        <Shop />
      </div>
    </GlobalProvider>
  );
}
