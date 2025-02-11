import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    console.log("item", item);
    dispatch(removeFromCart(item));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", marginY: 3 }}>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" textAlign="center">
          Your cart is empty. <Link to="/">Go shopping</Link>
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia component="img" height="200" image={item["Image Src"]} alt={item["Title"]} />
                <CardContent>
                  <Typography variant="h6">{item["Title"]}</Typography>
                  <Typography variant="body1">${item["Variant Price"]}</Typography>
                  <Button variant="contained" color="error" onClick={() => handleRemove(item)} sx={{ marginTop: 1 }}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
