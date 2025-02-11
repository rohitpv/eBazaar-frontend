import { Card, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
 console.log(product);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <img src={product["Image Src"]} alt={product["Title"]} width="100%" />
      <CardContent>
        <Typography variant="h6">{product["Title"]}</Typography>
        <Typography color="textSecondary">${product["Variant Price"]}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
