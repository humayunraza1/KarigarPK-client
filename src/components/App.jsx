import React, { useState } from "react";
import Header from "./header";
import Store from "./store";
import Cart from "./cart";
import Search from "./search";
import Total from "./total";
import Address from "./address";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import Overlay from "./overlay";
import Footer from "./footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [cart, setCart] = useState([]);
  const [isCartVis, setCartVis] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [notiMsg, setNotiMsg] = useState("");

  function addToCart(item) {
    setOpen(true);
    if (cart.length === 0) {
      setStatus("success");
      setNotiMsg(`${item.Title} added to cart.`);
      return setCart((prevCart) => {
        return [
          ...prevCart,
          {
            _id: item._id,
            Title: item.Title,
            Price: item.Price,
            Image: item.ImageURL,
            Quantity: 1,
          },
        ];
      });
    } else {
      const existingIndex = cart.findIndex(
        (product) => product._id === item._id
      );

      if (existingIndex >= 0) {
        const product = cart[existingIndex];
        if (product.Quantity + 1 <= item.Stock) {
          setStatus("success");
          setNotiMsg(`${product.Title} added to cart.`);
          console.log("same item added: ", product.Title);
          console.log("same item added: ", product.Quantity);
          const newList = {
            _id: product._id,
            Title: product.Title,
            Price: product.Price + item.Price,
            Image: product.Image,
            Quantity: product.Quantity + 1,
          };
          const newArr = cart.map((i, index) => {
            return index === existingIndex ? newList : i;
          });
          return setCart(newArr);
        } else {
          setStatus("error");
          setNotiMsg(`Cannot add more ${product.Title}.`);
        }
      } else {
        return setCart((prevCart) => {
          setStatus("success");
          setNotiMsg(`${item.Title} added to cart.`);
          return [
            ...prevCart,
            {
              _id: item._id,
              Title: item.Title,
              Price: item.Price,
              Image: item.ImageURL,
              Quantity: 1,
            },
          ];
        });
      }
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function delItem(id) {
    setCart((prevCart) => {
      return prevCart.filter((item, index) => {
        return index !== id;
      });
    });
  }
  let finalOrders = [];
  const [isCheckedOut, setCheckOut] = useState(false);
  function placeOrder() {
    const orders = cart.map((item) => {
      return {
        name: item.Title,
        Qty: item.Quantity,
        Price: item.Price,
      };
    });
    finalOrders = [...orders, { Total: totalPrice }];
    cart.length === 0 ? alert("Nothing in cart") : setCheckOut(true);
    console.log(finalOrders);
  }

  let totalPrice = 0;
  return (
    <>
      <div>
        <Overlay onCheckout={isCheckedOut} />
        <Header />
        <div>
          <Search
            cartLength={cart.length}
            isCartOpen={setCartVis}
            onCart={addToCart}
          />
        </div>
        <div className={isCartVis ? "notEmpty" : "cart"}>
          <div className="close-cart">
            <button onClick={() => setCartVis(false)}>
              <CloseIcon sx={{ color: grey[50] }} fontSize="large" />
            </button>
          </div>
          <div className="cartItem-container">
            {cart.map((cartItem, index) => {
              totalPrice = totalPrice + cartItem.Price;
              return (
                <Cart
                  key={index}
                  id={index}
                  onDelete={delItem}
                  ImageURL={cartItem.Image}
                  Qty={cartItem.Quantity}
                  Title={cartItem.Title}
                  PriceTag={cartItem.Price}
                />
              );
            })}
          </div>
          <Total Total={totalPrice} onCheckout={placeOrder} />
        </div>
        <section className="store-container">
          <Store onCart={addToCart} />
          <Address
            Summary={cart}
            isVisible={isCheckedOut}
            setVisible={setCheckOut}
          />
        </section>
        <Footer />
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
            {notiMsg}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default App;
