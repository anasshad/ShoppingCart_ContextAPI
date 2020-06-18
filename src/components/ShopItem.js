import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";

const ShopItem = ({ id, name, price, image, cart }) => {
  const { addCart } = useContext(GlobalContext);
  return (
    <Card style={{ maxWidth: 300 }}>
      <CardMedia image={require(`${image}`)} component="img" title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          {`$${price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addCart(id)} disabled={cart}>
          {cart ? "Added to Cart" : "Add to cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopItem;
