import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Notification from "./notification";
function ItemDetail(props) {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const item = props.moreInfo;

  function incrementQty() {
    setCount((prevCount) => {
      if (prevCount + 1 <= item.Stock) {
        return prevCount + 1;
      } else {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 2000);
        return count;
      }
    });
  }

  function decrementQty() {
    setCount((prevCount) => {
      if (prevCount - 1 >= 1) {
        return prevCount - 1;
      } else {
        alert("Invalid Quantity");
        return count;
      }
    });
  }

  return (
    <>
      {show && <Notification status="error" msg="Max quantity reached!" />}
      <div className="modal-container">
        <div id="modal">
          <div className="close-modal">
            <Button onClick={props.isClicked}>
              <CloseIcon sx={{ color: grey[50] }} fontSize="large" />
            </Button>
          </div>
          <div className="content">
            <img src={item.ImageURL} alt={item.Title}></img>
            <h1>{item.Title}</h1>
            <span>{item.Price}rs/piece</span>
            <p>{item.Variant}</p>
            <p>{item.Description}</p>
            <div className="AOC-container">
              <div className="setQuantity">
                <button className="change-Qty" onClick={decrementQty}>
                  <RemoveIcon fontSize="small" />
                </button>
                {count}
                <button className="change-Qty" onClick={incrementQty}>
                  <AddIcon fontSize="small" />
                </button>
              </div>
              <div>
                <button
                  className="AOC-btn"
                  onClick={() => props.addToCart(count)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
