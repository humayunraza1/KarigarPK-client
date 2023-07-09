import React from "react";

function SearchResult({ results, onSearch }) {
  return (
    <div
      className="searchResults"
      style={{ display: results.length === 0 && "none" }}
    >
      <div className="result-container">
        {results.map((result, index) => {
          return (
            <div
              className="cartItem resultItem"
              key={index}
              _id={result._id}
              onClick={() => {
                onSearch(result);
              }}
            >
              <div className="imgBox">
                <img alt="product" src={result.ImageURL}></img>
              </div>
              <div className="result-content">
                <div>
                  <h4>{result.Title}</h4>
                </div>
                <div>
                  <p>{result.Price}Rs</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
