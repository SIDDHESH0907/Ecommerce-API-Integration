import React, { useState } from "react";
import Card from "./Card.js";
import "./CardList.css";
import products from "./db.json";
import "./SearchProduct.css";

function CardList() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="navbar">
        <div className="brand">E-com</div>
        <div className="search-container">
          <input onChange={(p) =>
          setSearch(p.target.value)} type="text" placeholder="Search products..." />
          <button type="button">Search</button>
        </div>
      </div>

      <div className="card-list">
        {products
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search);
          })
          .map((product) => (
            <Card className="list" key={product.id} {...product} />
          ))}
      </div>
    </>
  );
}

export default CardList;
