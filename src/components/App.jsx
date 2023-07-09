import React, { useState, useEffect } from "react";
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
import Notification from "./notification";
import ItemDetail from "./itemDetails";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartVis, setCartVis] = useState(false);
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const [notiMsg, setNotiMsg] = useState("");

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: window.location.pathname,
    });
  }, []);

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
    if (cart.length === 0) {
      setStatus("error");
      setNotiMsg("Cart Is Empty.");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
    } else {
      setCheckOut(true);
    }
    console.log(finalOrders);
  }

  let totalPrice = 0;
  const [info, setInfo] = useState("");
  const [modal, setModal] = useState(false);
  function openModal(i) {
    console.log(i);
    setInfo(i);
    setModal(!modal);
  }

  function customaCart(c) {
    if (cart.length === 0) {
      setStatus("success");
      setNotiMsg(`${c}x ${info.Title} added to cart.`);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      setModal(false);
      return setCart((prevCart) => {
        return [
          ...prevCart,
          {
            _id: info._id,
            Title: info.Title,
            sPrice: info.Price,
            Variant: info.Variant,
            Price: info.Price * c,
            Image: info.ImageURL,
            Quantity: c,
            Stock: info.Stock,
          },
        ];
      });
    } else {
      const existingIndex = cart.findIndex(
        (product) => product._id === info._id
      );

      if (existingIndex >= 0) {
        const product = cart[existingIndex];
        if (product.Quantity + c <= info.Stock) {
          setStatus("success");
          setNotiMsg(`${c}x ${product.Title} added to cart.`);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 1000);
          setModal(false);
          console.log("same item added: ", product.Title);
          console.log("same item added: ", product.Quantity);
          const newList = {
            _id: product._id,
            Title: product.Title,
            Variant: product.Variant,
            Price: product.Price + info.Price * c,
            Image: product.Image,
            sPrice: info.Price,
            Quantity: product.Quantity + c,
            Stock: product.Stock,
          };
          const newArr = cart.map((i, index) => {
            return index === existingIndex ? newList : i;
          });
          return setCart(newArr);
        } else {
          setStatus("error");
          setNotiMsg(`Cannot add more ${product.Title}.`);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 1000);
        }
      } else {
        return setCart((prevCart) => {
          setStatus("success");
          setNotiMsg(`${c}x ${info.Title} added to cart.`);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 1000);
          setModal(false);
          return [
            ...prevCart,
            {
              _id: info._id,
              Title: info.Title,
              sPrice: info.Price,
              Variant: info.Variant,
              Price: info.Price * c,
              Image: info.ImageURL,
              Quantity: c,
              Stock: info.Stock,
            },
          ];
        });
      }
    }
  }

  // Increasing Quantity from Cart
  function increaseQty(id) {
    const existingIndex = cart.findIndex((product) => product._id === id);
    const product = cart[existingIndex];
    if (product.Quantity + 1 <= product.Stock) {
      const newList = {
        _id: product._id,
        Title: product.Title,
        sPrice: product.sPrice,
        Variant: product.Variant,
        Price: product.Price + product.sPrice,
        Image: product.Image,
        Quantity: product.Quantity + 1,
        Stock: product.Stock,
      };

      const newArr = cart.map((i, index) => {
        return index === existingIndex ? newList : i;
      });
      setStatus("success");
      setNotiMsg(`${1}x ${product.Title} added to cart.`);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      return setCart(newArr);
    } else {
      setStatus("error");
      setNotiMsg(`Qty limit for ${product.Title} reached.`);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      return cart;
    }
  }

  function decreaseQty(id) {
    const existingIndex = cart.findIndex((product) => product._id === id);
    const product = cart[existingIndex];

    if (product.Quantity - 1 >= 1) {
      const newList = {
        _id: product._id,
        Title: product.Title,
        sPrice: product.sPrice,
        Variant: product.Variant,
        Price: product.Price - product.sPrice,
        Image: product.Image,
        Quantity: product.Quantity - 1,
        Stock: product.Stock,
      };

      const newArr = cart.map((i, index) => {
        return index === existingIndex ? newList : i;
      });
      setStatus("warning");
      setNotiMsg(`${1}x ${product.Title} removed from cart.`);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      return setCart(newArr);
    } else {
      const newArr = cart.filter((i, index) => {
        return index !== existingIndex;
      });

      setStatus("error");
      setNotiMsg(`${product.Title} removed from cart`);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      return setCart(newArr);
    }
  }
  return (
    <>
      {show && <Notification msg={notiMsg} status={status} />}
      <div>
        {isCheckedOut && <Overlay />}
        <Header />
        <div>
          <Search
            cartLength={cart.length}
            isCartOpen={setCartVis}
            onSearch={openModal}
          />
        </div>
        {modal && <Overlay />}
        {modal && (
          <ItemDetail
            isClicked={openModal}
            moreInfo={info}
            addToCart={customaCart}
          />
        )}
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
                  _id={cartItem._id}
                  Stock={cartItem.Stock}
                  onDelete={delItem}
                  ImageURL={cartItem.Image}
                  Qty={cartItem.Quantity}
                  Title={cartItem.Title}
                  Variant={cartItem.Variant}
                  PriceTag={cartItem.Price}
                  decrease={decreaseQty}
                  increase={increaseQty}
                />
              );
            })}
          </div>
          <Total Total={totalPrice} onCheckout={placeOrder} />
        </div>
        <section className="store-container">
          <Store isClicked={openModal} />
          <Address
            Summary={cart}
            isVisible={isCheckedOut}
            setVisible={setCheckOut}
          />
        </section>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

export default App;
