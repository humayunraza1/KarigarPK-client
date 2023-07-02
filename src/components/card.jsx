import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Card(props) {
  return (
    <div className="card">
      <div className={props.Stock !== 0 ? "OOS-overlay-none" : "OOS-overlay"}>
        <div className="card-content">
          <div className="imgBx">
            <img alt={props.Alt} src={props.Image}></img>
          </div>
          <div className="contentBx">
            <h2>{props.itemName}</h2>
            <div className="price">
              <h2 value={props.Price}>{props.Price}</h2>
            </div>
            <div className="btn">
              <button onClick={() => props.Cart(props)}>
                <AddShoppingCartIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
