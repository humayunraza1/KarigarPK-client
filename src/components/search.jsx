import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import products from "./products";
import { blue } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchResult from "./searchResult";

function Search({ cartLength, isCartOpen, onCart }) {
  const [results, setResults] = useState([]);
  function handleChange(e) {
    const { value } = e.target;
    const newArr = products.filter((item) => {
      return (
        value &&
        item.Title.toLowerCase().includes(value.toLowerCase()) &&
        item.Stock !== 0
      );
    });
    setResults(newArr);
  }

  return (
    <div className="tools-container">
      {" "}
      <div className="searchEngine">
        <div className="input-wrapper">
          <SearchIcon sx={{ fontSize: 27, color: blue[900] }} />
          <input placeholder="Search..." onChange={handleChange}></input>
        </div>
        <SearchResult results={results} onCart={onCart} />
      </div>
      <div className="cart-container">
        <button
          className="cart-notification"
          current-count={cartLength}
          onClick={() => isCartOpen(true)}
        >
          <ShoppingCartIcon />
        </button>
      </div>
    </div>
  );
}

export default Search;
