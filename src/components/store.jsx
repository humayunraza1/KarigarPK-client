import React, { useState } from "react";
import { Pagination } from "@mui/material";
import Card from "./card"; // Assuming Card component is imported correctly
import Products from "./products"; // Assuming you have an array of products

function Store(props) {
  const itemsPerPage = 15; // Number of items to display per page
  const totalPages = Math.ceil(Products.length / itemsPerPage); // Calculate the total number of pages

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage; // Calculate the starting index for the current page
  const visibleProducts = Products.slice(startIndex, startIndex + itemsPerPage); // Get the products to display on the current page
  return (
    <div className="item-container">
      {visibleProducts.map((product, index) => (
        <div className="container" key={index}>
          <Card
            id={product._id}
            itemName={product.Title}
            Price={product.Price}
            Image={product.ImageURL}
            Stock={product.Stock}
            isClicked={() => props.isClicked(product)}
          />
        </div>
      ))}
      <div className="pagination-container">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            color: "white",
            borderRadius: "8px",
            backgroundColor: "white",
            "& .Mui-selected": {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Store;
