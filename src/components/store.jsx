import React from "react";
import Card from "./card";
import Products from "./products";
function Store(props) {
  return (
    <div className="item-container">
      {Products.map((product, index) => {
        return (
          <div className="container">
            <Card
              key={index}
              id={product._id}
              itemName={product.Title}
              Price={product.Price}
              Image={product.ImageURL}
              // Cart={() => props.onCart(product)}
              Stock={product.Stock}
              isClicked={() => props.isClicked(product)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Store;
