import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Button,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    brand,
    category,
    images,
  } = product;

  const discountedPrice = price - (price * discountPercentage) / 100;

  const handleAddToCart = () => {
    console.log(`Product added to cart: ${title}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardContent>
          {Array.isArray(images) && images.length > 0 && (
            <CardMedia
              component="img"
              alt={title}
              height="260"
              width="auto"
              image={images[0]} // Display the first image
            />
          )}
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography color="textSecondary">{category}</Typography>
          {/* <Typography variant="body2" component="p">
            {description}
          </Typography> */}
          <Typography variant="h6" color="primary">
            Price: ${price}
          </Typography>
          <Typography variant="h6" color="error">
            Discount: {discountPercentage}%
          </Typography>
          <Typography variant="h6" color="secondary">
            Discounted Price: ${discountedPrice.toFixed(2)}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Brand: {brand}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
