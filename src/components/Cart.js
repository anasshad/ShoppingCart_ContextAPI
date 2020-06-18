import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid
} from "@material-ui/core";
import { Delete, Add, ShoppingCart } from "@material-ui/icons";

const Cart = () => {
  const context = useContext(GlobalContext);

  const amount = context.cartItems
    .map(item => item.price * item.qty)
    .reduce((acc, i) => (acc += i), 0)
    .toFixed(2);

  const items = context.cartItems
    .map(item => item.qty)
    .reduce((acc, i) => (acc += i), 0);
  console.log(context.cartItems);

  const CartEmpty = () => (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: "100px" }}
    >
      <Typography variant="h5">You have no items in your cart</Typography>
    </Grid>
  );

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ marginBottom: "2%" }}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <ShoppingCart fontSize="large" />
        <Typography variant="h4">Cart</Typography>
      </Grid>
      {context.cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <Grid container spacing={5} alignItems="center" justify="center">
          <Grid item xs={12} sm={7}>
            <List style={{ width: "100%" }}>
              {context.cartItems.map((item, i) => (
                <ListItem key={i} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt={item.name}
                      src={require(item.image)}
                      style={{
                        width: "70px",
                        height: "60px",
                        marginRight: "10px"
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {`$${item.price}`}
                        </Typography>
                        <Typography variant="body2">Qty: {item.qty}</Typography>
                      </React.Fragment>
                    }
                  />

                  <ListItemSecondaryAction>
                    <IconButton onClick={() => context.removeCart(item.id)}>
                      <Delete />
                    </IconButton>
                    <IconButton onClick={() => context.increaseQty(item.id)}>
                      <Add />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">Total Price</Typography>
            <Typography variant="body1" color="textSecondary">
              {`$${amount}`}
            </Typography>
            <br />
            <Typography variant="h5">Total Items</Typography>

            <Typography variant="body2" color="textSecondary">
              {items}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default Cart;
