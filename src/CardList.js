import React from "react";
import Card from "./Card.js";
import "./CardList.css";
import products from "./db.json";

function CardList() {
  return (
    <>
      <div className="card-list">
        {products.map((product) => (
          <Card className="list" key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default CardList;
