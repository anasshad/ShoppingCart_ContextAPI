import React from "react";
import { Typography, Grid } from "@material-ui/core";

const Header = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ margin: "5% 0 2% 0" }}
    >
      <Typography variant="h3">Shop</Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Powered by React and Context API
      </Typography>
    </Grid>
  );
};

export default Header;
