// Product.js
import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Product = ({ product, onAddToCart }) => {
  const { id, title, description, price } = product;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      id,
      title,
      price,
      quantity,
    };
    onAddToCart(cartItem);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
        <Typography variant="h6" color="primary">
          Price: ${price}
        </Typography>
        <div>
          <Button onClick={handleAddToCart} variant="contained" color="primary">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
