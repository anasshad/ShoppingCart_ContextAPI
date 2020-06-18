import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";
import ShopItem from "./ShopItem";

const Shop = () => {
  const context = useContext(GlobalContext);
  console.log(context.items);
  return (
    <Grid container spacing={2} justify="center">
      {context.items.map((item, index) => (
        <Grid item key={index}>
          <ShopItem
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            cart={item.cart}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Shop;
