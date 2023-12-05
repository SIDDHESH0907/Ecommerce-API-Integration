import React from "react";
import Card from "./Card.js";
import "./CardList.css";
import products from "./db.json";

function CardList() {
  return (
    <>
    
    <div>
      {products.map((product)=>(
    <Card key={product.id} {...product}/>))}
    </div>
    </>
    
  );
}

export default CardList;
