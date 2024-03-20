// Cart.js
import React, { useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const Cart = ({ cartItems }) => {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Typography variant="h6">Shopping Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.title}
              secondary={`Quantity: ${item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1">Total Items: {totalItems}</Typography>
      <Typography variant="subtitle1">
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
    </div>
  );
};

export default Cart;
